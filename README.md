# Help Center API Assignment

## Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vaibhavvatsbhartiya/fullstack-assignment.git
   cd fullstack-assignment
   ```

2. **Frontend:**
   - Created a React app in the `frontend` folder.
   - Following the instructions in `frontend.md` to complete the frontend.

3. **Backend:**
   - Created a Node.js app in the `backend` folder.
   - Following the `backend.md` instructions to complete the backend.

4. **Push Your Work:**
   - Push both the frontend and backend apps to the same repository.
   - The repository is public.

5. **Submit My Work:**
   - Pasted the GitHub repository link in the Google form I've received after pushing my code.

---

This project is a full-stack application with a React frontend and a Node.js backend. It uses MongoDB as the database.

## Project Structure

### Backend
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

The backend follows a typical MVC (Model-View-Controller) structure, with separate directories for configuration, controllers, middleware, models, and routes.

### Frontend
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── CardList.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── RequestForm.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   └── useCards.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.js
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

The frontend is built with React and uses Vite as the build tool. It includes components, custom hooks, and services for API communication.

## Setup Instructions

1. Clone the repository
2. Install dependencies for both frontend and backend:
   ```
   cd frontend && npm install
   cd backend && npm install
   ```
3. Set up environment variables:
   - In the `backend` directory, create a `.env` file with the following content:
     ```
     PORT=5000
     MONGO_URI=mongodb://your_mongodb_connection_string
     ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4. Start the backend server:
   ```
   cd backend && npm start
   ```

5. Start the frontend development server:
   ```
   cd frontend && npm run dev
   ```

## Available Scripts

In the backend directory:
- `npm start`: Starts the server
- `npm run dev`: Starts the server with nodemon for development

In the frontend directory:
- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs ESLint
- `npm run preview`: Previews the build locally

## Technologies Used

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Other tools: ESLint, PostCSS
