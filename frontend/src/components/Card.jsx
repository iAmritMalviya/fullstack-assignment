import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-100 rounded-xl flex flex-col gap-1 border w-96 border-gray-300">
      <h1 className="text-xl font-semibold p-2 px-4">{title}</h1>
      <hr className="border-gray-300 mb-2 border-t-1" />
      <p className="text-gray-800 p-2 px-4">{description}</p>
    </div>
  );
};

export default Card;
