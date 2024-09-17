import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white">
      {/* Top Row */}
      <div className="flex justify-between items-center p-4">
        {/* Logo on the left */}
        <div className="text-lg font-bold">
          <Link to="/" className="text-black">
            ProChesser
          </Link>
        </div>
        {/* Sign Up and Login links on the right */}
        <div className="space-x-4">
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

      {/* Bottom Row */}
      <div className="flex justify-between items-center bg-gray-100 p-4">
        {/* Logo placeholder on the left */}
        <div className="text-lg font-bold invisible">
          {/* This keeps the alignment of the nav links */}
          ProChesser
        </div>
        {/* Navigation links on the right */}
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
              to="/testimonials" 
              className="text-black hover:text-yellow-500 transition-colors duration-300"
            >
              Testimonials
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
    </nav>
  );
};

export default Navbar;
