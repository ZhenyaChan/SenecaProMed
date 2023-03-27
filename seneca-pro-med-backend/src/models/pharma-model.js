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
    validate: {
      validator: function (v) {
        return /^(?:\d{3}|\(\d{3}\))[- ]?\d{3}[- ]?\d{4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address'],
  },
  street: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Z]\d[A-Z] \d[A-Z]\d$/.test(v);
      },
      message: (props) => `${props.value} is not a valid postal code!`,
    },
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
