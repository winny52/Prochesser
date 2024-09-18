import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/HeroVideo.mp4'; 

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-screen h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative container mx-auto p-4 flex flex-col items-center justify-center h-full z-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Turn Every Checkmate Into a Payday: <br /> Compete, Conquer, Cash In
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto md:mx-0">
            Immerse yourself in a world where strategy meets reward. At ProChesser, every checkmate isn't just a win on the board; it's a victory for your wallet. Experience the exhilaration of classic chess with the added thrill of earning with every victorious move. Are you ready to play?
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => navigate('/signup')} 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              Sign Up & Start Playing Now
            </button>
            <button 
              onClick={() => navigate('/about')} 
              className="bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 px-6 rounded-full transition duration-300 text-center"
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
