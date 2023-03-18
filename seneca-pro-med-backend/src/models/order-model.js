// src/models/order-model.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  role: {
    type: String,
    default: 'order_placed', // When customer places an order
    // 'order_ready_for_pickup', // Pharmacy has order ready for driver to pick up
    // 'order_driver_accepted',  // Driver has selected this order
    // 'order_driver_pickedup,   // Driver has picked up order
    // 'order_delivered',        // Client has confirmed order delivery
  },

  // Chose string for Date because:
  // https://mongoosejs.com/docs/tutorials/dates.html
  // It does not look like the time would be included by default
  // Thinking to save date as string in this format:
  // '2023-03-17-0942' -> 'YYYY-MM-DD-hhmm' (hh in 24H format)
  datePlaced: {
    type: String,
    required: true
  },
  dateReady: {
    type: String,
    required: false
  },
  dateAccepted: {
    type: String,
    required: false
  },
  datePickedUp: {
    type: String,
    required: false
  },
  dateDelivered: {
    type: String,
    required: false
  },

  pharmacyId: {
    type: String,
    required: true
  },
  clientId: {
    type: String,
    required: true
  },
  driverId: {
    type: String,
    required: false
  },
  products: [
    {
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
      },
      quantity: {
        type: Number,
        required: true
      },
      photo: {
        type: String,
        required: true
      }
    },
  ],
});

const order_model = mongoose.model('order_Model', orderSchema);
module.exports = order_model;
