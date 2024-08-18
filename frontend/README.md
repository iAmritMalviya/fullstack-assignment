
# Abstract Help Center - Frontend

This project is a frontend implementation of the Abstract Help Center interface using React.js and Tailwind CSS. The application provides a simple, responsive design that allows users to search through help topics. The UI is designed to be modular, with separate components for easier management and future scalability.

## Features

- **Search Functionality**: Users can search for help topics using a search bar. The list of topics filters dynamically based on the search input.
- **Responsive Design**: The layout is responsive and adjusts to different screen sizes.
- **Modular Components**: The UI is built using separate React components, making it easy to maintain and extend.

## Components

### 1. `Header`

- Displays the title "Abstract | Help Center" and a "Submit a request" button.
- File: `src/components/Header.js`

### 2. `SearchBar`

- Contains the search input field.
- Handles user input and passes the search term to the parent component.
- File: `src/components/Search.js`

### 3. `Card`

- Represents individual help topics with a title and description.
- File: `src/components/Card.js`

### 4. `Footer`

- Displays footer links and company information.
- File: `src/components/Footer.js`

### 5. `App`

- The main component that brings all the other components together.
- Manages the search functionality and filters the help topics based on user input.


## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of React.js and Tailwind CSS.

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ranjana993/Future-Skills-Assignment
   cd client
   npm install
   npm run start