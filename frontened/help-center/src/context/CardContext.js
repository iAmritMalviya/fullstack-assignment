import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CardContext = createContext();

export function CardProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((response) => {
        setCards(response.data);
        setFilteredCards(response.data);
      })
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <CardContext.Provider value={{ cards, filteredCards, setFilteredCards }}>
      {children}
    </CardContext.Provider>
  );
}
