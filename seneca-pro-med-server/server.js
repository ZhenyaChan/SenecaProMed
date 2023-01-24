const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`REST API is up and running on PORT: ${PORT}`);
});