'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Knock, knock');
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});

//Logging Middleware
app.use(morgan('dev'));

//Static Middleware
//option1
// app.use(express.static(path.join(__dirname, './path/to/static/assets')));

//option2
app.use(express.static(path.join(__dirname, '../public')));
// include our routes
app.use('/api', require('./api'));
//send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Parsing Middleware
//have to install --save body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal sever error');
});

module.exports = app;
