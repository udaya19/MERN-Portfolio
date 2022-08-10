const Experience = require('../models/experience');

exports.getExperience = async (req,res)=>{
    try {
        const experience = await Experience.find({});
        return res.json(200,{
            message:experience
        })
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}

exports.postExperience = async (req,res)=>{
    try {
        const {experience} = req.body;
        const newExperience = new Experience({experience})
        await newExperience.save();
        return res.json(200,{
            message:newExperience
        })
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}

exports.getSpecificExperience = async (req,res)=>{
    try {
        const experience = await Experience.findById(req.params.id);
        return res.json(200,{
            experience
        })
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}

exports.updateExperience = async (req,res)=>{
    try {
        const {experience} = req.body;
        const newExperience = await Experience.findByIdAndUpdate(req.params.id,{experience});
        await newExperience.save();
        res.json(200,{
            newExperience
        })
    } catch (error) {
        res.json(500,{
            message:error.message
        })
    }

}

exports.deleteExperience = async (req,res)=>{
   try {
    const experience = await Experience.findById(req.params.id);
    experience.remove();
    res.json(200,{
     message:"Experience line deleted"
    })
   } catch (error) {
    res.json(500,{
        message:error.message
    })
   }
}