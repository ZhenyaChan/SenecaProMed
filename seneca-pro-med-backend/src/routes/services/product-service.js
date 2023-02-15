// src/routes/services/product-service.js

const productModel = require('../../models/product-model');

// Creating new product item
module.exports.createProduct = (req, res) => {
  const product = new productModel(req.body);
  product
    .save()
    .then((newProduct) => {
      res.json({
        message: 'New product is created',
        data: newProduct,
      });
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};

// Deleting a product
module.exports.deleteProduct = (req, res) => {
  productModel
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Product with ID (${req.params.id}) has been deleted successfully`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

// Updating product information
module.exports.updateProduct = (req, res) => {
  productModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((product) => {
      // If a product is found
      if (product) {
        res.json({
          message: `Product with ID (${req.params.id}) has been updated successfully`,
          data: product,
        });
      }
      // If a product is not found
      else {
        res.status(404).json({
          message: `Product with ID (${req.params.id}) is NOT found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

// GET all products
module.exports.getAllProducts = (req, res) => {
  productModel
    .find()
    .then((productData) => {
      if (productData.length > 0) {
        res.json({
          message: `Product data successfully found (total of ${productData.length} data)`,
          data: productData,
        });
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};

// GET a specific product (using ID)
module.exports.getProductById = (req, res) => {
  productModel
    .findById(req.params.id)
    .then((productData) => {
      res.json({
        message: `Data of a product with ID (${req.params.id}) successfully found`,
        data: productData,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: `There are no products with an ID of ${req.params.id} `,
      });
    });
};
