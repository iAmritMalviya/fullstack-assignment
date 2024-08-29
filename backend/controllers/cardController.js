const Card = require('../models/Card');

// Create a new card
exports.createCard = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const card = new Card({ title, description });
        await card.save();
        res.status(201).json(card);
    } catch (error) {
        next(error);
    }
};

// Get all cards
exports.getAllCards = async (req, res, next) => {
    try {
        const cards = await Card.find({});
        res.status(200).json(cards);
    } catch (error) {
        next(error);
    }
};

// Get a specific card by title
exports.getCardByTitle = async (req, res, next) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) return res.status(404).json({ message: 'Card not found' });
        res.status(200).json(card);
    } catch (error) {
        next(error);
    }
};
