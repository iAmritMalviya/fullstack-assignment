const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

// Create a new card
router.post("/cards", async (req, res) => {
  const { title, description } = req.body;
  try {
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all cards
router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific card by title
router.get("/cards/:title", async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
