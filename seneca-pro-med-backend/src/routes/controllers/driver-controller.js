// src/routes/controllers/driver-controller.js

const express = require('express');
const router = express.Router();

const { createUser } = require('../middleware/validator');

const driverService = require('../services/driver-service');

// **************************
// NOTE: PLEASE KNOW THE ORDER OF THE ROUTES WITH THE SAME REST METHOD MATTER,
//       FOR EXAMPLE: router.get('/all_clients') SHOULD ALWAYS COME BEFORE router.get('/:id')
// **************************

/**
 * @name Driver
 * @description Driver endpoints
 * @summary POST, DELETE
 */
router.post('/signup', createUser, driverService.createDriver);
router.delete('/:id', driverService.deleteDriver);

module.exports = router;
