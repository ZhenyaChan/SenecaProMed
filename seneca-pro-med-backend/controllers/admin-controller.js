const express = require('express');
const router = express.Router();

const adminService = require("../services/admin-service.js");
const clientService = require("../services/client-service.js");
const driverService = require("../services/driver-service.js");
const pharmaService = require("../services/pharma-service.js");
const validation = require("../middleware/validation.js")

//Admin 
router.get("/:id", adminService.getAdminById);
router.post("/signup",validation.CreateUser,adminService.createAdmin);

//Clients
router.get("/client/:id", clientService.getClientById);
router.get("/client/signup", clientService.createClient);
router.get("/client/all_clients", clientService.getAllClients);

//Driver
router.get('/driver/:id',driverService.getDriverById);
router.get('/driver/all_drivers',driverService.getAllDrivers);
router.post('/driver/signup', validation.CreateUser,driverService.createDriver);
router.put('/driver/:id', driverService.updateDriver)

//Pharmacy
router.get('/pharmacy/:id',pharmaService.getPharmacyById);
router.get('/pharmacy/all_pharmacies', pharmaService.getAllPharmacyUsers);
router.post('/pharmacy/signup',validation.CreateUser, pharmaService.createPharmacy);
router.put('/pharmacy/:id',pharmaService.updatePharmacyById)

//Orders

module.exports = router;