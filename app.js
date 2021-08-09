const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require("path")
var bodyParser = require('body-parser');
const fs = require("fs");
const { fstat } = require('fs')
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const port = 3000;

//set view engine
app.set('view engine', 'ejs');

//connect to DB
// mongoose.connect('mongodb://localhost/db3', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('connection succesfull'))
//   .catch((err) => console.error(err));


//middleware for routes
app.use('/', routes);

//middleware for static folders
app.use(express.static('styles'));
app.use(express.static('scripts'));
app.use(express.static('info'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  
module.exports = app;
