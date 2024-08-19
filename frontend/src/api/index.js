import axios from 'axios'

const API_URL = 'http://localhost:8000'

// Fetch all help cards
export const fetchCards = async () => {
  const response = await axios.get(`${API_URL}/cards`)
  return response.data
}

// Fetch a single help card by title
export const fetchCardByTitle = async (title) => {
  const encodedTitle = encodeURIComponent(title)
  const response = await axios.get(`${API_URL}/cards/${encodedTitle}`)
  return response.data
}

// Create a new help card
export const createCard = async (cardData) => {
  const response = await axios.post(`${API_URL}/cards`, cardData)
  return response.data
}

// Delete a help card by title
export const deleteCardByTitle = async (title) => {
  const encodedTitle = encodeURIComponent(title)
  const response = await axios.delete(`${API_URL}/cards/${encodedTitle}`)
  return response.data
}