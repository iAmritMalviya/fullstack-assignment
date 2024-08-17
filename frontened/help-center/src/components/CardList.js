// src/components/CardList.js
import React, { useContext } from "react";
import Card from "./Card";
import { CardContext } from "../context/CardContext";
import "./CardList.css";

function CardList() {
  const { filteredCards } = useContext(CardContext);

  return (
    <div className="card-list">
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))
      ) : (
        <p>No cards found.</p>
      )}
    </div>
  );
}

export default CardList;
