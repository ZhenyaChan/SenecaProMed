// src/routes/controllers/driver-controller.js

const express = require('express');
const router = express.Router();

const { createUser } = require('../middleware/validator');

const driverService = require('../services/driver-service');
const orderService = require('../services/order-service.js');

// **************************
// NOTE: PLEASE KNOW THE ORDER OF THE ROUTES WITH THE SAME REST METHOD MATTER,
//       FOR EXAMPLE: router.get('/all_clients') SHOULD ALWAYS COME BEFORE router.get('/:id')
// **************************

/**
 * @name Driver
 * @description Driver endpoints
 * @summary POST, PUT, DELETE
 */

router.get('/:driverId', orderService.getOrdersByDriverId)
router.post('/login', driverService.driverLogin);
router.post('/signup', createUser, driverService.createDriver);
router.put('/:id', orderService.updateOrderById)
router.delete('/:id', driverService.deleteDriver);

module.exports = router;
