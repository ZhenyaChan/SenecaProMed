// src/middleware/validator.js

module.exports.createUser = (req, res, next) => {
  const { firstName, lastName, email, password, password1 } = req.body;

  const errors = [];

  if (!firstName.trim()) {
    errors.push({ field: 'firstName', message: 'Please enter a valid first name.' });
  }

  if (!lastName.trim()) {
    errors.push({ field: 'lastName', message: 'Please enter a valid last name.' });
  }

  if (!email.trim()) {
    errors.push({ field: 'email', message: 'Please enter a valid email.' });
  }

  if (!password.trim()) {
    errors.push({ field: 'password', message: 'Please enter a password.' });
  }

  if (password !== password1) {
    errors.push({ field: 'password', message: 'Passwords do not match.' });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: 'Unable to create user',
      data: errors,
    });
  }

  // if there are no errors, proceed to next action in the chain
  next();
};
