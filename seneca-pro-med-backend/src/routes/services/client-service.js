// src/routes/services/client-service.js

const clientModel = require('../../models/client-model');
const bcrypt = require('bcryptjs');

//creating new user
module.exports.createClient = (req, res) => {
  // TODO: remove after implementing in frontend
  //password encryption
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  req.body.userName = req.body.email;

  clientModel.find({ userName: req.body.email }).then((userDB) => {
    if (userDB.length > 0) {
      res.json({
        message: 'An account with this email address already exists',
      });
    } else {
      const clientUser = new clientModel(req.body);
      clientUser
        .save()
        .then((newUser) => {
          res.json({
            message: 'client user is created',
            data: newUser,
          });
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    }
  });
};

module.exports.getAllClients = (req, res) => {
  clientModel.find().then((clientsData) => {
    if (clientsData.length > 0) {
      res.json({
        message: ['All client users', clientsData.length],
        data: clientsData,
      });
    }
  });
};

module.exports.getClientById = (req, res) => {
  clientModel
    .findById(req.params.id)
    .then((client) => {
      if (client) {
        res.json({
          message: `users with the id${req.params.id}`,
          data: client,
        });
      } else {
        res.status(404).json({
          message: `there is not client with the id${req.params.id}`,
        });
      }
    })
    .catch((error) => {
      if (error.name === 'CastError' && error.kind === 'ObjectId') {
        res.status(404).json({
          message: `There is no user in our database with the id${req.params.id}`,
        });
      } else {
        res.status(500).json({
          message: error,
        });
      }
    });
};

module.exports.updateClientById = (req, res) => {
  clientModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((client) => {
      if (client) {
        res.json({
          message: `Client with ID (${req.params.id}) has been updated successfully`,
          data: client,
        });
      } else {
        res.status(404).json({
          message: `Client with ID (${req.params.id}) is NOT found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

/*Things to do */

//create order

//get order

//get all order(history)

//get current order

//update order

//delete order
