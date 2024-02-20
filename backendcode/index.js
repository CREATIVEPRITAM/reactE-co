const port = 3500;
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
// mongoose.connect("mongodb+srclv://pritamsingh:Pritam@2023!@cluster0.fov5dyq.mongodb.net/reactE-com");

// API end point creation;

app.get("/", (req, res) => {
    res.send("Express App Is Running");
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "./upload",
    filename : (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage: storage})

// Creating upload Endpoint for imgae
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'),(req,res)=>{
    res.json({
        success: 1,
        image_url: `http:localhost:${port}/images/${req.file.filename}`
    })
})



app.listen(port, (error)=>{
    if(!error){
        console.log("Server Running on port : "+port);
    }else{
        console.log("Error : "+error);
    }
})

