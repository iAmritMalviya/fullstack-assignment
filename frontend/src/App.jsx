import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../src/components/navbar.component.jsx";
import Heading from "../src/components/heading.component.jsx";
import Card from "../src/components/card.component.jsx";
import Footer from "../src/components/footer.component.jsx";

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("/api/cards");
        setCards(response.data.cards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Heading searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Card cards={filteredCards} />
      <Footer />
    </div>
  );
}

export default App;
