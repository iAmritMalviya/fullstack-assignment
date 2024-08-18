const express = require('express');
const { createCard, getAllCards, getCardByTitle } = require('../controllers/cardController');

const router = express.Router();

router.post('/', createCard);
router.get('/', getAllCards);
router.get('/:title', getCardByTitle);

module.exports = router;
