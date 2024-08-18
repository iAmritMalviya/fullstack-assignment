import { Router } from "express";
import Card from "../model/Card.js";

const router = Router();

router.post("/cards", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(409).json({ message: "All fields are mandatory" });
  }

  try {
    const card = new Card({
      title,
      description,
    });
    await card.save();
    res.status(201).json({ message: "Card created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/cards/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const card = await Card.find({ title: title });
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
