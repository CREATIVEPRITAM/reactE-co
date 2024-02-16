const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors())


//Data base connecto with mongoDB
mongoose.connect("mongodb+srv://pritamsingh:Pritam@2023!@cluster0.a4djlbn.mongodb.net/reactE-com");


// API creation

app.get("/", (req, res)=> {
    res.send("Express App is Running")
})


app.listen(port,(error) => {
if(!error) {
    console.log("Server Running on Port" +port)
}else{
    console.log("Error : "+error);
}
})
