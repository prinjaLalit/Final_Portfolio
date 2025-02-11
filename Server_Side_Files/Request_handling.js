const express = require("express");
const app = express();
const path = require("path");
const User = require("./Database_Schema"); //This file exports the DB Model and is imported here in the Object "User"
const mongoose = require("mongoose");

app.use(express.json()); 

const cors = require("cors"); //Ask Sir about CORS
app.use(cors({ origin: "http://localhost:5174" }));

// "/Submit" endpoint par POST Type Request ko Handle krna
app.post("/submit", async (req,res)=>
{
    const {fullname, emailID, comments} = req.body; //Pehle Parse kro Req body, then access kro values for Validation below

    if(!fullname || !emailID || !comments) //Checking if all fields entered or not
    {
        res.status(404).send("All Data values Required");
    }
    else
    {
  
   const entry = new User({fullname, emailID, comments});
    const savedEntry = await entry.save();

    res.status(201).json(savedEntry);
    }
});

app.listen(5138, ()=>{

    console.log("Server Running");

});


