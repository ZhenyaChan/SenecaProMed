/*
controllers will handle API request, POST, GET, UPDATE, and DELETE, 
Controllers(API request) -> Service(functions)
*/

const express = require('express');
const router = express.Router();

const driverService = require("../services/driver-service");

// Create a route(API request), and call the function that will handle the API request
router.post("/signup", driverService.createDriver);

module.exports = router;