import React from 'react';

const FAQ = () => {
  return (
    <section className="bg-gradient-to-r from-gray-500 to-black py-16 px-6 md:px-12 w-screen m-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* First Column */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 text-center md:text-left mb-10">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Second Column */}
          <div className="space-y-8">
            {/* FAQ Items */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                What Kind of Rewards Can I Earn From Playing?
              </h3>
              <p className="text-white">
                By winning games, you can earn an 85% profit. For example, a $100 stake could net you a $185 payout upon victory.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                How Can a Beginner Start Playing Chess for Money?
              </h3>
              <p className="text-white">
                Beginners are encouraged to register for our Master Chess Classes for guidance and live sessions with tutors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                What Do I Need To Get Started on ProChesser?
              </h3>
              <p className="text-white">
                You only need a phone or laptop and a stable internet connection for seamless online gaming.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                How Can I Sign Up and Start Playing?
              </h3>
              <p className="text-white">
                Create an account on our platform and head to the game lobby to create or join a game.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                How Do I Deposit Money to My ProChesser Account?
              </h3>
              <p className="text-white">
                After creating an account, go to your profile, select the deposit option, and follow the payment instructions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-full">
            Explore More FAQs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
