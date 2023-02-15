// src/server.js

// to gracefully shutdown the server
const stoppable = require('stoppable');

// express app instance
const app = require('./app');

// get port number
const port = parseInt(process.env.PORT || 8080, 10);

// mongoose db instance
const mongoose = require('mongoose');

// ensures that only the fields specified in the Schema will be saved in the database
mongoose.set('strictQuery', false);

// start a server listening on set port.
// wrapped in stoppable to shutdown server gracefully
const server = stoppable(
  app.listen(port, () => {
    console.log(`REST API is up and running on PORT: ${port}`);

    // connect to MongoDB
    mongoose
      .connect(
        `mongodb+srv://senecapromed:senec%40ProMed1234@senecapromeddb.xjhswji.mongodb.net/UsersDB?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log('Successfully connected to MongoDB');
      })
      .catch((err) => {
        console.err(`Failed to connect to MongoDB: ${err}`);
      });
  })
);

// exporting an instance to be accessed by other parts if necessary
module.exports = server;
