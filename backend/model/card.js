// models/Card.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => new mongoose.Types.ObjectId().toString()
    },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
