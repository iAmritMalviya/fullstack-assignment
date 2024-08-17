import React, { useState, useContext } from "react";
import { CardContext } from "../context/CardContext";
import "./SearchBar.css";

function SearchBar() {
  const { cards, setFilteredCards } = useContext(CardContext);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
      />
      <button onClick={handleSearch} className="search-button">
        run
      </button>
    </div>
  );
}

export default SearchBar;
