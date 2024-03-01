const express = require('express')
const router = express.Router()
const excelService = ('../services/excelService')
const gradeService = require('../services/gradeService')

router.get('/read', (req, res) => {
    try {
        const data = excelServices.readExcelFile()
        res.json(data)
    } catch(error) {
        res.status(500).send(error.message)
    }
})