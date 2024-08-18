import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Import the arrow icon

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-10">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="w-[90%] lg:w-[50%] p-4 pr-10 border outline-none border-black"
      />
      <FiArrowRight className="absolute right-[10%] h-6 w-6 lg:right-[27%] top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;
