const orderModel = require('../../models/order-model');
const bcrypt = require('bcryptjs');

// POST Route
// Add an Order to the database
module.exports.createOrder = async (req, res) => {
  try {
    const order = new orderModel(req.body);
        order
          .save()
          .then((newOrder) => {
            res.json({
              message: 'Order created',
              data: newOrder,
            });
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
        }catch (err) {
            res.status(500).json({ message: err }); // See error message in the browser
            console.log(`Error: ${err}`);
        }
    }
      

// GET Routes
// Get all orders
module.exports.getAllOrders = async (req, res) => {
  try {
    const orderData = await orderModel.find().lean();
    res.status(200).json({
      message: [`There are ${orderData.length} orders.`],
      data: orderData,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get order by clientId
// For client users to see their orders (and order status)
module.exports.getOrdersByClientId = async (req, res) => {
  try {
    const orderData = await orderModel.find({ clientId: req.params.clientId }).exec()
    res.status(200).json({
      message: [`There are ${orderData.length} orders the client ordered`],
      data: orderData,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

// Get client's ordered products
// For admins, pharmacists, drivers to see client's ordered products
module.exports.getClientProducts = async (req, res) => {
  try {
    const order = await orderModel.findOne({ _id: req.params.id }).lean().exec();
    res.status(200).json({
      message: `Order with the id: ${req.params.id} found.`,
      data: order.products,
    });
  } catch (err) {
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      res.status(404).json({
        message: `There is no Order with the id: ${req.params.id} in the database.`,
      });
    } else {
      res.status(500).json({ message: err });
    }
  }
}

// Get order by pharmacyId
// For pharmacy users to see their orders (and order status)
module.exports.getOrdersByPharmacyId = async (req, res) => {
  try {
    const orderData = await orderModel.find({ pharmacyId: req.params.pharmacyId }).exec()
    res.status(200).json({
      message: [`There are ${orderData.length} orders for pharmacy: ${pharmacyId}.`],
      data: orderData,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

// Get order by driverId
// For driver users to see their orders (and order status)
module.exports.getOrdersByDriverId = async (req, res) => {
  try {
    const orderData = await orderModel.find({ driverId: req.params.driverId }).exec()
    res.status(200).json({
      message: [`There are ${orderData.length} orders for driver: ${driverId}.`],
      data: orderData,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

// Get order by role "order_ready_for_pickup"
// For driver users to see orders they can choose to deliver
module.exports.getOrdersReadyForPickup = async (req, res) => {
  try {
    const orderData = await orderModel.find({ order_status: "Order Ready for Pickup" }).exec()
    // console.log("Pending Orders:", orderData);
    res.status(200).json({
      message: [`There are ${orderData.length} orders ready for pickup.`],
      data: orderData,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

// Get orders by status 'Order Delivered'
// For driver users to see orders they can choose to deliver
module.exports.getDeliveredOrders = async (req, res) => {
  try {
    const orderData = await orderModel.find({ order_status: "Order Delivered" }).exec()
    // console.log("Pending Orders:", orderData);
    res.status(200).json({
      message: [`There are ${orderData.length} orders delivered.`],
      data: orderData,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

// Get order by status: 'order_placed'
// For Pharmacists to see if any orders needs to be confirmed
module.exports.getOrdersConfirmed = async (req, res) => {
  try {
    const orderData = await orderModel.find({ order_status: "order_placed" }).exec()
    // console.log("Pending Orders:", orderData);
    res.status(200).json({
      message: [`There are ${orderData.length} orders needed to be confirmed.`],
      data: orderData,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}


// Get order by Id
module.exports.getOrderById = async (req, res) => {
  try {
    const order = await orderModel.findOne({ _id: req.params.id }).lean().exec();
    res.status(200).json({
      message: `Order with the id: ${req.params.id} found.`,
      data: order,
    });
  } catch (err) {
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      res.status(404).json({
        message: `There is no Order with the id: ${req.params.id} in the database.`,
      });
    } else {
      res.status(500).json({ message: err });
    }
  }
};

// PUT route
module.exports.updateOrderById = async (req, res) => {
  orderModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((order) => {
      // if order was found
      // console.log("aaa")
      if (order) {
      // console.log("bbb")
        res.status(200).json({
          message: `Updated Order with id: ${req.params.id}.`,
          data: order,
        });
      }
      // if not found
      else {
        console.log("ccc")
        res.status(404).json({
          message: `Order with id: ${req.params.id} could not be found.`,
        });
      }
    })
    .catch((err) => {
      console.log("ddd")
      res.status(500).json({
        message: err,
      });
    });
};

// DELETE Route
module.exports.deleteOrderById = async (req, res) => {
  try {
    await orderModel.deleteOne({ _id: req.params.id }).exec();
    res.status(204).json({
      message: `Order with id: ${req.params.id} deleted.`,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};