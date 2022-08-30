const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_cintroller');
const isAuthenticated = require('../middlewares/auth');
router.get('/',projectController.getProjects);
router.post('/add',isAuthenticated.isAuthenticated,projectController.postProject);
router.get('/:id',projectController.getProjectById);
router.put('/update/:id',isAuthenticated.isAuthenticated,projectController.updateProject);
router.delete('/delete/:id',isAuthenticated.isAuthenticated,projectController.deleteProject);

module.exports = router