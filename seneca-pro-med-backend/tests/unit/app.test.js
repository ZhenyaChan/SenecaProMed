// test/unit/app.test.js

const request = require('supertest');
const app = require('../../src/app');

describe('handling request errors in app.js', () => {
  test('users requesting non-existent page should return 404', async () => {
    const result = await request(app).get('/not-found');

    expect(result.status).toBe(404);
  });

  // TODO: after securing app with authentication, implement tests for both
  // authenticated and unauthenticated users
});
