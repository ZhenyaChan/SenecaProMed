const express = require('express');
const router = express.Router();

const adminService = require("../services/admin-service.js");

router.post("/signup",adminService.createAdmin);
router.get("/All_Clients", adminService.getAllClientUsers);
router.get("/:id", adminService.getAClient);


module.exports = router;