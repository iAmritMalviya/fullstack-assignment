import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

export default Card;
