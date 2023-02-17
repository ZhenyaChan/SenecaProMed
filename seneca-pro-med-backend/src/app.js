// src/app.js

const express = require('express');
const cors = require('cors');

// functions to create a success or failure json response
// use example: res.status(200).json(newSuccessResponse(message))
const { newSuccessResponse, newFailedResponse } = require('./response');

// creates express app instance
const app = express();

// using cors() middleware to make post requests across origins
app.use(cors());

// middleware to parse incoming JSON requests and add them in req.body
app.use(express.json());

// ROUTES: all routes will be define under './routes'
app.use('/', require('./routes/router'));

// 404 middleware for requests to resources that doesn't exist
app.use((req, res) => {
  // TODO: replace with not found page
  res.status(404).json(newFailedResponse('Error 404: page not found'));
});

// error-handler middleware for everything else
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || 'unable to process the request';

  res.status(errStatus).json(newFailedResponse(errMessage));
});

// export app to be accessed by server.js
module.exports = app;
