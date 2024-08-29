import { useState, useEffect } from 'react';
import { fetchCards } from '../services/api';

const useCards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCards = async () => {
            try {
                const cardData = await fetchCards();
                setCards(cardData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getCards();
    }, []);

    return { cards, loading, error };
};

export default useCards;
