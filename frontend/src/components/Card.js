import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-[#F4F6F8] border border-gray-300 rounded-xl w-full">
      <h3 className="text-lg px-6 py-2 font-bold mb-2 text-[#443D34]">{title}</h3><hr className='border-gray-300'/>
      <p className="text-[#615B5E] p-6 text-lg">{description}</p>
    </div>
  );
};

export default Card;
