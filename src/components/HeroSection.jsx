import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/HeroVideo.mp4';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 relative w-screen h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background video and overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay for readability */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12">
        {/* <div className="text-center md:text-left max-w-3xl mx-auto">
         */}
          <div className="flex-1 text-center md:text-left">

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Turn Every Checkmate Into a Payday: <br className="hidden md:block" /> Compete, Conquer, Cash In
          </h1>
         
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-normal max-w-2xl mx-auto md:mx-0 text-gray-300">
            Immerse yourself in a world where strategy meets reward. At ProChesser, every checkmate isn't just a win on the board; it's a victory for your wallet. Experience the thrill of classic chess with the added excitement of earning with each move.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => navigate('/signup')} 
              className="bg-yellow-500 hover:bg-yellow-600 text-black  font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50  hover:text-white font-bold "
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
      </div>
    </section>
  );
};

export default HeroSection;
