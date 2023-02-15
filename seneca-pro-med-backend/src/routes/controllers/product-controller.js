// src/routes/controllers/product-controller.js

const express = require('express');
const router = express.Router();

const productService = require('../services/product-service');

// **************************
// NOTE: PLEASE KNOW THE ORDER OF THE ROUTES WITH THE SAME REST METHOD MATTER,
//       FOR EXAMPLE: router.get('/all_clients') SHOULD ALWAYS COME BEFORE router.get('/:id')
// **************************

/**
 * @name Product
 * @description Product endpoints
 * @summary GET, GET all, POST, PUT, DELETE
 */
router.get('/all_products', productService.getAllProducts);
router.get('/:id', productService.getProductById);
router.post('/add_product', productService.createProduct);
router.put('/:id', productService.updateProduct);
router.delete('/:id', productService.deleteProduct);

module.exports = router;
