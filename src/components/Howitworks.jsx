import React from 'react';

const HowItWorks = () => {
  return (
    <section className="pt-32 relative w-screen bg-gray-100 text-black py-16 px-6 mx-auto">

    
      {/* Content Container */}
      <div className="relative container mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-yellow-600 font-extrabold text-center mb-12 tracking-tight">
          How It Works
        </h2>

        {/* Introduction Text */}
        <p className="text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Experience the thrill of an immersive multiplayer online chess game at ProChesser, where Chess Players battle wits and stakes!
        </p>

        {/* Step-by-Step Instructions */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-start">
            <span className="text-2xl font-bold text-yellow-500 md:mr-6 mb-2 md:mb-0">Step 1:</span>
            <p className="text-lg text-gray-700">Sign Up: Create your free account in minutes.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <span className="text-2xl font-bold text-yellow-500 md:mr-6 mb-2 md:mb-0">Step 2:</span>
            <p className="text-lg text-gray-700">Deposit money into your account.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <span className="text-2xl font-bold text-yellow-500 md:mr-6 mb-2 md:mb-0">Step 3:</span>
            <p className="text-lg text-gray-700">
              Enter the game lobby. You have three options here:
            </p>
          </div>

          {/* Game Options */}
          <div className="ml-6 md:ml-12 space-y-6">
            <p className="text-lg text-gray-700">
              <span className="font-bold">Option 1:</span> Create a game and copy its ID. Activate the game by clicking 'Start'. Share the ID with your friend to play together - equal stakes are necessary.
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Option 2:</span> Create a game with your chosen stake. Activate the game by clicking 'Start' and wait for an opponent within your skill range.
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Option 3:</span> Browse opponents in the game lobby by skill level or stakes, then join a game. Ensure your account balance matches the wager amount.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <span className="text-2xl font-bold text-yellow-500 md:mr-6 mb-2 md:mb-0">Step 4:</span>
            <p className="text-lg text-gray-700">
              Play and win the Blitz chess game within 5 minutes. Win by checkmate or timeout to earn 70% profit from your stake.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <span className="text-2xl font-bold text-yellow-500 md:mr-6 mb-2 md:mb-0">Step 5:</span>
            <p className="text-lg text-gray-700">Claim your winnings. Withdraw anytime and receive the funds within 24 hours.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <span className="text-2xl font-bold text-yellow-500 md:mr-6 mb-2 md:mb-0">Step 6:</span>
            <p className="text-lg text-gray-700">
              Ready for more? Repeat Step 3 to play additional games and increase your earnings!
            </p>
          </div>
        </div>

        {/* Call-to-action Button */}
        <div className="mt-12 text-center">
          <a
            href="/watch-video"
            className="bg-yellow-500 hover:bg-yellow-600 text-black hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
          >
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
