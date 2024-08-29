import asyncHandler from "../utils/asynchandler.js";
import Card from "../models/card.model.js";

const getCards = asyncHandler(async (req, res) => {
  try {
    const cards = await Card.find().select("title description -_id");
    return res.status(200).json({
      cards: cards,
      message: "Cards fetched successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: "Cards Not Found" });
  }
});

const getCardById = asyncHandler(async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "Card ID is required" });
    }
    const card = await Card.findOne({
      id: req.params.id,
    }).select("title description -_id");
    if (card) {
      res
        .status(200)
        .json({ card: card, message: "Card fetched successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: "Card Not Found" });
  }
});

const createCard = asyncHandler(async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and Description are required fields" });
    }

    const card = await Card.create({
      title,
      description,
    }).select("title description -_id");
    const createdCard = await card.save();
    if (!createdCard) {
      return res.status(400).json({ message: "Invalid Card Data" });
    }
    res.status(201).json({ createCard: createdCard, message: "Card created" });
  } catch (error) {
    res.status(400).json({ message: "Invalid Card Data" });
  }
});

export default { getCards, getCardById, createCard };
