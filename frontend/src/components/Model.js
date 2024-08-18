import React from 'react';

const Modal = ({ show, onClose, title, description }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex  items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[90%] max-w-lg p-6 px-6">
        <h3 className="text-2xl py-2 font-bold mb-2 text-[#443D34]">{title}</h3><hr className='border-gray-300' />
        <p className="text-[#615B5E] py-4 text-lg">{description}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
