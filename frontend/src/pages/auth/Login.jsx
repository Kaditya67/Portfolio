import React, { useState } from 'react';

const handleSubmitButton = (e) => {
  e.preventDefault(); 
  console.log("Event captured: ",e);
  const password = e.target.password.value; 
  console.log("Submitted Password:", password);
};

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-black via-orange-900 to-yellow-300">
      <div className="text-center mb-8">
        <h1 className="text-white text-4xl font-bold mb-2">Welcome Back, Aditya!</h1>
        <p className="text-gray-400 text-lg">Please enter your password to continue.</p>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96">
        <form onSubmit={handleSubmitButton}>
          <label
            htmlFor="password"
            className="block text-xl font-medium text-gray-300 mb-4"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200 placeholder-gray-500 text-lg"
            placeholder="Enter your password"
            aria-label="Password"
          />
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
      <footer className="mt-12 text-gray-300 text-sm">
        © 2024 Aditya. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Login;
