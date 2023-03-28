// src/routes/services/driver-service.js

const driverModel = require('../../models/driver-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST Route - Creating new driver user
module.exports.createDriver = (req, res) => {
  // TODO: remove after implementing in frontend
  //password encryption
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  req.body.email = req.body.email.toLowerCase();
  req.body.userName = req.body.email.toLowerCase();

  driverModel.find({ userName: req.body.email }).then((userDB) => {
    if (userDB.length > 0) {
      res.json({
        message: 'An account with this email address already exists',
      });
    } else {
      const driverUser = new driverModel(req.body);
      driverUser
        .save()
        .then((newUser) => {
          res.json({
            message: 'client user is created',
            data: newUser,
          });
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
    }
  });
};

// GET Route - Get all drivers' information
module.exports.getAllDrivers = (req, res) => {
  driverModel
    .find()
    .then((driverData) => {
      res.json({
        message: `Driver data successfully found (total of ${driverData.length} data)`,
        data: driverData,
      });
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};

// GET Route - Get a specific driver's information (using ID)
module.exports.getDriverById = (req, res) => {
  driverModel
    .findById(req.params.id)
    .then((driverData) => {
      res.json({
        message: `Data of a driver with ID (${req.params.id}) successfully found`,
        data: driverData,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: `There are no drivers with an ID of ${req.params.id} `,
      });
    });
};

// PUT Route - Updating driver's information
module.exports.updateDriver = (req, res) => {
  driverModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((driver) => {
      // If driver is found
      if (driver) {
        res.json({
          message: `Driver with ID (${req.params.id}) has been updated successfully`,
          data: driver,
        });
      }
      // If driver is not found
      else {
        res.status(404).json({
          message: `Driver with ID (${req.params.id}) is NOT found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

// DELETE Route - Deleting a driver by ID
module.exports.deleteDriver = (req, res) => {
  driverModel
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Driver with ID (${req.params.id}) has been deleted successfully`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

module.exports.driverLogin = async (req, res) => {
  console.log(`Calling POST ${req.headers.host}/driver/login`);

  const { username, password, role } = req.body;
  const driverUser = await driverModel.findOne({ userName: username, role: role });

  if (!driverUser) {
    return res.status(401).json({ message: 'invalid username' });
  } else {
    console.log('username is valid');
  }

  const isPasswordValid = await bcrypt.compare(password, driverUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'invalid password' });
  } else {
    console.log('password matches');
  }

  // create token
  const expiryDate = { expiresIn: '6 h' };

  // Create a new userData object that excludes password, and replace _id with id
  const userData = { ...driverUser._doc };
  userData.id = driverUser.id;

  delete userData._id;
  delete userData.password;

  // Generate the JWT token using the userData object
  const token = jwt.sign(userData, process.env.SECRET_KEY, expiryDate);

  res.status(200).json(token);
};
