import React from "react";
import chessImage from '../assets/KQChessimage.jpg';
const WhoAreWe = () => {
    return (
      <section className="flex flex-col md:flex-row  w-screen p-6">
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-2xl font-bold mb-24">Who Are We?</h2>
          <p className="text-gray-700">
            We are passionate chess enthusiasts and tech innovators committed to bringing an electrifying twist to the timeless chess game. At ProChesser, we believe in the power of intellect and reward, crafting an online platform where every player can thrive, learn, and earn. You can join classes to improve your game or play matches to win money.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={chessImage} 
            alt=""
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    );
  };
  
  export default WhoAreWe;