// src/router.js

const express = require('express');
const { newSuccessResponse, newFailedResponse } = require('../response');

// router to mount endpoints
const router = express.Router();

// Exposes all API routes
// TODO: authentication can be used here for example:
// router.use('/role', authenticate(), require('<controller-path>'));
router.use('/admin', require('./controllers/admin-controller'));
router.use('/client', require('./controllers/client-controller'));
router.use('/driver', require('./controllers/driver-controller'));
router.use('/pharma', require('./controllers/pharma-controller'));
router.use('/product', require('./controllers/product-controller'));
router.use('/order', require('./controllers/order-controller'));

// Server Status Route
router.get('/', (req, res) => {
  // TODO: maybe client's shouldn't cache this response and request it fresh always
  // uncomment next line if this is a good thing for our app
  // res.setHeader('Cache-Control', 'no-cache');

  res.status(200).json(newSuccessResponse('Server started successfully'));
});

module.exports = router;
