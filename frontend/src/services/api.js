import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fetch all cards
export const fetchCards = async () => {
    try {
        const response = await axios.get(`${API_URL}/cards`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error;
    }
};

// Fetch a specific card by title
export const fetchCardByTitle = async (title) => {
    try {
        const response = await axios.get(`${API_URL}/cards/${title}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching card by title:', error);
        throw error;
    }
};


// Submit form data
export const submitForm = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/form/submit`, formData);
        return response.data;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};