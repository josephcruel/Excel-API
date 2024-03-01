const fs = require('fs')
const path = require('path')

const filePath = path.join(_dirname, 'Student_Exam_and_Grading.xlsx')

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Error accessing the file:', err)
        return
    }
    console.log('File is accessible.')
})