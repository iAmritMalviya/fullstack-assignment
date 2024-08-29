// models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  query: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
