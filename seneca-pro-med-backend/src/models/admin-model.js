// src/models/admin-model.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

//  creating schema
const adminSchema = new Schema({
  role: {
    type: String,
    default: 'admin',
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Array,
    required: true,
  },
  email: {
    type: String,
    required: true,
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

const admin_User = mongoose.model('admin_User', adminSchema);
module.exports = admin_User;
