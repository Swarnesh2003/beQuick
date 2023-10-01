
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt")
const bodyParser=require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session")
const app=express();
const saltRounds = 10;
const mongoose = require('mongoose');
const mongoString = 'mongodb://127.0.0.1:27017/beQuick';
mongoose.connect(mongoString);
const db=mongoose.connection;

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

app.use(bodyParser.urlencoded({extended:true}))
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
app.post("/login", function(req, res){
    var username=req.body.user;
    var password=req.body.pass;
    console.log("username",username);
    console.log("password",password)
    res.json({message: "<h1>server running</h1>"})
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
    res.json({message: "<h1>server running</h1>"})
    bcrypt.hash(password, saltRounds, function(err, hash) {
        var dbo = db.db("mydb");
        var myobj = { Name: name, Contact: contact,Email:email,City:city,Username:username,Password:hash };
        dbo.collection("Users").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      
        })  
})
app.listen(8000, function(){
    console.log("server started on port 8000");
})


const Document = require('./models/document');         
const io =require("socket.io")(5000, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET", "POST"]
    },
});
