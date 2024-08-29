const express = require('express');
const Card = require('../model/card');

const router = express.Router();

// Create a new card
router.post('/cards', async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required.' });
        }
        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            res.status(409).json({ error: 'A card with this title already exists.' });
        } else {
            res.status(500).json({ error: 'Internal server error.' });
        }
    }
});

// Retrieve all cards
router.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Retrieve a specific card by title
router.get('/cards/:title', async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
            return res.status(404).json({ error: 'Card not found.' });
        }
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = router;


