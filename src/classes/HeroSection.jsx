import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">ProChesser Academy: Master Chess and Unlock New Opportunities!</h1>
        <h2 className="text-3xl  text-yellow-400 mb-8">Master Chess, Master Your Mind.</h2>
        <p className="text-lg mb-10">
          At ProChesser Academy, we don't just teach you chess - we transform you into a strategic thinker capable of handling any challenge on the board and beyond. Whether you're a complete beginner or have dabbled in the game, our expertly curated lessons, real-world practice, and supportive community will take you from amateur to master.
        </p>
        <h1 className='text-3xl text-yellow-400 mb-8'>Join the Journey to Chess Mastery and Gain More than Just Skills*</h1>
        <p className="text-lg mb-10">
          <h></h>Join the Journey to Chess Mastery and Gain More than Just Skills

          After mastering chess with us, you'll be ready to step into the competitive world, including having the chance to earn from your skills on our platform, where players can challenge each other for real stakes.
        </p>
        <button className="bg-yellow-600 hover:bg-white-700  text-white hover:text-black font-bold py-2 px-4 rounded-full">
          Start Your Chess Mastery Journey Today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;