import { Router } from "express";
import { createHelpCard, deleteHelpCardByTitle, getAllHelpCards, getHelpCardByTitle } from "../controllers/Card.controller.js";

const router=Router();

router.route('/cards').post(createHelpCard);
router.route('/cards').get(getAllHelpCards)
router.route('/cards/:title').get(getHelpCardByTitle)
router.route('/cards/:title').delete(deleteHelpCardByTitle)
export default router