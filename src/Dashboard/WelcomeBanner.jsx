import React from 'react';
import ChessImage from '../assets/ChessImage.jpg'; // Make sure the path is correct

const WelcomeBanner = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Get user data from local storage
  const username = user ? user.username : 'Guest'; // Fallback in case user is not found

  return (
    <div
      style={{
        backgroundImage: `url(${ChessImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-lg shadow-2xl h-full relative overflow-hidden px-2 py-4 md:px-4 md:py-8 lg:py-12"
    >
      <h1 className="text-4xl md:text-3xl lg:text-4xl text-center p-2 md:p-4 font-semibold bg-gradient-to-r from-yellow-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
        Welcome to ProChesser Academy, {username}
      </h1>
      <p className="text-xl md:text-lg lg:text-xl text-center mb-4 md:mb-6 lg:mb-8 p-2 font-light">
        Your journey to chess mastery begins now!
      </p>
    </div>
  );
};

export default WelcomeBanner;
