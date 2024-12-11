import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-400  mb-6 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Go Back to Home
      </a>
    </div>
  );
}
