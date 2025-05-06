import React, { useState } from 'react';

const AdminModal = ({ onClose, onSave }) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [username, setUsername] = useState('');
  const [apiPassword, setApiPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);

  const handlePasswordCheck = () => {
    if (passwordInput === 'asJrA.61271895$') {
      setAccessGranted(true);
    } else {
      alert('Incorrect admin password');
    }
  };

  const handleSave = () => {
    if (username && apiPassword) {
      localStorage.setItem('imgflipUsername', username);
      localStorage.setItem('imgflipPassword', apiPassword);
      onSave(username, apiPassword);
      alert('Credentials saved successfully!');
      onClose();
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        {!accessGranted ? (
          <>
            <h2 className="text-lg font-semibold mb-4">Admin Access</h2>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={handlePasswordCheck}
              className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
            >
              Unlock Admin Panel
            </button>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-4">Update Imgflip API Credentials</h2>
            <input
              type="text"
              placeholder="New Imgflip Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="password"
              placeholder="New Imgflip Password"
              value={apiPassword}
              onChange={(e) => setApiPassword(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
