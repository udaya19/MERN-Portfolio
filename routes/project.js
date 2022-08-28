const express = require('express');
const router = express.Router();

router.get('/');
router.post('/add');
router.get('/:id');
router.put('/update/:id');
router.delete('/delete/:id');

module.exports = router