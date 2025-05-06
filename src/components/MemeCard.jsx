// src/components/MemeCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MemeCard = ({ meme }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/customize', { state: { meme } });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded overflow-hidden shadow-md hover:shadow-lg transition"
    >
      <img src={meme.url} alt={meme.name} className="w-full h-48 object-cover" />
      <div className="p-2 text-center text-sm font-medium">{meme.name}</div>
    </div>
  );
};

export default MemeCard;
