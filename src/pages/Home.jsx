import React, { useEffect, useState, useRef, useCallback } from 'react';
import Navbar from '../components/Navbar';
import MemeCard from '../components/MemeCard';
import AdminModal from '../components/AdminModal';

const Home = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const fetchTemplates = useCallback(async () => {
    const res = await fetch('https://api.imgflip.com/get_memes');
    const data = await res.json();
    if (data.success) {
      setTemplates(data.data.memes);
    }
  }, []);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  const handleAdminClick = () => setShowAdmin(true);
  const handleCloseModal = () => setShowAdmin(false);
  const handleSaveCredentials = (username, password) => {
    console.log('Updated credentials');
  };

  const templatesToShow = templates.slice(0, page * 10);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onAdminClick={handleAdminClick} />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Choose a Meme Template</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {templatesToShow.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
        <div ref={loader} />
      </div>
      {showAdmin && (
        <AdminModal onClose={handleCloseModal} onSave={handleSaveCredentials} />
      )}
    </div>
  );
};

export default Home;
