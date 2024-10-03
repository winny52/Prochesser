import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { userState } from '../state/userState';
import { useRecoilValue } from 'recoil';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // Submenu state for account creation
  const [loginSubmenuOpen, setLoginSubmenuOpen] = useState(false); // Submenu state for login
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  const toggleLoginSubmenu = () => setLoginSubmenuOpen(!loginSubmenuOpen);

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

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
        {user ? (
          <button
            onClick={handleLogoutClick}
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400"
          >
            Logout
          </button>
        ) : (
          <div className="hidden sm:flex space-x-4 relative">
            {/* Login Button with Submenu */}
            <button
              onClick={toggleLoginSubmenu} // Toggle login submenu on click
              className="text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform"
            >
              Login
            </button>

            {/* Login Submenu for login options */}
            {loginSubmenuOpen && (
              <div className="absolute top-12 right-24 bg-white shadow-lg rounded-lg z-10 p-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/signin"
                      className="block text-black hover:text-yellow-500"
                      onClick={() => setLoginSubmenuOpen(false)} // Close submenu on click
                    >
                      Learners 
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="block text-black hover:text-yellow-500"
                      onClick={() => setLoginSubmenuOpen(false)} // Close submenu on click
                    >
                      Gamers
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {/* Create Account Button with Submenu */}
            <button
              onClick={toggleSubmenu} // Toggle create account submenu on click
              className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400"
            >
              Create Account
            </button>

            {/* Submenu for account creation */}
            {submenuOpen && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg z-10 p-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/register"
                      className="block text-black hover:text-yellow-500"
                      onClick={() => setSubmenuOpen(false)} // Close submenu on click
                    >
                      Learners Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="block text-black hover:text-yellow-500"
                      onClick={() => setSubmenuOpen(false)} // Close submenu on click
                    >
                      Gamers Account
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Menu Links for mobile */}
      <div className={`sm:flex justify-center items-center p-4 bg-gray-100 ${isOpen ? 'block' : 'hidden'}`}>
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
