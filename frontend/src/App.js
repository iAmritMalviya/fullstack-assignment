import React, { useState, useEffect } from 'react';
import SearchBar from './components/Search';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from "./components/Header";
import Modal from './components/Model';
// import Modal from "./components/Modal"; // Import the Modal component

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cards');
        if (!response.ok) {
          throw new Error('Failed to fetch cards');
        }
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100">
        <div className="mx-auto text-center">
          <div className='bg-[#DADBF0] py-10 lg:py-12'>
            <h1 className="text-4xl lg:text-7xl text-gray-900 font-semibold mb-6">How can we help?</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className='py-14'>
            <div className="w-[90%] lg:w-[70%] mx-auto grid text-start grid-cols-1 sm:grid-cols-2 gap-8">
              {loading ? (
                <div className="col-span-2 text-gray-500">Loading...</div>
              ) : error ? (
                <div className="col-span-2 text-red-500">{error}</div>
              ) : filteredCards.length > 0 ? (
                filteredCards.map((card, index) => (
                  <div key={index} onClick={() => openModal(card)}>
                    <Card title={card.title} description={card.description} />
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-gray-500">No results found</div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <Modal
        show={!!selectedCard}
        onClose={closeModal}
        title={selectedCard?.title}
        description={selectedCard?.description}
      />
    </div>
  );
};

export default HelpCenter;
