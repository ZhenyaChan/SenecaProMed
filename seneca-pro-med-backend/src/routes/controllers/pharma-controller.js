// src/routes/controllers/pharma-controller.js

const express = require('express');
const router = express.Router();

const pharmaService = require('../services/pharma-service');
const orderService = require('../services/order-service.js');

// **************************
// NOTE: PLEASE KNOW THE ORDER OF THE ROUTES WITH THE SAME REST METHOD MATTER,
//       FOR EXAMPLE: router.get('/all_clients') SHOULD ALWAYS COME BEFORE router.get('/:id')
// **************************

/**
 * @name Pharmacy
 * @description Pharmacy endpoints
 * @summary GET, GET all, POST, PUT, DELETE
 */

router.get('/:pharmacyId', orderService.getOrdersByPharmacyId)
router.post('/login', pharmaService.pharmacyLogin);
router.post('/signup', pharmaService.createPharmacy);
router.put('/:id', pharmaService.updatePharmacyById);
router.put('/order/:id', orderService.updateOrderById)
router.delete('/:id', pharmaService.deletePharmacyById);

module.exports = router;
