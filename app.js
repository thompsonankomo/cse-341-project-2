
const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./db/connection');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const URI = process.env.URI ;

const port = process.env.PORT || 8080;

// Connect to the database server
dbConnect(URI);

// Boody parser, this makes the req body readable
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Main router//
app.use('/', router);


app.listen(port, () => {
  console.log(`Connected to DB and Server listening on port: ${port}`);
})