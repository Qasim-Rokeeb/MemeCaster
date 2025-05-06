import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* <-- put your default creds in ONE place only ---------------- */
const DEFAULT_USERNAME = 'olalekancodes';
const DEFAULT_PASSWORD = 'Rokeeb.6127#';
/* -------------------------------------------------------------- */

const Customize = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const meme = state?.meme;            // comes from <MemeCard />

  /* UI state */
  const [text0, setText0] = useState('');
  const [text1, setText1] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');

  /* If a user enters /customize manually without picking a meme */
  if (!meme)
    return (
      <div className="p-6 text-center text-red-600">
        No meme selected. Go back and choose a template.
        <button className="block mt-2 underline" onClick={() => navigate('/')}>
          ← Home
        </button>
      </div>
    );

  /* Main action */
  const handleGenerate = async () => {
    /* read stored creds OR fall back to defaults */
    const username =
      localStorage.getItem('imgflipUsername') || DEFAULT_USERNAME;
    const password =
      localStorage.getItem('imgflipPassword') || DEFAULT_PASSWORD;

    setLoading(true);

    /* build form‑data exactly as Imgflip expects */
    const body = new URLSearchParams();
    body.append('template_id', meme.id.toString());
    body.append('username', username);
    body.append('password', password);
    body.append('text0', text0);
    body.append('text1', text1);

    try {
      const res = await fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        body,
      });
      const data = await res.json();

      if (data.success) {
        setGeneratedUrl(data.data.url);
      } else {
        alert(`Imgflip error: ${data.error_message}`);
      }
    } catch (err) {
      console.error(err);
      alert('Network or server error while generating meme.');
    } finally {
      setLoading(false);
    }
  };

  /* download helper */
  const handleDownload = () => {
    if (!generatedUrl) return;
    const a = document.createElement('a');
    a.href = generatedUrl;
    a.download = 'meme.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  /* ---------------- render ---------------- */
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <img
        src={meme.url}
        alt={meme.name}
        className="w-72 md:w-96 rounded shadow mb-4"
      />

      <input
        type="text"
        placeholder="Top text"
        value={text0}
        onChange={(e) => setText0(e.target.value)}
        className="w-72 md:w-96 p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Bottom text"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        className="w-72 md:w-96 p-2 border rounded mb-4"
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded"
      >
        {loading ? 'Generating…' : 'Generate Meme'}
      </button>

      {generatedUrl && (
        <div className="mt-6 flex flex-col items-center">
          <img
            src={generatedUrl}
            alt="Generated meme"
            className="w-72 md:w-96 rounded shadow"
          />
          <button
            onClick={handleDownload}
            className="mt-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
          >
            Download Meme
          </button>
        </div>
      )}

      <button
        onClick={() => navigate('/')}
        className="mt-6 text-gray-600 hover:underline"
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default Customize;
