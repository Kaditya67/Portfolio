import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate to handle navigation

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate hook for navigation

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Logout function
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('jwtToken');
    
    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link to="/" className="text-white hover:text-gray-300">My Portfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/edit/experience/" className="hover:text-gray-300">Manage Experience</Link>
          <Link to="/edit/projects/" className="hover:text-gray-300">Manage Projects</Link>
          <Link to="/projects/" className="hover:text-gray-300">Projects</Link>
          {/* Logout Button in Desktop Menu */}
          <button
            onClick={handleLogout}
            className="hover:text-gray-300 text-red-600"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <Link to="/edit/experience/" className="block hover:text-gray-300">Manage Experience</Link>
          <Link to="/edit/projects/" className="block hover:text-gray-300">Manage Projects</Link>
          <Link to="/projects/" className="block hover:text-gray-300">Projects</Link>
          {/* Logout Button in Mobile Menu */}
          <button
            onClick={handleLogout}
            className="block w-full text-left hover:text-gray-300"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
