const mongoose = require('mongoose');
const connectToMongoDB = require('./connectDB');
const dotenv = require('dotenv');
dotenv.config();

async function getText(filename) {
    await connectToMongoDB();
    const DataModel1 = require('../../models/textModel');
    const result = await DataModel1.find({filename: filename});
    return result;
}