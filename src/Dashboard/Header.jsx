import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the mobile menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white w-full py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-2xl font-bold">
          ProChesser Academy
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link to="/dashboard" className="hover:text-blue-300 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-blue-300 transition duration-200">
                My Courses
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-blue-300 transition duration-200">
                Community
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-blue-300 transition duration-200">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-blue-300 transition duration-200">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li>
              <Link to="/dashboard" className="hover:text-blue-300 transition duration-200" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-blue-300 transition duration-200" onClick={toggleMenu}>
                My Courses
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-blue-300 transition duration-200" onClick={toggleMenu}>
                Community
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-blue-300 transition duration-200" onClick={toggleMenu}>
                Resources
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-blue-300 transition duration-200" onClick={toggleMenu}>
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
