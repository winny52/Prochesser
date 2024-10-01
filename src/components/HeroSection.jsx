import React from 'react';
import { useNavigate } from 'react-router-dom';
import mockupImage from '../assets/mockup.png'; // Replace with your image file

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 w-screen h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 sm:px-12">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left md:pr-10 order-2 md:order-1"> {/* Order change for smaller devices */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Turn Every Checkmate Into a Payday: <br className="hidden md:block" /> Compete, Conquer, Cash In
          </h1>

          <p className="mt-6 text-base font-bold sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-normal max-w-2xl mx-auto md:mx-0 text-white">
            Immerse yourself in a world where strategy meets reward. At ProChesser, every checkmate isn't just a win on the board; it's a victory for your wallet. Experience the thrill of classic chess with the added excitement of earning with each move.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => navigate('/signup')} 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50 hover:text-white font-bold"
            >
              Sign Up & Start Playing Now
            </button>
            <button 
              onClick={() => navigate('/about')} 
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full md:w-1/2 h-full flex items-center justify-center md:pl-10 order-2 md:order-1"> {/* Order change for smaller devices */}
          <img
            src={mockupImage}
            alt="Mockup"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
