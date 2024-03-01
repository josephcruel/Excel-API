const multer = require('multer')
const path = require('path')
const upload = multer({ dest: path.join(__dirname, '../uploads')})

const uploadFile = (req,res) => {
    upload.single('file')(req, res, function (err) {
        if(err) {
            return res.status(500).json({message: 'File upload failed.', error: err})
        }
        // Process the file
        return res.status(200).json({messsage: 'File uploaded successfully.'})
    })
}

module.exports = {uploadFile}