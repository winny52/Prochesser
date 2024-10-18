import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { userState } from '../state/userState';
import { useRecoilValue } from 'recoil';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useRecoilValue(userState);

  const toggleMenu = () => setIsOpen(!isOpen);


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
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link to="/" className="text-black hover:text-yellow-500">Home</Link>
          <Link to="prochesser.com" className="text-black hover:text-yellow-500">Gamers</Link>


          {user ? (
            <>
          {user.subscriptions.length>0&&<Link to="/dashboard" className="text-black hover:text-yellow-500">Dashboard</Link>}
            <button
              onClick={handleLogoutClick}
              className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400"
            >
              Logout
            </button>
            </>
          ) : (
            <>
              {/* Login Button with Submenu */}
              <Link
                to='/signin'
                className="text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform"
              >
                Login
              </Link>


              {/* Create Account Button with Submenu */}
              <Link
to="/register"
                  className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400"
              >
                Create Account
              </Link>

             
            </>
          )}
        </div>
      </div>

      {/* Menu Links for mobile */}
      <div className={`sm:hidden p-4 bg-gray-100 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4">
          <li>
            <Link to="/" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          
          {/* Add Login and Create Account to mobile menu */}
          {!user ? (
            <>
              <li>
                <Link
                    to='/signin'
                  className="text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400"

                >
                  Create Account
                </Link>
              </li>
            </>
          ) : (
            <>
              <button
                onClick={handleLogoutClick}
                className="bg-yellow-500 text-black font-semibold py-2 px-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-yellow-400"
              >
                Logout
              </button>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
