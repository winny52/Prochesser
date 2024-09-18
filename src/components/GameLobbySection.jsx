import React from 'react';

const GameLobbySection = () => {
  return (
    <section className="bg-black w-screen py-8 px-4 md:py-12 md:px-6">
      <div className="container mx-auto text-center max-w-screen-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          Ready to Make Your Move? Welcome to the Game Lobby
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 max-w-3xl mx-auto">
          Explore our diverse game lobby, where players of all levels find their match. Every game, from casual to ranked matches, is an opportunity to sharpen your skills and increase your earnings. Pick your challenge. Make your move.
        </p>
        <a
          href="/game-lobby"
          className="bg-yellow-500 hover:text-black hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Explore the Game Lobby
        </a>
      </div>
    </section>
  );
};

export default GameLobbySection;
