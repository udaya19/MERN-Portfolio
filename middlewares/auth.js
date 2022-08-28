const jwt = require('jsonwebtoken');
const User = require('../models/user');
 exports.isAuthenticated = async (req,res,next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.json(400,{
                message:"Invalid Autharization"
            })
        }
        const decoded = await jwt.verify(token,"jwtsecrettoken");
        const userId = User.findById(decoded._id);
        req.user = userId;
        next();
    } catch (error) {
        return res.json(500,{
            message:error.message
        })
    }
}