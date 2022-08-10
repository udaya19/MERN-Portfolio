const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/about_controller');
//get about router
router.get('/about',aboutController.getAbout)

//post about router
router.post('/about/add',aboutController.postAbout);

//get specific about 
router.get('/about/:id',aboutController.getSpecificAbout);

//update about by id
router.put('/about/update/:id',aboutController.updateAbout);

//delete about by id
router.delete('/about/delete/:id',aboutController.deleteAbout);

module.exports = router;