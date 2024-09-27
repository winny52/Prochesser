import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full fixed top-0 left-0 right-0 z-20 shadow-md">
      {/* Top Row */}
      <div className="flex justify-between items-center p-4">
        {/* Logo on the left */}
        <div className="text-lg font-bold">
          <Link to="/" className="text-black hover:text-yellow-500 transition-colors duration-300">
            ProChesser
          </Link>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="block sm:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Sign Up and Login links for larger screens */}
        <div className="hidden sm:flex space-x-4">
          <Link 
            to="/login" 
            className="text-black hover:text-yellow-500 transition-colors duration-300"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="text-black hover:text-yellow-500 transition-colors duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Bottom Row for larger screens */}
      <div className="hidden sm:flex justify-between items-center bg-gray-100 p-4">
        {/* Invisible placeholder for spacing */}
        <div className="text-lg font-bold invisible">
          ProChesser
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-4">
          <li>
            <Link 
              to="/" 
              className="text-black hover:text-yellow-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-black hover:text-yellow-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/faqs" 
              className="text-black hover:text-yellow-500 transition-colors duration-300"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className="text-black hover:text-yellow-500 transition-colors duration-300"
            >
              Our Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/learnchess" 
              className="text-black hover:text-yellow-500 transition-colors duration-300"
            >
              Learn Chess
            </Link>
          </li>
          <li>
            <Link 
              to="/account" 
              className="text-black hover:text-yellow-500 transition-colors duration-300"
            >
              Account
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-gray-100 p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}  // Close the menu after clicking
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/faqs" 
                className="text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Our Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/learnchess" 
                className="text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Learn Chess
              </Link>
            </li>
            <li>
              <Link 
                to="/account" 
                className="text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Account
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                className="text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
            <li>
              <Link 
                to="/signup" 
                className="text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
