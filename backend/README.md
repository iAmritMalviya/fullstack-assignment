# Help Center API

## Description

This is a RESTful API for managing Help Center cards.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with your MongoDB connection string (example: `MONGO_URI=mongodb://localhost:27017/help-center-api`).
4. Run `npm start` to start the server.

## API Endpoints

- `POST /cards`: Create a new card.
- `GET /cards`: Retrieve all cards.
- `GET /cards/:title`: Retrieve a card by its title.
