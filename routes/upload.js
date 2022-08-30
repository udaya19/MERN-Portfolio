const router = require('express').Router();
const cloudinary = require('cloudinary');
const fs = require('fs');

cloudinary.config({ 
    cloud_name: 'dtoguorry', 
    api_key: '528411381656446', 
    api_secret: 'hhESrXn2l4bVAaEtok_b2SXengQ' 
  });

  router.post('/',(req,res)=>{
    try {
        if(!req.files || Object.keys(req.files).length === 0){
            return res.json(400,{
                message:"No files uploaded",
                success:false
            })
        }
        const file = req.files.file;
        if(file.size>1024*1024){
            removeTmp(file.tempFilePath);
            return res.json(400,{
                message:"File size  is too big",
                success:false
            })
        }
        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath);
            return res.json(400,{
                message:"File type not acceptable",
                success:false
            })
        }
        cloudinary.v2.uploader.upload(file.tempFilePath,{folder:'images'},async(err,result)=>{
            if(err){
                throw err;
            }
            removeTmp(file.tempFilePath);
            res.json({public_id:result.public_id,url:result.secure_url,success:true})
        })
    } catch (error) {
        return res.json(500,{
            message:error.message,
            success:false
        })
    }
  })
  router.delete('/destroy',(req,res)=>{
    try {
        const {public_id} = req.body;
        if(!public_id){
            return res.json(400,{
                message:"No images selected",
                success:false
            })
        }
        cloudinary.v2.uploader.destroy(public_id,(err,result)=>{
            if(err){
                throw err;
            }
            res.json(200,{
                message:'Image deleted',
                success:true
            })
        })
    } catch (error) {
        return res.json(500,{
            message:error.message,
            success:false
        })
    }
  })
  const removeTmp = (path)=>{
    fs.unlink(path,err=>{
        if(err){
            throw err;
        }
    })
  }
  module.exports = router;