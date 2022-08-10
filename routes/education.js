const express = require('express');
const router = express.Router();
const educationController = require('../controllers/education_controller');
//get education details
router.get('/',educationController.getEducation);

//add education details
router.post('/add',educationController.postEducation);

//get specific education details
router.get('/:id',educationController.getSpecificEducation);

//update specific education details 
router.put('/update/:id',educationController.updateEducation);

//delete specific education detailss
router.delete('/delete/:id',educationController.deleteEducation);

module.exports = router;