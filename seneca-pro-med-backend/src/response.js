// src/response.js

module.exports.newSuccessResponse = (message, ...data) => {
  return {
    status: 'ok',
    message: message,
    ...data,
  };
};

module.exports.newFailedResponse = (message, ...data) => {
  return {
    status: 'error',
    message: message,
    ...data,
  };
};
