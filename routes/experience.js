const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experience_controller')
//get Experience details
router.get('/',experienceController.getExperience);

//add Experience details
router.post('/add',experienceController.postExperience);

//get specific Experience details
router.get('/:id',experienceController.getSpecificExperience);

//update specific Experience details 
router.put('/update/:id',experienceController.updateExperience);

//delete specific Experience detailss
router.delete('/delete/:id',experienceController.deleteExperience);

module.exports = router;