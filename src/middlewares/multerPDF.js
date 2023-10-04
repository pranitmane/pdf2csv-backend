const multer = require('multer'); //is the path coming from the root directory
const path = require('path');

const uploadsPath = path.join(__dirname,'..' ,'..' ,'uploads');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,uploadsPath); // null is for error // './uploads' is the path where the file will be stored
    },
    filename: function (req, file, cb) {
      let ext = file.originalname.substring(
        file.originalname.lastIndexOf("."),
        file.originalname.length
      ); // get the extension of the file // eg: .png, .jpg
      req.body.fileExt = ext;
      let filenameWithoutExt = Date.now();
      req.body.filenameWithoutExt = filenameWithoutExt;
      req.body.filePath = uploadsPath + '/' + filenameWithoutExt + ext;
      let filename = filenameWithoutExt + ext;
      cb(null, filename); // null is for error // Date.now() is used to get the current time in milliseconds
    },
  });

const upload = multer({ storage: storage });

module.exports = upload;