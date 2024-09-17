import React from 'react';

const GameLobbySection =() => {
  return (
    <section className="bg-black w-screen  py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Make Your Move? Welcome to the Game Lobby
        </h2>
        <p className="text-lg md:text-xl text-white mb-8">
          Explore our diverse game lobby, where players of all levels find their match. Every game, from casual to ranked matches, is an opportunity to sharpen your skills and increase your earnings. Pick your challenge. Make your move.
        </p>
        <a
          href="/game-lobby"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Explore the Game Lobby
        </a>
      </div>
    </section>
  );
};

export default GameLobbySection;
