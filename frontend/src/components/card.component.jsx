import React from "react";

function Card({ cards }) {
  return (
    <div className="container mx-20 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center">
            <a
              href="#"
              className=" max-w-sm w-full h-64 p-6 bg-black border border-gray-200 rounded-lg shadow flex flex-col justify-between"
            >
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
