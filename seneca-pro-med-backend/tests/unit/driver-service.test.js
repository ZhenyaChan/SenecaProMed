// tests/unit/driver-service.test.js

const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');

const driverModel = require('../../src/models/driver-model');

mongoose.set('strictQuery', false);

describe('/driver endpoints', () => {
  let createdDriverIds = [];

  const driverData = {
    firstName: 'testDriver',
    lastName: 'testDriver',
    password: 'password',
    password1: 'password',
    phoneNumber: '4371231234',
    email: 'testDriver.testDriver@email.com',
    postalCode: 'L4L 4L4',
    city: 'Toronto',
    province: 'Ontario',
    country: 'Canada',
  };

  const wrongDriverData = {
    firstName: 'wrongDriver',
    lastName: 'wrongDriver',
    password: 123,
    password1: 123,
    phoneNumber: '4371231234',
    email: 'wrongDriver.wrongDriver@email.com',
    postalCode: 'L4L 4L4',
    city: 'Toronto',
    province: 'Ontario',
    country: 'Canada',
  };

  // Connect to db before all tests
  beforeAll(async () => {
    await mongoose.connect(
      'mongodb+srv://senecapromed:senec%40ProMed1234@senecapromeddb.xjhswji.mongodb.net/UsersDB?retryWrites=true&w=majority'
    );
  });

  // Close connection to db after all tests are done
  afterAll(async () => {
    // Delete all items that were created during the tests
    // await driverModel.deleteMany({ _id: { $in: createdDriverIds } });
    await mongoose.connection.close();
  });

  // Testing whether driver POST successfully works
  test('POST /driver/signup => Successful register', async () => {
    const res = await request(app)
      .post('/driver/signup')
      .set('Content-Type', 'application/json')
      .send(driverData);

    createdDriverIds.push(res.body.data._id);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBeDefined;
  });

  // Testing whether driver POST catches an error if there is already a user with same email
  test('POST /driver/signup => Unsuccessful register (Same email already exists)', async () => {
    const res = await request(app)
      .post('/driver/signup')
      .set('Content-Type', 'application/json')
      .send(driverData);

    // createdDriverIds.push(res.body.data._id);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('An account with this email address already exists');
  });

  // Testing whether driver POST catches an error with wrong type of input
  test('POST /driver/signup => Error with wrong type of input', async () => {
    const res = await request(app)
      .post('/driver/signup')
      .set('Content-Type', 'application/json')
      .send(wrongDriverData);

    expect(res.statusCode).toBe(500);
  });

  // Testing whether driver DELETE is successful
  test('DELETE /driver/:id => Successful Delete', async () => {
    const res = await request(app).delete(`/driver/${createdDriverIds[0]}`);

    expect(res.statusCode).toBe(200);
  });

  // Testing whether driver DELETE is not successful (wrong id)
  test('DELETE /driver/:id => Unsuccessful delete with wrong ID', async () => {
    const res = await request(app).delete('/driver/1234');

    expect(res.statusCode).toBe(500);
  });
});
