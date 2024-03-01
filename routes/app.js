const express = require('express')
const excelRoutes = require('./routes/excelRoutes')


const app = express()
const port = 3000

app.use('/api/excel', excelRoutes)

app.listen(port, () =>{
    console.log(`Server running on port${port}`)
})

module.exports = app