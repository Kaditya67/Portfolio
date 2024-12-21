import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  // Check if the token exists on component mount
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // If token exists, navigate to a protected route (e.g., /edit/experience)
      navigate('/edit/experience'); // Redirect to edit experience page or home page
    }
  }, [navigate]);

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, { email, password });

      // Assuming the backend responds with a token and user details
      const { token, user } = response.data;

      // Save the token in localStorage
      localStorage.setItem('jwtToken', token);

      // Clear error messages and show success
      setErrorMessage('');
      setSuccessMessage(`Welcome back, ${user.email}!`);

      // Clear the form fields
      e.target.reset();

      console.log('Login successful!', response.data);

      // After successful login, navigate to the desired edit route
      navigate('/edit/experience'); // Redirect to the experience editing page
    } catch (error) {
      console.error('Error during login:', error.response?.data?.message || error.message);

      // Display error message
      setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-black to-blue-900">
      <div className="text-center mb-6">
        <h1 className="text-white text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-gray-300 text-base">Please enter your email and password to continue.</p>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96 relative overflow-hidden bg-opacity-20 backdrop-blur-lg">
        <div className="absolute inset-0 bg-gray-600 opacity-40 z-0"></div>

        <form onSubmit={handleSubmitButton} className="relative z-10">
          <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200 placeholder-gray-500 text-sm mb-4"
            placeholder="Enter your email"
            aria-label="Email"
            required
          />

          <label htmlFor="password" className="block text-lg font-medium text-gray-300 mb-3">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200 placeholder-gray-500 text-sm mb-4"
            placeholder="Enter your password"
            aria-label="Password"
            required
          />

          {errorMessage && <p className="text-red-500 text-sm mb-3">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-sm mb-3">{successMessage}</p>}

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>

      <footer className="mt-12 text-gray-300 text-sm">
        © 2024 Your Name. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Login;
