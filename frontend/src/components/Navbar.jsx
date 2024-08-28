import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#000] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="ml-2 text-sm sm:text-xl font-semibold text-white">Abstract</span>
            <span className="ml-2 text-sm sm:text-xl text-white">|</span>
            <span className="ml-2 text-sm sm:text-xl text-white">Help Center</span>
          </div>
          <div>
            <button className="bg-gray-800 hover:bg-gray-800 text-white  py-2 px-4 text-sm md:text-lg rounded">
              Submit a request
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;