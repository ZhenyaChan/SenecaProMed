// src/routes/controllers/order-controller.js

const express = require('express');
const router = express.Router();

const orderService = require('../services/order-service');

// **************************
// NOTE: PLEASE KNOW THE ORDER OF THE ROUTES WITH THE SAME REST METHOD MATTER,
//       FOR EXAMPLE: router.get('/all_clients') SHOULD ALWAYS COME BEFORE router.get('/:id')
// **************************

/**
 * @name Order
 * @description Order endpoints
 * @summary GET, GET all, POST, PUT, DELETE
 */


// I think nothing should be here
// "Users" can create a new user or update a user
// But an order is not created by an order, it is created and updated by a user
// Maybe just have delete here for now
// And place all the API requests in the respective controllers

router.delete('/:id', orderService.deleteOrderById);

module.exports = router;
