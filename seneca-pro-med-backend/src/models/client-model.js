// src/models/client-model.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

//  creating schema
const clientSchema = new Schema({
  role: {
    type: String,
    default: 'client',
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
    //type: mongoose.SchemaTypes.Email
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

const client_User = mongoose.model('client_User', clientSchema);
module.exports = client_User;
