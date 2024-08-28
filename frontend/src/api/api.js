// In your API functions file (e.g., api.js)
import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Fetch all help cards
export const fetchCards = async () => {
  const response = await axios.get(`${API_URL}/card`);
  return response.data; // Expect an array of cards
};

// Fetch a single help card by title
export const fetchCardByTitle = async (title) => {
  const encodedTitle = encodeURIComponent(title);
  const response = await axios.get(`${API_URL}/card/${encodedTitle}`);
  return response.data; // Expect a single card object or array
};

// Create a new help card
export const createCard = async (cardData) => {
  const response = await axios.post(`${API_URL}/card`, cardData);
  return response.data; // Return the created card object
};

// Delete a help card by title
export const deleteCardByTitle = async (title) => {
  const encodedTitle = encodeURIComponent(title);
  const response = await axios.delete(`${API_URL}/card/${encodedTitle}`);
  return response.data; // Return the response after deletion
};
