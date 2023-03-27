// src/routes/services/pharma-service.js

const pharmaModel = require('../../models/pharma-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST Route
// Add a Pharmacy to the database
module.exports.createPharmacy = async (req, res) => {
  try {
    // TODO: remove after implementing in frontend
    //password encryption
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    req.body.email = req.body.email.toLowerCase();
    req.body.userName = req.body.email.toLowerCase();
    
    pharmaModel.find({ userName: req.body.email }).then((userDB) => {
      if (userDB.length > 0) {
        res.json({
          message: 'An account with this email address already exists',
        });
      } else {
        const pharmacyUser = new pharmaModel(req.body);
        pharmacyUser
          .save()
          .then((newUser) => {
            res.json({
              message: 'Pharmacy user is created',
              data: newUser,
            });
          })
          .catch((err) => {
            console.log(`error ${err}`);
          });
      }
    });
  } catch (err) {
    res.status(500).json({ message: err }); // See error message in the browser
    console.log(`Error: ${err}`);
  }
};

// GET Routes
module.exports.getAllPharmacyUsers = async (req, res) => {
  try {
    const pharmaData = await pharmaModel.find().lean();
    pharmaData.forEach(
      (pharmacy) => delete pharmacy.password // We do not Pass back the password
    );
    res.status(200).json({
      message: [`There are ${pharmaData.length} Pharmacy users.`],
      data: pharmaData,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports.getPharmacyById = async (req, res) => {
  try {
    const pharmacy = await pharmaModel.findOne({ _id: req.params.id }).lean().exec();
    delete pharmacy.password; // We do not Pass back the password
    res.status(200).json({
      message: `Pharmacy user with the id: ${req.params.id} found.`,
      data: pharmacy,
    });
  } catch (err) {
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      res.status(404).json({
        message: `There is no Pharmacy with the id: ${req.params.id} in the database.`,
      });
    } else {
      res.status(500).json({ message: err });
    }
  }
};

// PUT route
module.exports.updatePharmacyById = async (req, res) => {
  pharmaModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((pharmacy) => {
      // if pharmacy was found
      if (pharmacy) {
        res.status(200).json({
          message: `Updated Phramacy with id: ${req.params.id}.`,
          data: pharmacy,
        });
      }
      // if not found
      else {
        res.status(404).json({
          message: `Pharmacy with id: ${req.params.id} could not be found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

// DELETE Route
module.exports.deletePharmacyById = async (req, res) => {
  try {
    await pharmaModel.deleteOne({ _id: req.params.id }).exec();
    res.status(204).json({
      message: `Pharmacy user with id: ${req.params.id} deleted.`,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports.pharmacyLogin = async (req, res) => {
  console.log(`Calling POST ${req.headers.host}/pharma/login`);

  const { username, password, role } = req.body;
  const pharmaUser = await pharmaModel.findOne({ userName: username, role: role });

  if (!pharmaUser) {
    return res.status(401).json({ message: 'invalid username' });
  } else {
    console.log('username is valid');
  }

  const isPasswordValid = await bcrypt.compare(password, pharmaUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'invalid password' });
  } else {
    console.log('password matches');
  }

  // create token
  const expiryDate = { expiresIn: '6 h' };

  // Create a new userData object that excludes password, and replace _id with id
  const userData = { ...pharmaUser._doc };
  userData.id = pharmaUser.id;

  delete userData._id;
  delete userData.password;

  // Generate the JWT token using the userData object
  const token = jwt.sign(userData, process.env.SECRET_KEY, expiryDate);

  res.status(200).json(token);
};
