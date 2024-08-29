import React, { useState } from 'react';
import RequestForm from './RequestForm'; // Adjust the import path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <span className="font-bold text-lg">Abstract</span>
          <span className="ml-4 hidden sm:inline">|</span>
          <span className="ml-4 hidden sm:inline">Help Center</span>
        </div>
        <div className="flex items-center">
          <button
            className="block sm:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
          <div className="hidden sm:block">
            <button
              className="bg-white text-black px-4 py-2 rounded-full"
              onClick={openForm} // Open form on button click
            >
              Submit a request
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Help Center
          </a>
          <button
            onClick={openForm}
            className="w-full bg-white text-black px-4 py-2 rounded-full"
          >
            Submit a request
          </button>
        </div>
      </div>
      {showForm && <RequestForm onClose={closeForm} />}
    </nav>
  );
};

export default Navbar;
