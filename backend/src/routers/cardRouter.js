import express from "express";
import {
  createCard,
  getCardByTitle,
  getCards,
} from "../controllers/cardController.js";
export const cardRouter = express.Router();
cardRouter.route("/cards").get(getCards).post(createCard);
cardRouter.route("/cards/:title").get(getCardByTitle);
