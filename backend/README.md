# Backend Project

This project is a backend application with a structured layout for handling cards and forms. It uses MongoDB for data storage and Express.js for the server framework.

## Project Structure

```
backend/
├── config/
│   └── database.js
├── controllers/
│   ├── cardController.js
│   └── formController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   ├── Card.js
│   └── Form.js
├── routes/
│   ├── cardRoutes.js
│   └── formRoutes.js
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── server.js
```

## Setup Instructions

1. Clone the repository to your local machine.

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   MONGO_URI=mongodb://your_mongodb_connection_string
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4. Start the server:
   ```
   npm start
   ```

## Environment Variables

- `PORT`: The port number on which the server will run. Default is 3000.
- `MONGO_URI`: The connection string for your MongoDB database.

## Available Scripts

- `npm start`: Starts the server
- `npm run dev`: Starts the server with nodemon for development

## API Endpoints

- `/api/cards`: Endpoints for card operations
- `/api/forms`: Endpoints for form operations

For more detailed information about the API endpoints, please refer to the individual route files in the `routes` directory.

## Error Handling

Custom error handling is implemented in `middleware/errorHandler.js`.
