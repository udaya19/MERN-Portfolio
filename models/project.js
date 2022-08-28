const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    product_id:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },      
    description:{
        type:String,
        required:true
    },
    images:{
        type:Object,
        required:true
    },        
})
const Project = mongoose.model('Project',projectSchema);
module.exports = Project;