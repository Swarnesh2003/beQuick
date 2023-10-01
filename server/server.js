const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt")
const bodyParser=require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session")
const app=express();

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
      secret: "subscribe",
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

app.listen(8000, function(){
    console.log("server started on port 8000");
})