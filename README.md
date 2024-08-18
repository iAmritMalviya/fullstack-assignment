# Help Center API Assignment

This project is a fullstack application designed to manage cards. It consists of a frontend built with React and a backend built with Node.js and Express.js, connected to a MongoDB database.

## Project Structure

```bash
fullstack-assignment/
│
├── frontend/    # Contains the React application
│   ├── public/
│   ├── src/
│   ├── frontend.md  # Instructions for frontend implementation
│   └── ...
│
├── backend/     # Contains the Node.js application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── backend.md   # Instructions for backend implementation
│   └── ...
│
└── README.md    # This file
```

## Frontend

The frontend is a React application located in the `frontend` folder. It is responsible for rendering the Help Center UI, including the search functionality and the display of different help center sections.

### Implementation

- **Use of `useState` Hook**: The state management for search functionality is handled using React's `useState` hook.
- **Styling**: The UI is styled using CSS to match the required design. This includes responsive design considerations.
- **Status**: The frontend implementation is complete. It has been tested for basic functionality and UI consistency.

### Frontend Challenges

- The frontend development was relatively straightforward, with most effort spent on implementing and managing state with `useState`. Overall, the frontend was rated as 5/10 in difficulty.

## Backend

The backend is a Node.js application located in the `backend` folder. It provides a RESTful API for managing Help Center cards, including creating, retrieving, and handling errors.

### Implementation

- **API Endpoints**:
  - `POST /cards`: Creates a new card in the Help Center.
  - `GET /cards`: Retrieves all cards.
  - `GET /cards/:title`: Retrieves details of a specific card by its title.
- **Database Connection**: The backend is set up to connect to a MongoDB database. Although the connection code was written, fetching API calls encountered technical issues.
- **Status**: The backend implementation is semi-complete. The database connection is established, but some technical issues prevented full API functionality.

### Backend Challenges

- Connecting to MongoDB and handling API requests was more complex and required significant effort. The backend was rated as 8/10 in difficulty.

## How to Run the Project

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js
- MongoDB
- Git

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/iAmritMalviya/fullstack-assignment
    cd fullstack-assignment
    ```

2. Install dependencies:

    - For the frontend:

      ```bash
      cd frontend
      npm install
      ```

    - For the backend:

      ```bash
      cd backend
      npm install
      ```

3. Start the development servers:

    - For the frontend:

      ```bash
      cd frontend
      npm start
      ```

    - For the backend:

      ```bash
      cd backend
      npm start
      ```

4. Ensure MongoDB is running locally or update the database connection string in the backend configuration.

## Known Issues

- **Backend**: Due to some technical issues with MongoDB, API calls might not fetch data as expected. Further debugging and testing are required to resolve these issues.

## Future Improvements

- **Frontend**: Implement additional features or improvements based on project requirements or feedback.
- **Backend**: Resolve the MongoDB connection issues to fully implement and test API functionality.
