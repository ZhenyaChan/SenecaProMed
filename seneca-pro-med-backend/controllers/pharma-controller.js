// Handling API Requests -> POST, GET, UPDATE, and DELETE
// Controllers(API request) -> Service(functions)

const express = require("express");
const router = express.Router();

const pharmaService = require("../services/pharma-service");
const validation = require("../middleware/validation.js")
// POST routes
router.post("/signup", pharmaService.createPharmacy);

// GET routes
router.get("/All_Pharmacies", pharmaService.getAllPharmacyUsers);
router.get("/:id", pharmaService.getPharmacyById);

// UPDATE routes
router.put("/:id", pharmaService.updatePharmacyById);

// DELETE routes
router.delete("/:id", pharmaService.deletePharmacyById);

module.exports = router;
