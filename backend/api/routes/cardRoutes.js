const express=require('express')
const router = express.Router();
const cardControllers = require('../controllers/cardController');

router.post('/',cardControllers.createHelpCard);
router.get('/',cardControllers.getAllHelpCards)
router.get('/:title',cardControllers.getHelpCardByTitle)
router.delete('/:title',cardControllers.deleteHelpCardByTitle)

module.exports = router; 