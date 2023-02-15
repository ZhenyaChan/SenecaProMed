// test/unit/response.test.js

const { newSuccessResponse, newFailedResponse } = require('../../src/response');

describe('API Responses', () => {
  test('create a new success response', () => {
    const successResponse = newSuccessResponse('success');

    expect(successResponse).toEqual({ status: 'ok', message: 'success' });
  });

  test('create a new failed response', () => {
    const failedResponse = newFailedResponse('failed');

    expect(failedResponse).toEqual({ status: 'error', message: 'failed' });
  });
});
