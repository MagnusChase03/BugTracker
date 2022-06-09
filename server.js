const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
var body_parser = require('body-parser');
var multer = require('multer');
var form = multer();

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://root:root@mongodb/test/?authSource=admin", (err, db) => {

    if (err) {

        console.log(err);

    } else {

        console.log("Connected to mongodb");

    }

});

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(form.array());

// Routes
const root = require('./routes/root');

app.use('/', root);

// Start Server
const port = 3000;
app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);

});
