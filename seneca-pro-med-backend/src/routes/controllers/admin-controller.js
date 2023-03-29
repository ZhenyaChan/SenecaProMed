// src/routes/controllers/admin-controller.js

const express = require('express');
const router = express.Router();

const { createUser } = require('../middleware/validator');

const adminService = require('../services/admin-service.js');
const clientService = require('../services/client-service.js');
const driverService = require('../services/driver-service.js');
const pharmaService = require('../services/pharma-service.js');
const orderService = require('../services/order-service.js');

// **************************
// NOTE: PLEASE KNOW THE ORDER OF THE ROUTES WITH THE SAME REST METHOD MATTER,
//       FOR EXAMPLE: router.get('/all_clients') SHOULD ALWAYS COME BEFORE router.get('/:id')
// **************************

/**
 * @name Admin
 * @description Admin endpoints
 * @summary GET, GET(ALL) POST, PUT
 */
router.get('/:id', adminService.getAdminById);
router.get('/all/admins', adminService.getAllAdmins);
router.post('/signup', createUser, adminService.createAdmin);
router.post('/login', adminService.adminLogin);
router.put('/:id', adminService.UpdateAdminById);
router.delete('/:id',adminService.deleteAdmin);

/**
 * @name Admin/Client
 * @description Admin endpoints for clients
 * @summary GET, GET (all), POST
 */
router.get('/clients/all_clients', clientService.getAllClients);
router.get('/client/:id', clientService.getClientById);
router.post('/client/signup', createUser, clientService.createClient);
router.put('/client/:id', clientService.updateClientById); 

/**
 * @name Admin/Driver
 * @description Admin endpoints for drivers
 * @summary GET, GET (all), POST, PUT
 */
router.get('/drivers/all_drivers', driverService.getAllDrivers);
router.get('/driver/:id', driverService.getDriverById);
router.post('/driver/signup', createUser, driverService.createDriver);
router.put('/driver/:id', driverService.updateDriver);

/**
 * @name Admin/Pharmacy
 * @description Admin endpoints for pharmacies
 * @summary GET, GET (all), POST, PUT
 */
router.get('/pharmacies/all_pharmacies', pharmaService.getAllPharmacyUsers);
router.get('/pharmacy/:id', pharmaService.getPharmacyById);
router.post('/pharmacy/signup', pharmaService.createPharmacy);
router.put('/pharmacy/:id', pharmaService.updatePharmacyById);


/**
 * @name Admin/Order
 * @description Admin endpoints for orders
 * @summary GET, GET (all), POST, PUT
 */
router.get('/orders/all_orders', orderService.getAllOrders)
router.get('/orders/ready_for_pickup', orderService.getOrdersReadyForPickup)
router.get('/orders/delivered_orders', orderService.getDeliveredOrders)
router.get('/orders/needs_confirmation', orderService.getOrdersConfirmed)
router.get('/orders/client/:clientId', orderService.getOrdersByClientId)
router.get('/orders/:pharmacyId', orderService.getOrdersByPharmacyId)
router.get('/orders/:driverId', orderService.getOrdersByDriverId)
router.get('/order/:id', orderService.getOrderById)
router.get('/order/products/:id', orderService.getClientProducts)
router.post('/order/create_order', orderService.createOrder)
router.put('/order/:id', orderService.updateOrderById)

module.exports = router;
