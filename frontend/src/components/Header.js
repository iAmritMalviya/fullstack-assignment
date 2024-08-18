import React, { useState } from 'react';
import logo from "../assets/logo-header.png"
import RequestModal from './RequestModel';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      const result = await response.json();
      console.log(result.message); // "Request submitted successfully"
      alert('Request submitted successfully');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting request');
    }
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold flex items-center">
        <img src={logo} alt="Logo" />
        <span className="hidden lg:block">Abstract | Help Center</span>
      </div>
      <button
        onClick={handleOpenModal}
        className="bg-[#161516] py-2 px-4 rounded border border-gray-400 hover:bg-white hover:text-black font-bold"
      >
        Submit a request
      </button>

      <RequestModal
        show={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </header>
  );
}

export default Header;
