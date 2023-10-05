const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

// const { MONGO_URI } = process.env





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
