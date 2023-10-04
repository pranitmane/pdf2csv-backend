const express = require('express');
const app = express();
const uploadRouter = require('./routes/allRoutes');


app.use('/pdf2csv', uploadRouter)
         
app.get('/', (req, res) => {
    res.send('welcome to pdf2csv');
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});