// src/models/driver-model.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

//  creating schema
const driverSchema = new Schema({
  role: {
    type: String,
    default: 'Driver',
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
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address'],
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
  },
  province: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  licensePlate: {
    type: String,
    required: true,
  },
  vehicleModel: {
    type: String,
    required: true,
  },
});

const driver_User = mongoose.model('driver_User', driverSchema);
module.exports = driver_User;
