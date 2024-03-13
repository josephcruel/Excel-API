const express = require('express')
const bodyParser = require('body-parser')
const db = require("./db")

const app = express()
const port = 3000

//Middleware to parseare req bodies 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Create a route to get all items
app.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (error ,results) => {
        if(error) {
            //Internal Server Error
            res.status(500).send("Error retrieving data from ")
        } else {
            //Sucessful 
            res.status(200).json(results)
        }
    })
})

//Create a route to add a new item/items

app.post('/items', (req, res) => {
    const newItem = req.body
    db.query('INSERT INTO items SET ?', newItem, (error, results) => {
        if(error) {
            res.status(500).send("Error saving the new item to database")
        } else {
            res.status(201).send("New Item added to the database")
        }
    })
})

//Start Server 
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})