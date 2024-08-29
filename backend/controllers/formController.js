// controllers/formController.js
const Form = require('../models/Form');

const submitForm = async (req, res) => {
  try {
    const { name, email, query } = req.body;

    // Create a new form entry
    const formEntry = new Form({
      name,
      email,
      query
    });

    // Save the form entry to the database
    await formEntry.save();

    res.status(201).json({
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting form',
      error: error.message
    });
  }
};

module.exports = {
  submitForm
};
