// tests/unit/client-service.test.js

const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');

const clientModel = require('../../src/models/client-model');

mongoose.set('strictQuery', false);

describe('/client endpoints', () => {
  let createdClientIds = [];

  const clientData = {
    firstName: 'testClient',
    lastName: 'testClient',
    password: 'password',
    password1: 'password',
    phoneNumber: '4371231234',
    email: 'testClient@email.com',
    postalCode: 'L4L 4L4',
    city: 'Toronto',
    province: 'Ontario',
    country: 'Canada',
  };

  const wrongClientData = {
    firstName: 'wrongClient',
    lastName: 'wrongClient',
    password: 123,
    password1: 123,
    phoneNumber: '4371231234',
    email: 'wrongClient@email.com',
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
    // await clientModel.deleteMany({ _id: { $in: createdClientIds } });
    await mongoose.connection.close();
  });

  // Testing whether client POST successfully works
  test('POST /client/signup => Successful register', async () => {
    const res = await request(app)
      .post('/client/signup')
      .set('Content-Type', 'application/json')
      .send(clientData);

    createdClientIds.push(res.body.data._id);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBeDefined;
  });

  // Testing whether client POST catches an error if there is already a user with same email
  test('POST /client/signup => Unsuccessful register (Same email already exists)', async () => {
    const res = await request(app)
      .post('/client/signup')
      .set('Content-Type', 'application/json')
      .send(clientData);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('An account with this email address already exists');
  });

  // Testing whether client POST catches an error with wrong type of input
  test('POST /client/signup => Error with wrong type of input', async () => {
    const res = await request(app)
      .post('/client/signup')
      .set('Content-Type', 'application/json')
      .send(wrongClientData);

    expect(res.statusCode).toBe(500);
  });

  // Testing whether client DELETE is successful
  test('DELETE /client/:id => Successful Delete', async () => {
    const res = await request(app).delete(`/client/${createdClientIds[0]}`);

    expect(res.statusCode).toBe(200);
  });

  // Testing whether driver DELETE is not successful (wrong id)
  test('DELETE /client/:id => Unsuccessful delete with wrong ID', async () => {
    const res = await request(app).delete('/client/1234');

    expect(res.statusCode).toBe(500);
  });
});
