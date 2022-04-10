const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8000;

// Connect to database
mongoose.connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));

// Use CORS
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {

    console.log(err);
    next();

});

app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});
