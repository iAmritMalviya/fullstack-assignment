import React from 'react';
import Card from './Card'; 

const CardList = ({ cards }) => {
  return (
    <div className="p-5 max-w-[1280px] mx-auto flex flex-wrap justify-center gap-6">
      {cards.length > 0 ? (
        cards.map((card) => (
          <div className="flex-none w-full md:w-1/2 lg:w-1/2 xl:w-1/3" key={card.id}> {/* Adjust key as per unique identifier */}
            <Card title={card.title} description={card.description} /> {/* Adjust props based on Card component */}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No cards found.</p>
      )}
    </div>
  );
};

export default CardList;
