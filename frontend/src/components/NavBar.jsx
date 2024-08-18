import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-black p-4 text-white flex justify-between items-center px-20">
      <div className="flex justify-between gap-2 items-center">
        <h1 className="text-xl font-bold">Abstract</h1>
        <span>|</span>
        <p>Help Center</p>
      </div>
      <div>
        <button className="px-12 py-2 rounded-md border bg-gray-900 hover:bg-gray-600 border-gray-400">
          Submit a request
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
