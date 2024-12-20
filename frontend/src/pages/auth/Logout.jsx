import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();  // Hook to navigate to a different route

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('jwtToken');
    
    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-red-600 transition duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
