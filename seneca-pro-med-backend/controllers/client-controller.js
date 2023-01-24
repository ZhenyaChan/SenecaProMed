/*
controllers will handle API request, POST, GET, UPDATE, and DELETE, 
Controllers(API request) -> Service(functions)
*/

const express = require('express');
const router = express.Router();

const clientService = require("../services/client-service");

router.post("/signup",clientService.createClient);

module.exports = router;