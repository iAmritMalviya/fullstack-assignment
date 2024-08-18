const express = require('express');
const {
  createCard,
  getCards,
  getCardByTitle,
} = require('../controllers/cardController');

const router = express.Router();

router.post('/', createCard);
router.get('/', getCards);
router.get('/:title', getCardByTitle);

module.exports = router;
