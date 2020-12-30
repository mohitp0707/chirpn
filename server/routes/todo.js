const express = require('express')
const router = express.Router()
const todocntroller = require('../controller/todocontroller');
const multer  = require('multer');
var path = require('path')

router.use(express.static(path.join(__dirname, 'uploads')));

router.post('/add', todocntroller.create);
router.get('/alllist', todocntroller.findAll);
router.post('/update/:id', todocntroller.update);
router.post('/delete/:id', todocntroller.delete);



module.exports = router