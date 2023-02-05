const express = require('express');
const router = express.Router();

//User service
const adminService = require("../services/admin-service.js");
const clientService = require("../services/client-service.js");
const driverService = require("../services/driver-service.js");
const pharmaService = require("../services/pharma-service.js");

//validation for creating users
const validation = require("../middleware/validation.js")

//(Get, Post, Put Note: No Delete api will be implemented!!!)
//Admin  
router.get("/:id", adminService.getAdminById);

router.post("/signup",validation.CreateUser,adminService.createAdmin);

//Clients 
router.get("/client/:id", clientService.getClientById);
router.get("/clients/all_clients",  clientService.getAllClients);

router.post("/client/signup", validation.CreateUser,clientService.createClient);

//Driver
router.get('/driver/:id', driverService.getDriverById);
router.get('/drivers/all_drivers', driverService.getAllDrivers);

router.post('/driver/signup', validation.CreateUser, driverService.createDriver);

router.put('/driver/:id', driverService.updateDriver)

//Pharmacy
router.get('/pharmacy/:id',pharmaService.getPharmacyById);
router.get('/pharmacies/all_pharmacies', pharmaService.getAllPharmacyUsers);

router.post('/pharmacy/signup',validation.CreateUser, pharmaService.createPharmacy);

router.put('/pharmacy/:id',pharmaService.updatePharmacyById)

//Orders

module.exports = router;