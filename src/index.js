const express = require('express');
const app = express();
const uploadRouter = require('./routes/allRoutes');
const connectToMongoDB = require('./services/db/connectDB');
const dotenv = require('dotenv')
dotenv.config()

connectToMongoDB();

app.use('/pdf2csv', uploadRouter)
         
app.get('/', (req, res) => {
    res.send('welcome to pdf2csv');
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});