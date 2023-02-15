// tests/unit/pharma-service.test.js

const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');

const pharmaModel = require('../../src/models/pharma-model');

mongoose.set('strictQuery', false);

describe('/pharma endpoints', () => {
  let createdPharmacyIds = [];

  const pharmacyData = {
    pharmacyName: 'jestPharmacy',
    password: 'password',
    phoneNumber: '4371231234',
    email: 'jestPharmacy.jestPharmacy@email.com',
    postalCode: 'L4L 4L4',
    city: 'Toronto',
    province: 'Ontario',
    country: 'Canada',
  };

  // connect to db before all tests
  beforeAll(async () => {
    await mongoose.connect(
      'mongodb+srv://senecapromed:senec%40ProMed1234@senecapromeddb.xjhswji.mongodb.net/UsersDB?retryWrites=true&w=majority'
    );
  });

  // close connection to db after all tests are done
  afterAll(async () => {
    // Delete all items that were created during the tests
    await pharmaModel.deleteMany({ _id: { $in: createdPharmacyIds } });
    await mongoose.connection.close();
  });

  // TODO
  test('', () => {});
});
