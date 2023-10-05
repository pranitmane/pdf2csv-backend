const Router = require('express').Router();
const upload = require('../middlewares/multerPDF'); // multer is used for uploading files
const processPages = require('../services/textExtract');
const generateExcel = require('../services/generateExcel');
const connectToMongoDB = require('../services/db/connectDB');

Router.post('/upload',upload.single("pdf"), (req,res)=>{
console.log('filepath',req.body.filePath, 'filename', req.body.filenameWithoutExt);
        processPages(req.body.filePath,req.body.filenameWithoutExt).then(()=>{
            res.send({
                message: 'file uploaded successfully',
                filename: req.body.filenameWithoutExt 
            });
    }
    )
.catch((e)=>{
        res.send('error uploading file');
    })
})

Router.post('/getCSV', (req,res)=>{
    const fileName = req.body.filename
    res.send('hello from getCSV');
})

module.exports = Router;