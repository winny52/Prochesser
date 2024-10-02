import React from 'react';
import ChessImage from '../assets/ChessImage4.avif'; 
import { userState } from '../state/userState';
import { useRecoilValue } from 'recoil';

const WelcomeBanner = () => {
  const user = useRecoilValue(userState);
  console.log(user);
  
  const username = user.user ? user.user.firstname : 'Guest'; 

  return (
    <div className="relative bg-blue-600 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${ChessImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white shadow-lg animate-fade-in">
          Welcome to ProChesser Academy, {username}
        </h1>
        <p className="mt-6 text-xl md:text-2xl lg:text-3xl font-light text-white">
          Your journey to chess mastery begins now!
        </p>

        {/* CTA Button */}
        <button className="mt-10 bg-white text-blue-600 hover:bg-blue-200 hover:scale-105 transition-all duration-300 shadow-lg w-full md:w-auto py-3 px-8 rounded-full">
          Start Learning
        </button>

       
      </div>
    </div>
  );
};

export default WelcomeBanner;
