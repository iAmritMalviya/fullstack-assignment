const express = require("express");
const Card = require("../models/Card");
const router = express.Router();

// Create a new card
router.post("/", async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    next(err);
  }
});

// Get all cards
router.get("/", async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    next(err);
  }
});

// Get a specific card by title
router.get("/:title", async (req, res, next) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.json(card);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
