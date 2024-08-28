import React, { useState, useEffect } from 'react';
import Card from './Card';
import Footer from './Footer';
import { fetchCards } from '../api/api'; // Ensure correct import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const response = await fetchCards();
        setCards(response);
        setFilteredCards(response); // Initialize filtered cards with all fetched cards
      } catch (error) {
        console.error('Error fetching cards:', error);
        setError('An error occurred while fetching data.');
        setCards([]);
        setFilteredCards([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterCards = () => {
      if (searchTerm) {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = cards.filter(card =>
          card.title.toLowerCase().includes(lowercasedSearchTerm) ||
          card.description.toLowerCase().includes(lowercasedSearchTerm)
        );
        setFilteredCards(filtered);
      } else {
        setFilteredCards(cards); // Show all cards if no search term
      }
    };

    filterCards();
  }, [searchTerm, cards]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='min-h-screen'>
      <div className='w-full flex flex-col justify-center items-center bg-[#d0c9e4]'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl pt-12'>How can we help?</h1>
        <div className='relative'>
      <input
        type="text"
        placeholder='Search'
        className='placeholder:text-gray-400 pl-4 pr-12 sm:w-1/3 w-4 mt-8 py-3 rounded-2xl mb-12'
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
        <FontAwesomeIcon icon={faArrowRight} className='text-gray-400' />
      </div>
    </div>
      </div>
      <div className='min-h-[80vh]'>
        <div className='w-full flex justify-center'>
          <div className='grid grid-cols-1 px-3 sm:grid-cols-2 gap-x-24 gap-y-12 mt-24 mb-12'>
            {isLoading ? (
              <p className="text-center mt-4">Loading...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : filteredCards.length > 0 ? (
              filteredCards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} />
              ))
            ) : (
              <p className="text-center">No results found. Please try a different search term.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
