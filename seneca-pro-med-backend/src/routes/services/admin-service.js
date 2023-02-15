// src/routes/services/admin-service.js

const adminModel = require('../../models/admin-model');
const bcrypt = require('bcryptjs');

// creating new user
module.exports.createAdmin = (req, res) => {
  // TODO: remove after implementing in frontend
  //password encryption
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  req.body.userName = req.body.email;

  adminModel.find({ userName: req.body.email }).then((userDB) => {
    if (userDB.length > 0) {
      res.json({
        message: 'An account with this email address already exists',
      });
    } else {
      const adminUser = new adminModel(req.body);
      adminUser
        .save()
        .then((newUser) => {
          res.json({
            message: 'A new admin has been created',
            data: newUser,
          });
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    }
  });
};

module.exports.getAdminById = (req, res) => {
  adminModel
    .findById(req.params.id)
    .then((users) => {
      if (users) {
        res.json({
          message: `admin with the id: ${req.params.id}`,
          data: users,
        });
      } else {
        res.status(404).json({
          message: `there is not admin with the id: ${req.params.id}`,
        });
      }
    })
    .catch((error) => {
      if (error.name === 'CastError' && error.kind === 'ObjectId') {
        res.status(404).json({
          message: `There is no admin in our database with the id: ${req.params.id}`,
        });
      } else {
        res.status(500).json({
          message: error,
        });
      }
    });
};
