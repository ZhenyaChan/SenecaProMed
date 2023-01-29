const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating product schema
const productSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   }
});

const product = mongoose.model('product_List', productSchema);
module.exports = product;
