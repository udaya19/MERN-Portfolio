const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.post('/register',userController.registerUser)

router.get('/login',userController.loginUser)

router.get('/logout',userController.logOut);

module.exports = router;