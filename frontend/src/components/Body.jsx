import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Body = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCards = async () => {
      const res = await axios.get("http://localhost:3000/cards"); //URL should be in .env but for the sake of Assignment
      setCards(res.data);
    };
    getCards();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="bg-violet-200 gap-10 flex h-96 justify-center items-center flex-col">
        <div>
          <h1 className="text-7xl">How can I help?</h1>
        </div>
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="px-4 py-4 w-[600px] rounded-xs border border-black shadow-md outline-none"
            type="search"
          />
        </div>
      </section>
      <section className="flex justify-center">
        <div className="grid grid-cols-2 gap-20 p-10 max-w-6xl">
          {filteredCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Body;
