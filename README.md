# Help Center API

## Assignment Description

**Title:** Build a Help Center API

**Objective:**  
The objective of this assignment is to create a RESTful API that allows users to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc. The API should allow users to create and retrieve these cards.

## Project Requirements

### 1. Set Up the Project

- Create a new Node.js project using Express.js.
- Set up a basic server with a single endpoint to check if the server is running (e.g., `GET /ping`).

### 2. Create a Card Model

- Design a model for a card. Each card should have the following fields:
  - `id` (string): A unique identifier for the card.
  - `title` (string): The title of the card (e.g., "Branches").
  - `description` (string): A brief description of what the card represents (e.g., "Abstract Branches lets you manage, version, and document your designs in one place.").

### 3. Build the API Endpoints

- **Create a card:**
  - Endpoint: `POST /api/cards`
  - Description: This should accept the card details (`title`, `description`) in the request body and create a new card.

- **Get all cards:**
  - Endpoint: `GET /api/cards`
  - Description: This should return a list of all cards in the help center.

- **Get a specific card:**
  - Endpoint: `GET /api/cards/:title`
  - Description: This should return the details of a specific card by its title.

### 4. Error Handling

- Implement error handling for cases such as trying to access a non-existent card, validation errors, and server errors.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Code12Git/fullstack-assignment.git

2. Navigate to the project directory:

   ```bash
   cd fullstack-assignment

3. Install the dependencies:

   ```bash
    npm install


### Running the Server

1. Start the server:

   ```bash
   npm start
   
2. The server will be running at http://localhost:8000.

3. Check if the server is running by visiting:

   ```bash
   GET http://localhost:8000/ping

4. API Endpoints

- **Create a card:**

    POST /api/cards

  Request Body:
   ```bash
    {
     "title": "Branches",
    "description": "Abstract Branches lets you manage, version, and   document     
     your designs in one place."
    }

- **Get all cards:**


    GET /api/cards

-  **Get a specific card:**

    GET /api/cards/:title
    

## Error Handling

- 404 Not Found for non-existent cards.
- 400 Bad Request for validation errors.
- 500 Internal Server Error for server issues.

## Submission

Provide the source code in a GitHub repository.
On submission, paste the GitHub link.



## License

This project is licensed under the MIT License - see the LICENSE file for details.

```bash
Replace `https://github.com/Code12Git/fullstack-assignment.git` 
with the actual URL of your repository. Let me know if 
you need any additional details!

