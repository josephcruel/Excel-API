// Importing required modules for the server
const express = require('express'); // Express.js framework for Node.js
const bodyParser = require('body-parser'); // Middleware to parse incoming request bodies
const multer = require('multer'); // Middleware for handling multipart/form-data (primarily used for file uploads)

// Importing route handlers for different functionalities
const excelRoutes = require('./routes/excelRoutes'); // Routes for handling Excel-related operations
const uploadRoutes = require('./routes/uploadRoutes'); // Routes for handling file uploads

// Creating an instance of Express application
const app = express();

// Setting the port number for the server
const port = 3000;

// Middleware to parse JSON bodies of incoming requests
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies of incoming requests with extended mode
app.use(bodyParser.urlencoded({extended: true}));

// Routing for handling file uploads, with '/upload' as the base path
app.use('/upload', uploadRoutes);

// Routing for handling Excel-related operations, with '/api/excel' as the base path
app.use('/api/excel', excelRoutes);

// Starting the server to listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Exporting the Express application for testing or use in other modules
module.exports = app;
