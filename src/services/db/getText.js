const mongoose = require('mongoose');
const DataModel1 = require('../../models/textModel');
const connectToMongoDB = require('./connectDB');
const dotenv = require('dotenv');
dotenv.config();

const getText = async (filename) => {
    try{
        await connectToMongoDB();
        const data = await mongoose.connection.collection('extractedtexts').find({ filename: filename }).toArray();
        await mongoose.connection.close()
        return data;
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}



module.exports = getText;

//we will get text from database and devide it into three parts and return it as an array