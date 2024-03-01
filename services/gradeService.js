const XLSX = require('xlsx')
const path = require('path')

const calculateGrades = () => {
    const filePath = path.join(__dirname, '..', 'Student_Exam_and_Grading.xlsx')
    const workbook = XSLX.readFile(filePath)
    const sheetName = workbook.Sheetname[0]
    const worksheet = workbook.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(worksheet)

    let totalScore = 0
    const studentScores = data.map(student => {
        let studentScore = 0
        for (let i = 0; i <=9; i++) {
            studentScore += student[`Question ${i}`] || 0
        }
    totalScore += studentScore
    return { studentName: student[`Student Name`], score: studentScore}
    })

    const averageScore = totalScore /data.length
    return { studentScores, averageScore}
}

module.exports = {
    calculateGrades
}