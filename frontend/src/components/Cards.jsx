import React, { useEffect, useState } from 'react';
import { getAll, search } from '../providers/cardProvider';
const Cards = ({ searchQuery, isSearchTriggered }) => {
    const [card, setCard] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState()
    useEffect(() => {
        const fetchCard = async () => {
            try {
                const res = await getAll()
                setCard(res.data)
            } catch (err) {
                setError('Failed to fetch cards. Please try again later.')
                console.error(err.message)
            }
        }
        fetchCard();
    }, []);


    useEffect(() => {
        const fetchSearchedCard = async () => {
            if (!searchQuery) return;

            setLoading(true);
            try {
                const res = await search(`${searchQuery}`);
                setCard(res.data);
            } catch (err) {
                setError('Failed to search cards. Please try again later.');
                console.error(err.message);
            }
        };

        fetchSearchedCard();
    }, [searchQuery, isSearchTriggered]);



    return (
        <div className="p-24">
            {error && <div className="text-red-500 font-bold">{error}</div>}

            {!error && card.length === 0 && <div>Loading cards...</div>}
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-24">
                {card?.map((data) => (
                    <div key={data._id} className="bg-gray-200 p-6 rounded-lg shadow-lg  hover:scale-105 cursor-pointer delay-150 transition-transform">
                        <h1 className="text-sm md:text-lg font-bold mb-2">{data.title}</h1>
                        <hr className="border-gray-400 mb-2" />
                        <p className="text-sm md:text-lg text-gray-700">
                            {data.description}
                        </p>
                    </div>))}
            </div>
        </div>
    );
};

export default Cards;
