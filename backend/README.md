# Help Center API

This is a RESTful API that allows users to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc. The API provides functionality to create, retrieve, and manage these cards.

## Project Setup

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/omidhokate2002/help-center.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd backend
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   - Create a `.env` file in the root directory with the following content:

   ```env
   PORT=3000
   DB_CONNECT=your_mongodb_connection_string
   ```

   - Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

5. **Start the server:**

   ```bash
   node index.js
   ```

   - The server will start on `http://localhost:3000`.

## API Endpoints

### Base URL

- `http://localhost:3000/api`

### Endpoints

1. **Ping the server**

   - **URL:** `/ping`
   - **Method:** `GET`
   - **Description:** Check if the server is running.
   - **Response:**
     ```json
     "Server is running"
     ```

2. **Create a new card**

   - **URL:** `/cards`
   - **Method:** `POST`
   - **Description:** Add a new card to the help center.
   - **Request Body:**
     ```json
     {
       "title": "Branches",
       "description": "Abstract Branches lets you manage, version, and document your designs in one place."
     }
     ```
   - **Response:**
     ```json
     {
       "_id": "60d9f8b5f1f2c9a4a4e8b7f8",
       "title": "Branches",
       "description": "Abstract Branches lets you manage, version, and document your designs in one place.",
       "__v": 0
     }
     ```

3. **Retrieve all cards**

   - **URL:** `/cards`
   - **Method:** `GET`
   - **Description:** Get a list of all the cards in the help center.
   - **Response:**
     ```json
     [
       {
         "_id": "60d9f8b5f1f2c9a4a4e8b7f8",
         "title": "Branches",
         "description": "Abstract Branches lets you manage, version, and document your designs in one place."
       }
       // Other cards...
     ]
     ```

4. **Retrieve a specific card by title**

   - **URL:** `/cards/:title`
   - **Method:** `GET`
   - **Description:** Get the details of a specific card by its title.
   - **Response:**
     ```json
     {
       "_id": "60d9f8b5f1f2c9a4a4e8b7f8",
       "title": "Branches",
       "description": "Abstract Branches lets you manage, version, and document your designs in one place."
     }
     ```

## Error Handling

- **404 Not Found:** Returned when trying to access a non-existent card.
- **400 Bad Request:** Returned when there is a validation error or incorrect request format.
- **500 Internal Server Error:** Returned when there is an issue on the server side.
