import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import useCards from "./hooks/useCards";
import { fetchCardByTitle } from "./services/api";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const { cards, loading, error } = useCards();
  const [filteredCards, setFilteredCards] = useState(cards);

  // Update filtered cards when cards or search query changes
  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  const handleSearch = async (query) => {
    if (query === "") {
      setFilteredCards(cards);
    } else {
      try {
        const filteredCard = await fetchCardByTitle(query);
        setFilteredCards(filteredCard ? [filteredCard] : []);
      } catch (err) {
        console.error("Search error:", err);
        setFilteredCards([]);
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-6 sm:p-12 md:p-16 lg:p-24 bg-violet-100">
        <h1 className=" text-3xl md:text-4xl  font-bold text-center mb-10">How can we help?</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="md:p-6">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error loading cards.</p>
        ) : (
          <CardList cards={filteredCards} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
