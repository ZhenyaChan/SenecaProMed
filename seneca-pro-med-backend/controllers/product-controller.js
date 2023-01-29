/*
    Handling API Requests -> POST, GET, UPDATE, and DELETE
    Controllers(API request) -> Service(functions)
*/

const express = require('express');
const router = express.Router();

const productService = require("../services/product-service");

// Create a route(API request), and call the function that will handle the API request

// Create
router.post("/Add_Product", productService.createProduct);

// Delete
router.delete("/:id", productService.deleteProduct);

// Update (PUT)
router.put('/:id', productService.updateProduct);

// Retrieve Data (GET)
router.get('/All_Products', productService.getAllProducts);
router.get('/:id', productService.getProductById);

module.exports = router;