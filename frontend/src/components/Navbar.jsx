import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
import {userState} from "../state/userState";
import { useRecoilValue } from 'recoil';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useRecoilValue(userState);
  const navigate = useNavigate(); 

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSignupClick = () => {
    // Navigate to the signup page when button is clicked
    navigate('/signup');
  };

  const handleLoginClick = () => {
    // Navigate to the login page when button is clicked
    navigate('/login');
  };
   
  const handleLogoutClick = ()=>{
   localStorage.removeItem('token')
   localStorage.removeItem('user')
    window.location.reload();
  }

  return (
    <nav className="bg-white w-full fixed top-0 z-20 shadow-md">
      <div className="flex justify-between mx-auto items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-black hover:text-yellow-500">
          ProChesser
        </Link>

        {/* Hamburger Menu for small screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Buttons for larger screens */}
        {(user)?<button
            onClick={handleLogoutClick}
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400"
          >
            Logout
          </button>:
        <div className="hidden sm:flex space-x-4">
          <button
            onClick={handleLoginClick}
            className=" text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform "
          >
            Login
          </button>
          <button
            onClick={handleSignupClick}
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400"
          >
            Create Account
          </button>
        </div>}
      </div>

      {/* Menu Links for mobile */}
      <div className={`sm:flex justify-center items-center p-4  bg-gray-100 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex sm:space-x-4 flex-col sm:flex-row space-y-4 sm:space-y-0">
          <li>
            <Link to="/" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              Our Blog
            </Link>
          </li>
          <li>
            <Link to="/learnchess" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              Academy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
