// tests/unit/admin-service.test.js

const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');

const adminModel = require('../../src/models/admin-model');
const clientModel = require('../../src/models/client-model');
const driverModel = require('../../src/models/driver-model');
const pharmaModel = require('../../src/models/pharma-model');

mongoose.set('strictQuery', false);


describe('/admin endpoints', () => {
  let createdAdminIds = [];

  const adminData = {
    firstName: 'jestAdmin',
    lastName: 'jestAdmin',
    password: 'password',
    password1: 'password',
    phoneNumber: '1234567890',
    email: 'jestAdmin.jestAdmin@email.com',
    postalCode: 'L4L 4L4',
    street: "456 Elm St",
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
    await adminModel.deleteMany({ _id: { $in: createdAdminIds } });
    await mongoose.connection.close();
  });

  
  test('POST /admin/signup => creates a new Admin', async () => {
    const res = await request(app)
      .post('/admin/signup')
      .set('Content-Type', 'application/json')
      .send(adminData);
   
    createdAdminIds.push(res.body.data._id);

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toEqual('A new admin has been created');
  });

  test('POST /admin/signup => refuses to create a new admin with same email address', async () => {
    const res = await request(app)
      .post('/admin/signup')
      .set('Content-Type', 'application/json')
      .send(adminData);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual('An account with this email address already exists');
  });

  test('GET /admin/:id => retrieves an existing admin by Id', async () => {
    const res = await request(app).get(`/admin/${createdAdminIds[0]}`);

    expect(res.statusCode).toBe(200);
    
    expect(res.body.data.userName).toBe('jestAdmin.jestAdmin@email.com');
  });

  test('GET /admin/:id => returns a message when Id does not exist in db', async () => {
    const res = await request(app).get(`/admin/test`);

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('There is no admin in our database with the id: test');
  });
});

describe('/admin/client(s) endpoints', () => {
  let createdClientIds = [];

  const clientData = {
    firstName: 'jestClient',
    lastName: 'jestClient',
    password: 'password',
    password1: 'password',
    phoneNumber: '4371231234',
    email: 'jestClient.jestClient@email.com',
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
    await clientModel.deleteMany({ _id: { $in: createdClientIds } });
    await mongoose.connection.close();
  });

  test('POST /admin/client/signup => an admin can create a new client', async () => {
    const res = await request(app)
      .post('/admin/client/signup')
      .set('Content-Type', 'application/json')
      .send(clientData);

    createdClientIds.push(res.body.data._id);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeDefined;
  });

  test('POST /admin/client/signup => refuses to create a new client with the same email address', async () => {
    const res = await request(app)
      .post('/admin/client/signup')
      .set('Content-Type', 'application/json')
      .send(clientData);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('An account with this email address already exists');
  });

  test('GET /admin/client/:id => an admin can retrieve an existing client by Id', async () => {
    const res = await request(app).get(`/admin/client/${createdClientIds[0]}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data.userName).toBe('jestClient.jestClient@email.com');
  });

  test('GET /admin/clients/all_clients => an admin can retrieve a list of all existing clients in db', async () => {
    const res = await request(app).get('/admin/clients/all_clients');

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeDefined;
  });
});

describe('/admin/driver(s) endpoints', () => {
  let createdDriverIds = [];

  const driverData = {
    firstName: 'jestDriver',
    lastName: 'jestDriver',
    password: 'password',
    password1: 'password',
    phoneNumber: '4371231234',
    email: 'jestDriver.jestDriver@email.com',
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
    await driverModel.deleteMany({ _id: { $in: createdDriverIds } });
    await mongoose.connection.close();
  });

  test('POST /admin/driver/signup => an admin can create a new driver', async () => {
    const res = await request(app)
      .post('/admin/driver/signup')
      .set('Content-Type', 'application/json')
      .send(driverData);

    createdDriverIds.push(res.body.data._id);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeDefined;
  });

  test('POST /admin/driver/signup => refuses to create a new driver with the same email address', async () => {
    const res = await request(app)
      .post('/admin/driver/signup')
      .set('Content-Type', 'application/json')
      .send(driverData);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('An account with this email address already exists');
  });

  test('GET /admin/driver/:id => an admin can retrieve an existing driver by Id', async () => {
    const res = await request(app).get(`/admin/driver/${createdDriverIds[0]}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data.userName).toBe('jestDriver.jestDriver@email.com');
  });

  test('GET /admin/drivers/all_drivers => an admin can retrieve a list of all existing drivers in db', async () => {
    const res = await request(app).get('/admin/drivers/all_drivers');

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeDefined;
  });

  test('PUT /admin/driver/:id => an admin can update an existing driver details by Id', async () => {
    const newCityValue = 'Vaughan';

    const res = await request(app)
      .put(`/admin/driver/${createdDriverIds[0]}`)
      .send({ city: newCityValue });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.city).toBe(newCityValue);
  });
});

describe('/admin/pharmacy(pharmacies) endpoints', () => {
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

  test('POST /admin/pharmacy/signup => an admin can create a new pharmacy', async () => {
    const res = await request(app)
      .post('/admin/pharmacy/signup')
      .set('Content-Type', 'application/json')
      .send(pharmacyData);

    createdPharmacyIds.push(res.body.data._id);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeDefined;
  });

  test('POST /admin/pharmacy/signup => refuses to create a new pharmacy with the same email address', async () => {
    const res = await request(app)
      .post('/admin/pharmacy/signup')
      .set('Content-Type', 'application/json')
      .send(pharmacyData);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('An account with this email address already exists');
  });

  test('GET /admin/pharmacy/:id => an admin can retrieve an existing pharmacy by Id', async () => {
    const res = await request(app).get(`/admin/pharmacy/${createdPharmacyIds[0]}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data.userName).toBe('jestPharmacy.jestPharmacy@email.com');
  });

  test('GET /admin/pharmacies/all_pharmacies => an admin can retrieve a list of all existing pharmacies in db', async () => {
    const res = await request(app).get('/admin/pharmacies/all_pharmacies');

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeDefined;
  });

  test('PUT /admin/pharmacy/:id => an admin can update an existing pharmacy details by Id', async () => {
    const newCityValue = 'Vaughan';

    const res = await request(app)
      .put(`/admin/pharmacy/${createdPharmacyIds[0]}`)
      .send({ city: newCityValue });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.city).toBe(newCityValue);
  });
});
