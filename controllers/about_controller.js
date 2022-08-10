const About = require('../models/about');

exports.getAbout = (req,res)=>{
    res.send("About route");
}

exports.postAbout = (req,res)=>{
    res.send("About post route");
}

exports.getSpecificAbout = (req,res)=>{
    res.send("About specific route");
}

exports.updateAbout = (req,res)=>{
    res.send("About route");
}

exports.deleteAbout = (req,res)=>{
    res.send("About route");
}