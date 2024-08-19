# Help Card Application

This application consists of a React frontend and an Express backend, designed to manage and display help cards.

## Table of Contents
1. [Frontend](#frontend)
2. [Backend](#backend)
3. [Getting Started](#getting-started)
4. [API Routes](#api-routes)
5. [Environment Variables](#environment-variables)
6. [FAQ](#faq)

## Frontend

The frontend is built with React and provides a user interface for searching and displaying help cards.

### Key Features
- Search functionality for cards using titles
- Responsive list view of help cards
- Create a card 
- Delete a card with its title

### Project Structure
- `src/api`: Contains API integration logic
- `src/components`: React components including Home, CardList, Navbar and Footer

### State Management
- Utilizes React hooks (`useState`, `useEffect`) for local state management

## Backend

The backend is an Express server that handles API requests and interacts with a MongoDB database.

### Key Features
- RESTful API for CRUD operations on help cards
- MongoDB integration for data persistence
- Custom error handling and response formatting

### Project Structure
- `routes`: Defines API routes
- `controllers`: Contains logic for route handlers
- `models`: Defines MongoDB schemas

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository
2. Navigate to the backend folder:
cd backend
npm install
npm run dev
3. In a new terminal, navigate to the frontend folder:
4. The backend will be running on `http://localhost:8000`
5. Access the frontend through the URL provided in the terminal

## API Routes

- `POST /cards`: Create a new help card
- `GET /cards`: Retrieve all help cards
- `GET /cards/:title`: Retrieve a specific help card by title
- `DELETE /cards/:title`: Delete a specific help card by title

## Environment Variables

Create a `.env` file in the backend directory with the following content:
PORT=8000
MONGODB_URI=your_mongodb_connection_string

Note: The MongoDB URI will be updated within 2-3 days.

## FAQ

1. How can you implement shared functionality across a component tree?

   Shared functionality can be implemented using:
   - Context API
   - Custom Hooks
   - Higher-Order Components (HOCs)
   - Render Props

2. Why is the `useState` hook appropriate for handling state in a complex component?

   `useState` is appropriate because:
   - It allows state management in functional components
   - Provides a simple API for state updates
   - Can manage multiple independent states
   - Integrates well with other hooks
   - Helps in breaking down complex state logic