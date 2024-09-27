import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/faqs');
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-600">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Questions and Answers */}
        <div className="space-y-10">
          <div className="p-4 border-l-4 border-yellow-500 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-2">
              What Kind of Rewards Can I Earn From Playing?
            </h3>
            <p className="text-lg text-gray-700">
              By winning games, you can earn an 85% profit. For example, a $100 stake could net you a $185 payout upon victory.
            </p>
          </div>
          <div className="p-4 border-l-4 border-yellow-500 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-2">
              How Can a Beginner Start Playing Chess for Money?
            </h3>
            <p className="text-lg text-gray-700">
              Beginners are encouraged to register for our Master Chess Classes for guidance and live sessions with tutors.
            </p>
          </div>
          <div className="p-4 border-l-4 border-yellow-500 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-2">
              What Do I Need To Get Started on ProChesser?
            </h3>
            <p className="text-lg text-gray-700">
              You only need a phone or laptop and a stable internet connection for seamless online gaming.
            </p>
          </div>
          <div className="p-4 border-l-4 border-yellow-500 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-2">
              How Can I Sign Up and Start Playing?
            </h3>
            <p className="text-lg text-gray-700">
              Create an account on our platform and head to the game lobby to create or join a game.
            </p>
          </div>
          <div className="p-4 border-l-4 border-yellow-500 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-2">
              How Do I Deposit Money to My ProChesser Account?
            </h3>
            <p className="text-lg text-gray-700">
              After creating an account, go to your profile, select the deposit option, and follow the payment instructions.
            </p>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleExploreMore}
            className="bg-yellow-500 hover:bg-yellow-600 text-black hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
          >
            Explore More FAQs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;