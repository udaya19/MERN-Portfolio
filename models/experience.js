const mongoose = require('mongoose');
const experienceSchema = new mongoose.Schema({
    experience:{
        type:String,
        required:true
    }    
})
const Experience = mongoose.model('Experience',experienceSchema);
module.exports = Experience;