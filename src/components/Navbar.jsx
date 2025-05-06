import React from 'react';

const Navbar = ({ onAdminClick }) => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow">
      <h1 className="text-2xl font-bold text-center text-gray-800">Meme Creator</h1>
      <button 
        onClick={onAdminClick}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        ⚙️ Admin
      </button>
    </nav>
  );
};

export default Navbar;
