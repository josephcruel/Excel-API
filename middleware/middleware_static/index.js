const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express 

app.request((req, res, next) => {
    console.log("req IP: " + req.url)
    console.log("req date: " + new Date)
    next()
})

app.request((req, res, next) => {
    const filePath = path.join(__dirname, "static", req.url)
    fs.stat(filePath, (err, fileInfo) => {
        if(err) {
            next()
            return
        } 

        if(fileInfo.isFile()) {
            res.sendFile(filePath)
        } else {
            next()
        }
    })
})

app.use((req, res) => {
    res.status(404)
    res.send("File not found!")
})

app.listen(3000, () => {
    console.log("Server running on port 3000!")
})