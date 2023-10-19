//when we have array of json objects we can use json2xls to convert it to excel file
const json2xls = require('json2xls');
const textToJson = require('./textToJson');
const fs = require('fs');
const path = require('path');

const jsonToExcel = async (filename) => {
    try{
        const outputPath = path.join(__dirname,'..','..','outputs',`${filename}.xlsx`);
        const data = await textToJson(filename);
        const xls = json2xls(data);
        fs.writeFileSync(outputPath, xls, 'binary') 
        return filename.toString();
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = jsonToExcel;