// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/formController');

// Route for handling form submissions
router.post('/submit', submitForm);

module.exports = router;
