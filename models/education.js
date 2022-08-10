const mongoose = require('mongoose');
const educationSchema = new mongoose.Schema({
    education:{
        type:String,
        required:true
    }    
})
const Education = mongoose.model('Education',educationSchema);
module.exports = Education;