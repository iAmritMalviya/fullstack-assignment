const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({
    id:String,
    tittle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;