import { Card } from "../models/Card.models.js";

import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createHelpCard = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        throw new ApiError(400, "title is required")
    }
    if (!description) {
        throw new ApiError(400, "description is required")
    }
    const newCard = await Card.create({
        title,
        description
    })
    if (!newCard) {
        throw new ApiResponse(500, "Failed to create a card")
    }
    res.status(201).json(new ApiResponse(201, newCard, "Successfully created a card"));
})

const getAllHelpCards = asyncHandler(async (req, res) => {
    const cards = await Card.find();

    if (!cards || cards.length === 0) {
        throw new ApiError(404, "No cards found");
    }

    res.status(200).json(new ApiResponse(200, cards, "Successfully retrieved all cards"));
});

const getHelpCardByTitle = asyncHandler(async (req, res) => {
    const title = decodeURIComponent(req.params.title);


    const card = await Card.find({ title: { $regex: title, $options: 'i' } });

    if (!card) {
        throw new ApiError(404, `No card found with title: ${title}`);
    }
    
    res.status(200).json(new ApiResponse(200, card, `Successfully retrieved card with title: ${title}`));
});

const deleteHelpCardByTitle = asyncHandler(async (req, res) => {
    const title  = decodeURIComponent(req.params.title);
    const card = await Card.findOneAndDelete({ title });

    if (!card) {
        throw new ApiError(404, `No card found with title: ${title}`);
    }

    res.status(200).json(new ApiResponse(200, card, `Successfully deleted card with title: ${title}`));
});

export { createHelpCard, getAllHelpCards, getHelpCardByTitle, deleteHelpCardByTitle };