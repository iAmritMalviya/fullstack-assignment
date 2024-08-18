const express = require('express');
const { cardController } = require('../controllers');
const router = express.Router()

router.post('/',cardController.create)
router.put('/:card',cardController.update)
router.delete('/:card',cardController.deleteOne)
// router.get('/:card',cardController.get)
router.get('/',cardController.getAll)
router.get('/:title',cardController.search)

module.exports = router;