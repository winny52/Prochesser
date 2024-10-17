import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { userState } from '../state/userState';
import { useRecoilValue } from 'recoil';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // Submenu state for account creation
  const [loginSubmenuOpen, setLoginSubmenuOpen] = useState(false); // Submenu state for login
  const user = useRecoilValue(userState);
  // const navigate = useNavigate();

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
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link to="/" className="text-black hover:text-yellow-500">Home</Link>
          <Link to="/about" className="text-black hover:text-yellow-500">About</Link>
          <Link to="/faqs" className="text-black hover:text-yellow-500">FAQs</Link>
          <Link to="/blog" className="text-black hover:text-yellow-500">Blog</Link>
          <Link to="/learnchess" className="text-black hover:text-yellow-500">Academy</Link>

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
              <button
                onClick={toggleLoginSubmenu}
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
                        onClick={() => setLoginSubmenuOpen(false)}
                      >
                        Learners
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="http://prochesser.com/login"
                        className="block text-black hover:text-yellow-500"
                        onClick={() => setLoginSubmenuOpen(false)}
                      >
                        Gamers
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              {/* Create Account Button with Submenu */}
              <button
                onClick={toggleSubmenu}
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
                        onClick={() => setSubmenuOpen(false)}
                      >
                        Learners Account
                      </Link>
                    </li>
                    <li>
                      <a
                        href="http://prochesser.com/signup"
                        className="block text-black hover:text-yellow-500"
                        onClick={() => setSubmenuOpen(false)}
                      >
                        Gamers Account
                      </a>
                    </li>
                  </ul>
                </div>
              )}
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
          <li>
            <Link to="/about" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              How It Works
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
               Blog
            </Link>
          </li>
          <li>
            <Link to="/learnchess" className="text-black hover:text-yellow-500" onClick={toggleMenu}>
              Academy
            </Link>
          </li>

          {/* Add Login and Create Account to mobile menu */}
          {!user ? (
            <>
              <li>
                <button
                  onClick={toggleLoginSubmenu}
                  className="text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform"
                >
                  Login
                </button>
                {loginSubmenuOpen && (
                  <ul className="space-y-2 pl-4">
                    <li>
                      <Link to="/signin" className="block text-black hover:text-yellow-500" onClick={toggleMenu}>
                        Learners
                      </Link>
                    </li>
                    <li>
                      <a href="http://prochesser.com/login" className="block text-black hover:text-yellow-500" onClick={toggleMenu}>
                        Gamers
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={toggleSubmenu}
                  className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400"

                >
                  Create Account
                </button>
                {submenuOpen && (
                  <ul className="space-y-2 pl-4">
                    <li>
                      <Link to="/register" className="block text-black hover:text-yellow-500" onClick={toggleMenu}>
                        Learners Account
                      </Link>
                    </li>
                    <li>
                      <a href="http://prochesser.com/signup" className="block text-black hover:text-yellow-500" onClick={toggleMenu}>
                        Gamers Account
                      </a>
                    </li>
                  </ul>
                )}
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
