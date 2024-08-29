import { Router } from "express";
import cardController from "../controllers/card.controller.js";

const router = Router();

router.route("/").get(cardController.getCards).post(cardController.createCard);
router.route("/:id").get(cardController.getCardById);

export default router;
