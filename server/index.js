const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Logging middleware
app.use(morgan('dev'));

// Static middleware
app.use(express.static(path.join(__dirname, '../public')));

// Parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Matches all requests to /api
app.use('/api', require('./api'));

// Sends user to index.html for requests that don't match api routes
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 500 error handler
app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
