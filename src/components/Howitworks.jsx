import React from 'react';

const HowItWorks = () => {
  return (
    <section className="relative w-screen bg-gray-100  text-black py-16 px-6  mx-auto">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-screen h-full bg-gray-100 opacity-50"></div>
      </div>
      <div className="relative container mx-auto">
        <h2 className="text-3xl md:text-4xl  text-yellow-600 font-bold text-center mb-12">
          How It Works
        </h2>
        
        <p className="text-lg md:text-xl text-center mb-8">
          Experience the thrill of an immersive multiplayer online chess game at ProChesser, where Chess Players battle wits and stakes!
        </p>
        
        <div className="space-y-8">
          <div className="flex items-start">
            <span className="text-2xl font-bold text-yellow-500 mr-4">Step 1:</span>
            <p className="text-lg">Sign Up: Create your free account in minutes.</p>
          </div>

          <div className="flex items-start">
            <span className="text-2xl font-bold text-yellow-500 mr-4">Step 2:</span>
            <p className="text-lg">Deposit money into your account.</p>
          </div>

          <div className="flex items-start">
            <span className="text-2xl font-bold text-yellow-500 mr-4">Step 3:</span>
            <p className="text-lg">Enter the game lobby. You have three options here:</p>
          </div>
          
          <div className="ml-10 space-y-4">
            <p className="text-lg">
              <span className="font-bold">Option 1:</span> Create a game and copy its ID. Activate the game by clicking 'Start'. Share the ID with your friend to play together - equal stakes are necessary. Your friend can join by pasting the Game ID in the 'Paste Game ID' section.
            </p>
            <p className="text-lg">
              <span className="font-bold">Option 2:</span> Create a game with your chosen stake. Activate the game by clicking 'Start' and wait for an opponent within your skill range to join - typically in under five minutes.
            </p>
            <p className="text-lg">
              <span className="font-bold">Option 3:</span> Browse opponents in the game lobby by skill level or stakes, then join a game. Ensure your account balance matches the wager amount set by the game creator; if the game requires $10, you need $10 in your account to participate.
            </p>
          </div>

          <div className="flex items-start">
            <span className="text-2xl font-bold text-yellow-500 mr-4">Step 4:</span>
            <p className="text-lg">Play and win the Blitz chess game within 5 minutes. Win by checkmate or timeout to earn 70% profit from your stake. For example, win $185 from a $100 stake. Loss results in forfeiture of the stake. In a draw or stalemate, the stake will be reimbursed to your account promptly.</p>
          </div>

          <div className="flex items-start">
            <span className="text-2xl font-bold text-yellow-500 mr-4">Step 5:</span>
            <p className="text-lg">Claim your winnings. Withdraw anytime and receive the funds within 24 hours.</p>
          </div>

          <div className="flex items-start">
            <span className="text-2xl font-bold text-yellow-500 mr-4">Step 6:</span>
            <p className="text-lg">Ready for more? Repeat Step 3 to play additional games and increase your earnings!</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/watch-video" className="bg-yellow-500 hover:bg-yellow-600 text-black hover:text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
