
const mongoose = require('mongoose')


const CardSchema = new mongoose.Schema({
    title: { type: String, required: true ,lowercase:true},
    description: { type: String, required: true},
    link: { type: String, required: true }
}, { timestamps: true })

const CardModel = mongoose.model('Card', CardSchema)

module.exports = CardModel;