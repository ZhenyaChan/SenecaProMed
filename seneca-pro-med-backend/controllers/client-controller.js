/*
controllers will handle API request, POST, GET, UPDATE, and DELETE, 
Controllers(API request) -> Service(functions)
*/

const express = require('express');
const router = express.Router();

const clientService = require("../services/client-service");
const validation = require("../middleware/validation.js")

//Create a route(API request), and call the function that will handle the API request
router.post("/signup",validation.CreateUser,clientService.createClient);

module.exports = router;