// src/routes/services/admin-service.js

const adminModel = require('../../models/admin-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * @name Admin
 * @description Admin
 * @summary GET, GET(ALL) POST, PUT
 */

module.exports.getAdminById = (req, res) => {
  // Use the findById method to find an admin user with the specified ID.
  // Use a projection to include only the desired fields in the result.
  adminModel
    .findById(
      req.params.id,
      'role userName firstName lastName email postalCode street city province country'
    )
    .then((user) => {
      // If an admin user is found, return a JSON response with the user data.
      if (user) {
        res.json({
          message: `admin with the id: ${req.params.id}`,
          data: {
            userName: user.userName,
            name: `${user.firstName} ${user.lastName}`,
            contact: `${user.email} ${user.phoneNumber}`,
            address: `${user.postalCode} ${user.street} ${user.province} ${user.country}`,
          },
        });
        // If no admin user is found, return a 404 error.
      } else {
        res.status(404).json({
          message: `There is no admin with the id: ${req.params.id}`,
        });
      }
    })
    // If an error occurs, handle the error appropriately.
    .catch((error) => {
      if (error.name === 'CastError' && error.kind === 'ObjectId') {
        // If the error is a "CastError" with a "kind" of "ObjectId", return a 404 error.
        res.status(404).json({
          message: `There is no admin in our database with the id: ${req.params.id}`,
        });
      } else {
        // For any other type of error, return a 500 error.
        res.status(500).json({
          message: error,
        });
      }
    });
};

module.exports.getAllAdmins = async (req, res) => {
  try {
    const userData = await adminModel.find();
    if (userData.length > 0) {
      const usersData = userData.map((user) => {
        return {
          userName: user.userName,
          name: `${user.firstName} ${user.lastName}`,
          contact: `${user.email} ${user.phoneNumber}`,
          address: `${user.postalCode} ${user.street} ${user.province} ${user.country}`,
        };
      });
      res.status(200).json({
        message: ['All admin users', usersData.length],
        data: usersData,
      });
    } else {
      res.status(404).json({
        message: 'No admin users found',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error finding admin users: ${error}`,
    });
  }
};

module.exports.createAdmin = async (req, res) => {
  try {
    // TODO: remove after implementing in frontend
    //password encryption
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    req.body.userName = req.body.email;

    const existingAdmin = await adminModel.findOne({ email: req.body.email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'An account with this email address already exists' });
    }

    const newAdmin = new adminModel(req.body);
    const savedAdmin = await newAdmin.save();

    return res.status(201).json({
      message: `A new admin has been created`,
      data: {
        _id: savedAdmin._id,
        userName: savedAdmin.userName,
        name: `${savedAdmin.firstName} ${savedAdmin.lastName}`,
        contact: `${savedAdmin.email} ${savedAdmin.phoneNumber}`,
        address: `${savedAdmin.postalCode} ${savedAdmin.street} ${savedAdmin.province} ${savedAdmin.country}`,
      },
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports.UpdateAdminById = (req, res) => {
  adminModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (user) {
        res.json({
          message: `Admin with ID (${req.params.id}) has been updated successfully`,
          Username: user.userName,
          Name: `${user.firstName} ${user.lastName}`,
          Contact_info: `${user.email} ${user.phoneNumber}`,
          Address: `${user.postalCode} ${user.street} ${user.province} ${user.country}`,
          Updated_at: now,
        });
      } else {
        res.status(404).json({
          message: `Admin with ID (${req.params.id}) is NOT found`,
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
module.exports.deleteAdmin = (req, res) => {
  clientModel
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Admin with ID (${req.params.id}) has been deleted successfully`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

module.exports.adminLogin = async (req, res) => {
  console.log(`Calling POST ${req.headers.host}/admin/login`);

  const { username, password, role } = req.body;
  const adminUser = await adminModel.findOne({ userName: username, role: role });

  if (!adminUser) {
    return res.status(401).json({ message: 'invalid username or password' });
  } else {
    console.log('username is valid');
  }

  const isPasswordValid = await bcrypt.compare(password, adminUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'invalid username or password' });
  } else {
    console.log('password matches');
  }

  // create token
  const expiryDate = { expiresIn: '6 h' };
  const token = jwt.sign(
    { userName: adminUser.userName, role: adminUser.role },
    process.env.SECRET_KEY,
    expiryDate
  );

  res.status(200).json(token);
};
