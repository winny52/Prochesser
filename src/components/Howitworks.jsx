import React from 'react';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();

  const handleWatchVideoClick = () => {
    navigate('/watch-video');
  };

  return (
    <section className="relative w-screen bg-gradient-to-r from-gray-100 to-gray-200 text-black py-16 px-6 mt-24 mx-auto">
      {/* Decorative Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-100 to-yellow-100 opacity-20"></div>
    
      {/* Content Container */}
      <div className="relative container mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-black hover:from-pink-500 hover:to-yellow-500 transition-colors duration-300 font-extrabold text-center mb-12 tracking-tight">
          How It Works
        </h2>

        {/* Introduction Text */}
        <p className="text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Experience the thrill of an immersive multiplayer online chess game at ProChesser, where Chess Players battle wits and stakes!
        </p>

        {/* Step-by-Step Instructions */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-start hover:bg-yellow-600 p-6 rounded-lg transition-all duration-300">
            <span className="text-2xl font-bold text-black md:mr-6 mb-2 md:mb-0">Step 1:</span>
            <p className="text-lg text-gray-700">Sign Up: Begin by creating your free account in just a few minutes.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start hover:bg-yellow-600 p-6 rounded-lg transition-all duration-300">
            <span className="text-2xl font-bold text-black md:mr-6 mb-2 md:mb-0">Step 2:</span>
            <p className="text-lg text-gray-700">Deposit Funds: Add funds to your account to prepare for gameplay.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start hover:bg-yellow-600 p-6 rounded-lg transition-all duration-300">
            <span className="text-2xl font-bold text-black md:mr-6 mb-2 md:mb-0">Step 3:</span>
            <p className="text-lg text-gray-700">Enter the Game Lobby: Upon entering the lobby, you will have three options:</p>
          </div>

          {/* Game Options */}
          <div className="ml-6 md:ml-12 space-y-6 text-gray-700">
            <p className="text-lg hover:text-yellow-600 transition-colors duration-300">
              <span className="font-bold text-black">Option 1:</span> Friendly Match: Create a game and copy its ID. Select a playtime of either 5 or 10 minutes, then activate the game by clicking ‘Play’. Share the Game ID with a friend to play together—equal stakes are required. Your friend can join by pasting the Game ID in the 'Enter Game Code' section and clicking ‘Play’.
            </p>
            <p className="text-lg hover:text-yellow-600 transition-colors duration-300">
              <span className="font-bold text-black">Option 2:</span> Play Random: Create a game with your preferred stakes and activate it by clicking ‘Play’. You will typically be matched with an opponent of similar skill within five minutes. Please note that these games are limited to a duration of 5 minutes.
            </p>
            <p className="text-lg hover:text-yellow-600 transition-colors duration-300">
              <span className="font-bold text-black">Option 3:</span> Choose Your Opponent: Browse available opponents in the game lobby and select a match. You will only see games that correspond to your skill level. Ensure that your account balance meets the wager amount set by the game creator; for instance, if the game requires a $10 stake, you must have at least $10 in your account.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start hover:bg-yellow-600 p-6 rounded-lg transition-all duration-300">
            <span className="text-2xl font-bold text-black md:mr-6 mb-2 md:mb-0">Step 4:</span>
            <p className="text-lg text-gray-700">Play and Win: Engage in your blitz chess game, aiming for a win within 5 or 10 minutes. You can achieve victory by checkmate or by timing out your opponent, earning 85% profit from your stake. For example, winning a $100 stake would yield $185. Please note that losses result in the forfeiture of your stake, while draws or stalemates incur no deductions.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start hover:bg-yellow-600 p-6 rounded-lg transition-all duration-300">
            <span className="text-2xl font-bold text-black md:mr-6 mb-2 md:mb-0">Step 5:</span>
            <p className="text-lg text-gray-700">Claim Your Winnings: Play at least three games and withdraw your winnings whenever you choose, with funds usually processed within 24 hours.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start hover:bg-yellow-600 p-6 rounded-lg transition-all duration-300">
            <span className="text-2xl font-bold text-black md:mr-6 mb-2 md:mb-0">Step 6:</span>
            <p className="text-lg text-gray-700">Continue Playing: If you’re ready for more action, simply return to Step 3 to engage in additional games and further increase your earnings.</p>
          </div>
        </div>

        {/* Note Section */}
        <p className="mt-6 text-center text-lg font-bold text-gray-700">
          Note: When you create a game, you’ll automatically play as White, and when you join a game, you’ll automatically play as Black. So, choose your strategy wisely based on your color!
        </p>

        {/* Call-to-action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleWatchVideoClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-black hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
          >
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
