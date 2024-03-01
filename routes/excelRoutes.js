const express = require('express')
const router = express.Router()
const excelService = ('../services/excelService')
const gradeService = require('../services/gradeService')

router.get('/read', (req, res) => {
    try {
        const data = excelServices.readExcelFile()
        res.json(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// New route for calculating grades 

router.get('/calculate-grades', (req, res) => {
    try {
        const result = gradeService.calculateGrades()
        res.json(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router