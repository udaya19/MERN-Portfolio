const Education = require('../models/education');

exports.getEducation = async (req,res)=>{
    try {
        const education = await Education.find({});
        return res.json(200,{
            message:education
        })
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}

exports.postEducation = async (req,res)=>{
    try {
        const {education} = req.body;
        const newEducation = new Education({education})
        await newEducation.save();
        return res.json(200,{
            message:newEducation
        })
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}

exports.getSpecificEducation = async (req,res)=>{
    try {
        const education = await Education.findById(req.params.id);
        return res.json(200,{
            education
        })
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}

exports.updateEducation = async (req,res)=>{
    try {
        const {education} = req.body;
        const newEducation = await Education.findByIdAndUpdate(req.params.id,{education});
        newEducation.save();
        res.json(200,{
            newEducation
        })
    } catch (error) {
        res.json(500,{
            message:error.message
        })
    }

}

exports.deleteEducation = async (req,res)=>{
   try {
    const education = await Education.findById(req.params.id);
    education.remove();
    res.json(200,{
     message:"Education line deleted"
    })
   } catch (error) {
    res.json(500,{
        message:error.message
    })
   }
}