import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white w-full py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-2xl font-bold">
          ProChesser Academy
        </div>

        {/* Navigation links on the right */}
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
    </header>
  );
};

export default Header;
