import React from 'react';
import backgroundVideo from '../assets/HeroVideo.mp4'; // Make sure to replace with your actual video path

const HeroSection = () => {
  return (
    <section className="relative w-screen h-screen bg-gradient-to-b from-gray-900 to-black text-white  overflow-hidden">
      <div className="absolute inset-0">
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative container mx-auto  p-0 px-0 flex flex-col md:flex-row items-center justify-center h-full z-10 ">
        {/* Text Column */}
        <div className="flex-1 text-left mb-6 md:mb-0 z-10">
          <h1 className="text-5xl text-6xl font-bold">
            Turn Every Checkmate Into a Payday: <br /> Compete, Conquer, Cash In
          </h1>

          <p className="mt-6 text-3xl md:text-xl max-w-2xl mx-auto md:mx-0">
            Immerse yourself in a world where strategy meets reward. At ProChesser, every checkmate isn't just a win on the board; it's a victory for your wallet. Experience the exhilaration of classic chess with the added thrill of earning with every victorious move. Are you ready to play?
          </p>

          <div className="mt-8 flex flex-col items-center md:items-start space-y-4">
            <a href="/signup" className="bg-yellow-500 hover:bg-yellow-600  text-black hover:text-black font-bold py-3 px-6 rounded-full transition duration-300">
              Sign Up & Start Playing Now
            </a>
            <a href="/about" className="bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 px-6 rounded-full transition duration-300">
              Learn More
            </a>
          </div>
        </div>

        {/* Video Column */}
        <div className="flex-1 hidden md:block">
          {/* Empty div to maintain layout */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
