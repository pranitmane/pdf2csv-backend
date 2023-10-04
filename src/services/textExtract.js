const PDFExtract = require("pdf.js-extract").PDFExtract;
const DataModel1 = require('../models/textModel');

const pdfExtract = new PDFExtract();
const options = {}; // You can specify options if needed

async function processPages(filePath,filename) {
    try {
      const data = await new Promise((resolve, reject) => {
        pdfExtract.extract(filePath, options, (err, extractedData) => {
          if (err) {
            reject(err);
          } else {
            resolve(extractedData);
          }
        });
      });
  
      for (const [pageIndex, page] of data.pages.entries()) {
        let extractedText = '';
  
        for (const element of page.content) {
          if (element.str && element.dir === 'ltr') {
            extractedText += element.str + ' '; // Add a space between text elements
          }
        }
  
        const document = { page: pageIndex + 1, textContent: extractedText.trim(), filename: filename, numberOfPages: data.pages.length};
  
        // Insert the document into the MongoDB collection using the Mongoose model
        // await DataModel1.create(document);
        console.log(document);
      }
  
      console.log('Extraction and insertion completed successfully!');
    } catch (err) {
      console.error('Error during extraction and insertion:', err);
    }
  }

module.exports = processPages;