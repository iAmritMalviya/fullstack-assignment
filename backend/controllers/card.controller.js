import Card from "../models/card.model.js";

// create card controller funciton
export const createCard = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(404).json({
        error:
          "Missing Details of the card,Please give the card details properly.",
      });
    }

    const card = await Card.create({
      title: title,
      description: description,
    });
    res.status(201).json(card);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: "Error creating card" + error.message });
  }
};

// get all cards controller function
export const getAllCardDetails = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ error: "Error in getting all cards" + error.message });
  }
};

// get particular card controller function

export const getParticularCard = async (req, res) => {
  try {
    const title = req.params.title;
    if (!title) {
      return res.status(404).json({
        error: "Card title is required",
      });
    }
    const card = await Card.findOne({ title: title });
    if (!card) {
      res.status(404).json({ error: "Card not found" });
    }
    res.status(201).json(card);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: "Error creating card" + error.message });
  }
};
