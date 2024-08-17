# React Help Center UI Assignment

## Overview
This project implements a Help Center UI using React, focusing on component architecture, state management, and data fetching. It features a search functionality and dynamically rendered information cards based on the provided design.

## Tasks
1. Implement shared functionality across component tree
2. Use `useState` hook for complex component state management
3. Design UI resembling the provided mockup
4. Fetch and display data from server
5. Implement search functionality

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/omidhokate2002/help-center.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd frontend
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the app:**

   ```bash
   npm run dev
   ```

   - The server will start on `http://localhost:5173`.

## Implementation Notes
- Used React for component-based architecture
- Implemented shared functionality using [method used]
- Utilized `useState` for [specific state management tasks]
- Fetched data using [API method/library]
- Search functionality filters categories based on user input

## Component Structure
- Header
- SearchBar
- CategoryCard
- Footer

## Data Flow
1. Fetch categories on component mount
2. Store in state using useState
3. Render CategoryCards based on fetched data
4. Filter displayed cards on search input change

## Styling
- Utilized Tailwind CSS for responsive design
- Followed provided mockup for layout and aesthetics

## Future Improvements
- Add pagination for large datasets
- Implement more advanced search features
- Enhance accessibility
