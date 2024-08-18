import { Card } from "../models/cardModel.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import { TryCatchError } from "../utils/tryCatch.js";

export const createCard = TryCatchError(async (req, res, next) => {
  const { title, description } = req.body;
  if (!title)
    return next(new ErrorHandler("Please provide title of card", 400));
  if (!description)
    return next(new ErrorHandler("Please provide description of card", 400));
  const newCard = await Card.create({
    title,
    description,
  });
  res.json({ success: true, newCard });
});

export const getCards = TryCatchError(async (req, res, next) => {
  const cards = await Card.find();
  res.json({ success: true, cards });
});
export const getCardByTitle = TryCatchError(async (req, res, next) => {
  const { title } = req.params;
  const card = await Card.findOne({
    title: {
      $regex: title,
      $options: "i",
    },
  });
  if (!card) return next(new ErrorHandler("Card Details Not Found", 404));
  res.json({ success: true, card });
});
