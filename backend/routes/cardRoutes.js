const express = require('express');
const router = express.Router();
const {
    createCard,
    getAllCards,
    getCardByTitle,
} = require('../controllers/cardController');

router.post('/cards', createCard);
router.get('/cards', getAllCards);
router.get('/cards/:title', getCardByTitle);

module.exports = router;
