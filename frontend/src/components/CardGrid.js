import React from 'react';
import Card from './Card';

const CardGrid = ({ cards }) => {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </section>
  );
};

export default CardGrid;
