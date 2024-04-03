const Router = require("express").Router();
const upload = require("../middlewares/multerPDF");
const processPages = require("../services/textExtract");
const jsonToExcel = require("../services/jsonToExcel"); //testing part 1
const path = require("path");

Router.post("/upload", upload.single("pdf"), (req, res) => {
  console.log(
    "filepath",
    req.body.filePath,
    "filename",
    req.body.filenameWithoutExt
  );
  processPages(req.body.filePath, req.body.filenameWithoutExt)
    .then(() => {
      res.send({
        message: "file uploaded successfully",
        filename: req.body.filenameWithoutExt,
      });
    })
    .catch((e) => {
      res.send("error uploading file");
    });
});

Router.post("/getCSV", (req, res) => {
  const fileName = req.body.filename;
  console.log("filename", fileName);

  
  jsonToExcel(fileName).then((data) => {
      res.send({
        message: "file converted successfully",
        filename: data,
      });
    })
  .catch((err)=>{
    res.send({
      message:"file not found"
    })
  })
});

Router.get("/download/:filename", (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "outputs",
    `${fileName}.xlsx`
  );
  res.download(filePath);
});

module.exports = Router;
