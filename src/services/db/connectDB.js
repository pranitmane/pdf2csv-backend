const dotenv = require("dotenv");
dotenv.config();

async function connectToMongoDB() {
    try {
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName:'pdf-data-extraction'});
      console.log('MongoDB connection opened.');
    } catch (err) {
      console.error('Error connecting to MongoDB Atlas:', err);
      process.exit(1); // Exit the process with an error code
    }
  }

module.exports = connectToMongoDB;

