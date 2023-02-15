// tests/unit/product-service.test.js

const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');

const productModel = require('../../src/models/product-model');

mongoose.set('strictQuery', false);

describe('/product endpoints', () => {
  let createdPharmacyIds = [];

  const productData = {
    title: 'jestProduct',
    description: 'description details',
    price: 10.5,
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
    await productModel.deleteMany({ _id: { $in: createdPharmacyIds } });
    await mongoose.connection.close();
  });

  // TODO
  test('', () => {});
});
