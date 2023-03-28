// src/models/admin-model.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

//  creating schema
const adminSchema = new Schema(
  {
    role: {
      type: String,
      default: 'admin',
    },
    userName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
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
      trim: true,
    },
    postalCode: {
      type: String,
      required: true,
      uppercase: true,
    },
    province: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.index({ email: 1 });

const admin_User = mongoose.model('admin_User', adminSchema);
module.exports = admin_User;
