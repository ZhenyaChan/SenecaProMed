// src/models/order-model.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  order_status: {
    type: String,
    default: 'order_placed',     // When customer places an order

    /*
      'Order Ready for Pickup' -> Pharmacy confirmed the order and driver can pick it up
      'Order Denied' -> Pharmacy declining the order (could be for a safety issue or something is wrong)
      'Order in Delivery' -> Driver picked up the order and it's on the way
      'Order Delivered' -> Driver delivered the ordered
    */

    // 'order_ready_for_pickup', // Pharmacy has order ready for driver to pick up
    // 'order_driver_accepted',  // Driver has selected this order
    // 'order_driver_pickedup',   // Driver has picked up order
    // 'order_delivered',        // Client has confirmed order delivery
  },

/*
Date
When creating an order, thinking to save the date as a string like this:
let date = new Date().toISOString()

The saved string will look like this: 2023-03-25T14:23:51.793Z

This above is: March 25, 2023  14:23
// this is 4 hours ahead of our time….it’s currently 10:23am

When we display the date (as part of displaying an order) we can pull out the substrings.

Unless we want to make substrings for year, month, day, time and save those separately when we POST an order.

Fake data is added as: 2023-03-25T14:23  
Same as above but with everything after (and including) ‘:seconds’ removed
*/

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

const order_model = mongoose.model('order_List', orderSchema);
module.exports = order_model;
