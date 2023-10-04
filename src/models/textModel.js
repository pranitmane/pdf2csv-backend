const mongoose = require("mongoose");
// Define your Mongoose schema
const Schema = mongoose.Schema;
const extractedTextSchema = new Schema({
  page: { type: Number, required: true },
  textContent: { type: String, required: true },
  filename: { type: String, required: true },
  numberOfPages: { type: Number, required: true },
});


// Create a Mongoose model based on the schema
const DataModel1 = mongoose.model("extractedText", extractedTextSchema);

// Export the model
module.exports = DataModel1;







// gpt3ResponseSchema = new Schema({
//   page: { type: Number, required: true },
//   jsonResponse: { type: String, required: true },
//   numberOfPages: { type: Number, required: true },
//   filename: { type: String, required: true },
// });
