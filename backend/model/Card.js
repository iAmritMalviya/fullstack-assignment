import mongoose, { Schema } from "mongoose";

const CardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Card = new mongoose.model("Card", CardSchema);

export default Card;
