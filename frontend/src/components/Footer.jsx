import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white w-full text-black py-10 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        
        <div>
          <h3 className="text-lg text-yellow-600 font-bold mb-4">Resources</h3>
          <ul>
            <li className="mb-2">
              <Link to="/learnchess" className="text-black hover:text-yellow-500">Sign Up for Chess Classes</Link>
            </li>
            <li className="mb-2">
              <Link to="/how-it-works" className="text-black hover:text-yellow-500">How It Works</Link>
            </li>
            <li className="mb-2">
              <Link to="/faqs" className="text-black hover:text-yellow-500">FAQs</Link>
            </li>
            <li className="mb-2">
              <Link to="/blog" className="text-black hover:text-yellow-500">Read Our Blog</Link>
            </li>
            {/* <li className="mb-2">
              <Link to="/community" className="text-black hover:text-yellow-500">Community</Link>
            </li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-yellow-600 font-bold mb-4">Earn Money</h3>
          <ul>
            <li className="mb-2">
              <Link to="/game-lobby" className="text-black hover:text-yellow-500">Play Chess</Link>
            </li>
            <li className="mb-2">
              <Link to="/affiliate" className="text-black hover:text-yellow-500">Become a ProChesser Affiliate</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-yellow-600 font-bold mb-4">Contact Us</h3>
          <p className="mb-2">
            <a href="/live-chat" className="text-black hover:text-yellow-500">Live Chat</a>
          </p>
          <p className="mb-2">
            Email: <a href="mailto:support@prochesser.com" className="text-black hover:text-yellow-500">support@prochesser.com</a>
          </p>
          <div className="mt-4">
            <Link to="/privacy-policy" className="text-black hover:text-yellow-500">Privacy Policy</Link> |{' '}
            <Link to="/terms" className="text-black hover:text-yellow-500">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm">
        <p>&copy; ProChesser 2024. All rights reserved.</p>
        <p>It is not just a game but a Duel of Minds. Not just a player but a Winner. This is ProChesser.com.</p>
      </div>
    </footer>
  );
};

export default Footer;
