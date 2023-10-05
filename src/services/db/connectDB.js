const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

// const { MONGO_URI } = process.env
// const {OPENAI_API_KEY} = process.env
const MONGO_URI= "mongodb+srv://pranitmane:pranit43214321@first-cluster.rkslipd.mongodb.net/"



const connectToMongoDB = () => {
    try {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'pdf-data-extraction'
        })
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}


module.exports = connectToMongoDB;
