
var express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt")
const bodyParser=require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session")
const app=express();
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

var router= express.Router();

router.post("/newauction", function(req, res){
    var name = req.body.name;
    var category = req.body.category;
    var startprice = req.body.startprice;
    var time = req.body.time;
    var reserve = req.body.reserve;
    var maxbid = req.body.maxbid;
    var desc = req.body.desc;
    var img = req.body.img;
    var myquery = { Username: req.session.user.Username };
    
    var myobj = {  
      userId: req.session.user._id ,
      name: name,
      category: category,
      startprice: startprice,
      time: time,
      reserve: reserve,
      maxbid: maxbid,
      desc: desc,
      img: img };
    db.collection("Auctions").insertOne(myobj, function(err, resu) {
      if (err) throw err;
      console.log('new auction:', resu)
      console.log("1 document inserted");
      var newvalues = {
        $push: {
          "auction.ongoing": {
            id:resu.insertedId,
            name: name,
            category: category,
            startprice: startprice,
            time: time,
            reserve: reserve,
            maxbid: maxbid,
            desc: desc,
            img: img 
          }
        }
      };
      db.collection("Users").updateOne(myquery, newvalues, function (err, result) {
        if (err) {
          console.error("Error inserting data:", err);
          res.status(500).json({ message: 'Error inserting data' }); // Handle the error gracefully
        } else {
          console.log("1 document updated");
          res.json({ message: 'true' });
        }
      });
    });
    
})

router.get("/ongoingauction", function(req, res){
    
const username = req.session.user.Username;

// Use the findOne method to find the user by username and project the "auction.ongoing" field
db.collection("Users").findOne({ Username: username },{ projection: { "auction.ongoing": 1 }}, function(err, results) {
      // Access the "auction.ongoing" field of the user
      const ongoingAuctions = results;
      console.log('Ongoing Auctions:', ongoingAuctions);
      res.json(ongoingAuctions);
  })
  .catch((error) => {
    // Handle any errors that may occur during the query
    console.error('Error:', error);
  });
})

module.exports = router