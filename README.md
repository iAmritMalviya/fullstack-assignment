Card Search Application
# Overview

This project is a simple card search application that allows users to search for cards based on their titles. The project is divided into two main folders: frontend and backend. The frontend handles the user interface and interactions, while the backend manages the card data and provides an API for adding and retrieving cards.

## Project Structure

- `frontend`: Contains the React application for the frontend.
- `backend`: Contains the Node.js/Express application for the backend.

# Getting Started

Follow these steps to set up and run the project locally.

1. **Clone the Repository**

   First, clone the repository to your local machine using Git:

   ```bash
   git clone <repository-url>
   ```

   Replace `<repository-url>` with the actual URL of your Git repository.

2. **Set Up the Frontend**

   Navigate to the frontend folder and install the necessary dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. **Set Up the Backend**

   Navigate to the backend folder and install the necessary dependencies:

   ```bash
   cd ../backend
   npm install
   ```

4. **Create the .env File**

   In the backend folder, create a `.env` file by referring to the `.env.sample` file. Add the required environment variables as specified in the sample file.

5. **Run the Applications**

   Now that everything is set up, you can run both the frontend and backend applications.

   To run the frontend:

   ```bash
   cd ../frontend
   npm run dev
   ```

   To run the backend:

   ```bash
   cd ../backend
   npm run dev
   ```

6. **Add Cards via Postman**

   To start using the search functionality, you need to add some cards to the backend using Postman or any other API testing tool.

   Open Postman and send a POST request to `http://localhost:3000/cards`.

   Use the following JSON structure to add a card:

   ```json
   {
     "title": "Sample Card Title",
     "description": "Sample Card Description"
   }
   ```

   Add multiple cards to test the search functionality.

7. **Enjoy the Application**

   Once the frontend and backend are running, you can access the application in your browser and use the search functionality to find cards by their titles.

# Conclusion

With everything set up, you can now enjoy searching for cards in the application. Feel free to add more cards via Postman to test the application's features further.