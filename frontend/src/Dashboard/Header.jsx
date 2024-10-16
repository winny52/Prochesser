import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the mobile menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white w-full py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">ProChesser Academy</div>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-4">
            {[
              { to: "/dashboard", label: "Home" },
              { to: "/how-it-works", label: "How it works" },
              { to: "/courses", label: "My Courses" },
              { to: "/community", label: "Community" },
              { to: "/resources", label: "Resources" },
              { to: "/profile", label: "Profile" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            {[
              { to: "/dashboard", label: "Home" },
              { to: "/how-it-works", label: "How it works" },
              { to: "/courses", label: "My Courses" },
              { to: "/community", label: "Community" },
              { to: "/resources", label: "Resources" },
              { to: "/profile", label: "Profile" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="hover:text-blue-300 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
