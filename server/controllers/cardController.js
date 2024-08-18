const Card = require('../models/cardModel');
exports.createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (err) {
        res.status(400).json({ error: 'Unable to create card', details: err.message });
    }
};
exports.getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ error: 'Unable to retrieve cards', details: err.message });
    }
};
exports.getCardByTitle = async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ error: 'Unable to retrieve card', details: err.message });
    }
};
