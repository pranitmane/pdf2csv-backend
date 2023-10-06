const Router = require('express').Router();
const upload = require('../middlewares/multerPDF'); 
const processPages = require('../services/textExtract');
const generateExcel = require('../services/generateExcel'); 
const connectToMongoDB = require('../services/db/connectDB');
const path = require('path');


const jsonToExcelPart1 = require('../services/jsonToExcel'); //testing part 1

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
    console.log('filename',fileName)
    jsonToExcelPart1(fileName).then((data)=>{
        res.send({
            message: 'file converted successfully',
            filename: data
        })
    })
})

Router.get('/download/:filename', (req,res)=>{
    const fileName = req.params.filename
    const filePath = path.join(__dirname,'..','..','outputs',`${fileName}.xlsx`);
    res.download(filePath);
})

module.exports = Router;