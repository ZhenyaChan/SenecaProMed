// src/routes/services/client-service.js

const clientModel = require('../../models/client-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//creating new user
module.exports.createClient = (req, res) => {
  // TODO: remove after implementing in frontend
  //password encryption
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  req.body.email = req.body.email.toLowerCase();
  req.body.userName = req.body.email.toLowerCase();

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

// Getting all clients
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

// Getting client by ID
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

// PUT Route - Updating client's data by ID
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

// DELETE Route - Deleting clients by ID
module.exports.deleteClient = (req, res) => {
  clientModel
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Client with ID (${req.params.id}) has been deleted successfully`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

module.exports.clientLogin = async (req, res) => {
  console.log(`Calling POST ${req.headers.host}/client/login`);

  const { username, password, role } = req.body;
  const clientUser = await clientModel.findOne({ userName: username, role: role });

  if (!clientUser) {
    return res.status(401).json({ message: 'invalid username' });
  } else {
    console.log('username is valid');
  }

  const isPasswordValid = await bcrypt.compare(password, clientUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'invalid password' });
  } else {
    console.log('password matches');
  }

  // create token
  const expiryDate = { expiresIn: '6 h' };

  // Create a new userData object that excludes password, and replace _id with id
  const userData = { ...clientUser._doc };
  userData.id = clientUser.id;

  delete userData._id;
  delete userData.password;

  // Generate the JWT token using the userData object
  const token = jwt.sign(userData, process.env.SECRET_KEY, expiryDate);

  res.status(200).json(token);
};

/*
  TODO: 
    - Create order            []
    - Get order               []
    - Get all order (history) []
    - Get current order       []
    - Update order            []
    - Delete order            []
*/
