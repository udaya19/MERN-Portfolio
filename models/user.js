const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    }
},{timestamps:true})

// userSchema.pre('save',async function(next){
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password,10)
//     }
//     next();
// })

// userSchema.methods.matchPassword = async function(password){
//     return await bcrypt.compare(password,this.password);
// }

// userSchema.methods.generateToken = function(){
//     return jwt.sign({_id:this._id},'secretJWT')
// }

const User = mongoose.model('User',userSchema);
module.exports = User;