const express = require("express");
const Card = require("./db");
const router = express.Router();

router.post("/cards", async (req, res) => {
  try {
    let { title, description } = req.body;

    // check if both title and description are present
    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }
    const cardExists = await Card.findOne({ title }); //check if card with same title does not exist already
    if (cardExists) {
      return res.status(400).json({
        message: "Card already exists",
      });
    }
    //create the card
    await Card.create({
      title,
      description,
    });
    res.status(200).json({
      message: "Card Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
    });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find({});
    if (cards.length === 0) {
      return res.status(200).json({
        message: "No cards found",
      });
    }
    res.status(200).json({
      cards: cards,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.get("/cards/:title", async (req, res) => {
  try {
    const title = req.params.title;
    console.log(title);
    const card = await Card.findOne({ title });

    if (!card) {
      return res.status(404).json({
        message: "Card not found",
      });
    }

    res.status(200).json({
      card: card,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
