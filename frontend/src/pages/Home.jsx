import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { FaArrowRight } from "react-icons/fa6";
import '../styles/home.css'

const Home = () => {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('/cards')
            .then(response => setCards(response.data))
            .catch(error => console.error('Error fetching cards:', error));
    }, []);

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home">
            <section className="search-section">
                <h1>How can we help?</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                        <FaArrowRight />
                    </button>
                </div>
            </section>

            <div className="cards-container">
                {filteredCards.map((card) => (
                    <Card key={card.id} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
}

export default Home