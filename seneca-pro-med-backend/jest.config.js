// jest.config.js

// used to get a path
const path = require('path');

// get path to env.jest
const envFile = path.join(__dirname, 'env.jest');

// read env variables from jest.env
require('dotenv').config({ path: envFile });

// set jest options: instruction came from https://jestjs.io/docs/configuration
module.exports = {
  verbose: true,
  testTimeout: 5000,
};
