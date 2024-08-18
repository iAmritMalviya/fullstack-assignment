import { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";

export const Body = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCards = async () => {
      const res = await axios.get("http://localhost:3000/cards");
      setCards(res.data.cards);
    };
    getCards();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-violet-200 h-60 gap-10 flex  justify-center items-center flex-col">
        <div>
          <h1 className="text-6xl">How can we help?</h1>
        </div>
        <div className="relative">
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="px-4 py-2 w-[600px] rounded border border-black shadow-md  outline-none"
            type="text"
          />
          <svg
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-20 p-10 max-w-6xl">
          {filteredCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
