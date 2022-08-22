const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req,res)=>{
    try {
        const {username,email,password} = req.body;
        const user = User.findOne({email:email});
        // if(user){
        //     return res.status(400).json({
        //         message:"User already registered"
        //     })
        // }
        const hashedPassword = await bcrypt.hash(password,10);
        let newUser = await User.create({
            username:username,
            email:email,
            password:hashedPassword
        })
        console.log(newUser);
        return res.status(200).json({
            message:newUser
        })
    } 
    catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

exports.loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User doesn't exist"
            })
        }
        // const isMatch = await user.matchPassword(password)
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                message:"Incorrect email/password"
            })
        }
        const payload = {
            id:user._id,
            name:user.username
        }
        const token = jwt.sign(payload,'jwtsecrettoken',{expiresIn:"1d"})
        // const token = user.generateToken();
        console.log(token);
        return res.json(200,{
            message:token
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}