import React from 'react';
import ChessImage from '../assets/ChessImage4.avif'; // Ensure the image path is correct

const WelcomeBanner = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Get user data from local storage
  const username = user ? user.username : 'Guest'; // Fallback in case user is not found

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-lg shadow-2xl h-full relative overflow-hidden px-4 py-8 lg:px-12 lg:py-16">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-yellow-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
          Welcome to ProChesser Academy, {username}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 font-light">
          Your journey to chess mastery begins now!
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 text-center">
        <img
          src={ChessImage}
          alt="Chess mockup"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default WelcomeBanner;
