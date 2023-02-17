// src/routes/controllers/client-controller.js

const express = require('express');
const router = express.Router();

const { createUser } = require('../middleware/validator');

const clientService = require('../services/client-service');

// **************************
// NOTE: PLEASE KNOW THE ORDER OF THE ROUTES WITH THE SAME REST METHOD MATTER,
//       FOR EXAMPLE: router.get('/all_clients') SHOULD ALWAYS COME BEFORE router.get('/:id')
// **************************

/**
 * @name Client
 * @description Client endpoints
 * @summary POST, DELETE
 */
router.post('/signup', createUser, clientService.createClient);
router.delete('/:id', clientService.deleteClient);

module.exports = router;
