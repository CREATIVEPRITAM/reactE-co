const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors());

// Connect the data base mongoDb Atlas
mongoose.connect("mongodb+srv://pritamsingh:Pritam@2023!@cluster0.rmpucsd.mongodb.net/reactE-com");
// mongoose.connect("mongodb+srv://pritamsingh:Pritam@2023!@cluster0.rmpucsd.mongodb.net/");


// API end oint creation;

app.get("/", (req, res) => {
    res.send("Express Is Running")
})

app.listen(port, (error)=>{
    if(!error){
        console.log("Server Running on port : "+port);
    }else{
        console.log("Error : "+error);
    }
})

