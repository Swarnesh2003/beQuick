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
app.listen(8000, function(){
    console.log("server started on port 8000");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/beQuick');  
const Document = require('./models/document');         
const io =require("socket.io")(5000, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET", "POST"]
    },
});

{/*let defaultValue ="";
io.on("connection",(socket)=>{ 
    socket.on("data", (data) => {
        console.log(data)
    })
    socket.on("get-document", async (documentId)=>{
        const document= await findOrCreateDocument(documentId);
        console.log(documentId)
        socket.join(documentId)
        socket.emit("load-document", document.data);
        socket.on("send-changes", (delta)=>{
            console.log(delta)
            socket.broadcast.to(documentId).emit("recieve-changes", delta);
        });
        socket.on("save-document", async(data)=>{
            await Document.findByIdAndUpdate(documentId,{data})
        })
    })
    
    console.log("A user connected!")
  
});

async function findOrCreateDocument(id){
    if(id==null) return;
    const document = await Document.findById(id);
    if(document) return document;
return await Document.create({_id:id, data:defaultValue}) */}


