const About = require('../models/about');

exports.getAbout = async (req,res)=>{
    try {
        const about = await About.find({});
        return res.json(200,{
            message:about
        })
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}

exports.postAbout = async (req,res)=>{
    try {
        const {about} = req.body;
        const newAbout = new About({about})
        await newAbout.save();
        return res.json(200,{
            message:newAbout
        })
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}

exports.getSpecificAbout = async (req,res)=>{
    try {
        const about = await About.findById(req.params.id);
        return res.json(200,{
            about
        })
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}

exports.updateAbout = async (req,res)=>{
    try {
        const {about} = req.body;
        const newAbout = await About.findByIdAndUpdate(req.params.id,{about});
        newAbout.save();
        res.json(200,{
            newAbout
        })
    } catch (error) {
        res.json(500,{
            message:error.message
        })
    }

}

exports.deleteAbout = async (req,res)=>{
   try {
    const about = await About.findById(req.params.id);
    about.remove();
    res.json(200,{
     message:"About us line deleted"
    })
   } catch (error) {
    res.json(500,{
        message:error.message
    })
   }
}