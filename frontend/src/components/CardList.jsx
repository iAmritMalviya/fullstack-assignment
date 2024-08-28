import React from 'react'
import Card from './Card'

function CardList({ cards }) {
  return (
    <div className='w-full flex justify-center '>
      <div className='grid grid-cols-1 px-3 sm:grid-cols-2 gap-x-24 gap-y-12 mt-24 mb-12'>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  )
}

export default CardList