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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-8 text-black">
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">
              What Kind of Rewards Can I Earn From Playing?
            </h3>
            <p className="text-base">
              By winning games, you can earn an 85% profit. For example, a $100 stake could net you a $185 payout upon victory.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">
              How Can a Beginner Start Playing Chess for Money?
            </h3>
            <p className="text-base">
              Beginners are encouraged to register for our Master Chess Classes for guidance and live sessions with tutors.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">
              What Do I Need To Get Started on ProChesser?
            </h3>
            <p className="text-base">
              You only need a phone or laptop and a stable internet connection for seamless online gaming.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">
              How Can I Sign Up and Start Playing?
            </h3>
            <p className="text-base">
              Create an account on our platform and head to the game lobby to create or join a game.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">
              How Do I Deposit Money to My ProChesser Account?
            </h3>
            <p className="text-base">
              After creating an account, go to your profile, select the deposit option, and follow the payment instructions.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleExploreMore}
            className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-600 transition-colors"
          >
            Explore More FAQs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
