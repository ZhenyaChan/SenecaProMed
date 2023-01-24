const express = require('express');
const router = express.Router();

const clientService = require("../users-services/client-service");

router.post("/signup",clientService.createClient);

module.exports = router;