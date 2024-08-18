import express from "express";
import {
  createCard,
  getAllCardDetails,
  getParticularCard,
} from "../controllers/card.controller.js";

const router = express.Router();

router.post("/", createCard);
router.get("/:title", getParticularCard);
router.get("/", getAllCardDetails);

export default router;
