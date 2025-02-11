const express = require("express");
const mongoose = require("mongoose");
// const { type } = require("os");
const path = require("path");
const app= express();

mongoose.connect("mongodb+srv://lalitprinja:12201219@portfolio.p1i7d.mongodb.net/Portfolio_Database?retryWrites=true&w=majority&appName=Portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("DBConnected")).catch((err)=> console.log("Error Caught in Connection" + err));

const DBSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    emailID: {type: String, required: true},
    comments: {type: String, required: true}
});

module.exports = mongoose.model("User", DBSchema);


