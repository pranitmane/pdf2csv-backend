const Router = require('express').Router();
const upload = require('../middlewares/multerPDF'); // multer is used for uploading files
const processPages = require('../services/textExtract');

Router.post('/upload',upload.single("pdf"), (req,res)=>{
    processPages(req.body.filePath,req.body.filenameWithoutExt).then(()=>{
    res.send('file uploaded successfully');
    }).catch((e)=>{
        res.send('error uploading file');
    })
})

Router.post('/getCSV', (req,res)=>{
    res.send('hello from getCSV');
})

module.exports = Router;