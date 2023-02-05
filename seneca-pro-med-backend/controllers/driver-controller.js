/*
    Handling API Requests -> POST, GET, UPDATE, and DELETE
    Controllers(API request) -> Service(functions)
*/

const express = require('express');
const router = express.Router();

const driverService = require("../services/driver-service");
const validation = require("../middleware/validation.js")
// Create a route(API request), and call the function that will handle the API request

// Create
router.post("/signup", validation.CreateUser, driverService.createDriver);

// Delete
router.delete("/:id", driverService.deleteDriver);

module.exports = router;