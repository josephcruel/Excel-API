const express = require('express')
const router = express.Router()
const uploadController = require('../controllers/uploadeController')

//POST endpoint for file upload 

router.post('/file', uploadController.uploadFile)

module.exports = router