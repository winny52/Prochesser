import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to control mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-screen h-auto">
      {/* Top Row */}
      <div className="flex justify-between items-center p-4">
        {/* Logo on the left */}
        <div className="text-lg font-bold">
          <Link to="/" className="text-black">
            ProChesser
          </Link>
        </div>
        {/* Sign Up and Login links on the right */}
        <div className="hidden md:flex space-x-4">
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

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="md:flex justify-between items-center bg-gray-100 p-4 hidden">
        {/* Invisible Logo Placeholder */}
        <div className="text-lg font-bold invisible">
          ProChesser
        </div>
        {/* Navigation Links */}
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
        <div className="md:hidden bg-gray-100 p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="block text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/faqs" 
                className="block text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="block text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Our Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/account" 
                className="block text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Account
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                className="block text-black hover:text-yellow-500 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
            <li>
              <Link 
                to="/signup" 
                className="block text-black hover:text-yellow-500 transition-colors duration-300"
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
