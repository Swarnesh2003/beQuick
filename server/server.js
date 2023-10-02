
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt")
const bodyParser=require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session")
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const saltRounds = 10;
const mongoose = require('mongoose');
const mongoString = 'mongodb://127.0.0.1:27017/bequick';
mongoose.connect(mongoString);
const db=mongoose.connection;

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true
    })
  );
app.use(express.json());

//session middleware
app.use(
    session({
      key: "userId",
      secret: "beQuick",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: false,
      },
    })
  );
app.use(cookieParser());

app.get("/data", function(req, res){
    res.json({message: "<h1>server running</h1>"})
})
app.get("/getDet", function(req, res){
  console.log(req.session.user)
  if (req.session.user) {
      res.json({message: 'true', name: req.session.user.Name,username:req.session.user.Username, id:req.session.user._id })
    } else {
      res.json({ message: 'false' });
    }
})
app.post("/login", function(req, res){
  var username = req.body.user;
  var password = req.body.pass;
  db.collection("Users").findOne({ Username: username }, function(err, results) {
    if (err) throw err;
    if (results.length !=0){
      console.log(results.Password)
      bcrypt.compare(password, results.Password, function(err, result) {
        console.log(result)
         if (result == true){
                req.session.user = results;
                res.json({message: 'true'})
            }
            else{
              res.json({message:'false'})
            }
    })
  }
  else{
      res.json({message: 'nouser'})

  }

  });

    
})
app.post("/signup", function(req, res){
    var name=req.body.name1;
    var contact=req.body.contact1;
    var email=req.body.email1;
    var city=req.body.city1;
    var username=req.body.username1;
    var password=req.body.password1;
    console.log("name",name);
    console.log("contact",contact);
    console.log("username",email);
    console.log("username",city);
    console.log("username",username);
    console.log("password",password)
   
    bcrypt.hash(password, saltRounds, function(err, hash) {
        
        var myobj = { Name: name, Contact: contact,Email:email,City:city,Username:username,Password:hash,auction:{ongoing:[], closed:[],transaction:[]} };
        db.collection("Users").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
        });
        res.json({message: "<h1>server running</h1>"})
      
        })  
})

const auctions = [];

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('create auction', (name) => {
    const auction = { id: auctions.length + 1, name };
    auctions.push(auction);
    io.emit('auction created', auction);
  });

  socket.on('join auction', (auctionId) => {
    // Handle joining an auction
  });

  socket.on('place bid', ({ auctionId, bid }) => {
    // Handle placing a bid in an auction
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

var auctioneer = require('./routes/auctioneer.js')
app.use('/auctioneer', auctioneer);



app.listen(8000, function(){
    console.log("server started on port 8000");
})



