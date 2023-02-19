// src/models/pharma-model.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const pharmacySchema = new Schema({
  role: {
    type: String,
    default: 'pharmacy',
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  pharmacyName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const pharma_user = mongoose.model('pharma_User', pharmacySchema);
module.exports = pharma_user;
