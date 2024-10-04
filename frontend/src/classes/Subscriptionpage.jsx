import React from 'react';
import LearningSection from './LearningPackages';

const SubscriptionPrompt = () => {
  return (
    <div className="subscription bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-32 md:mt-16 lg:mt-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-blue-500 animate-pulse">
        Choose Your Desired Package to Proceed
      </h2>
      <h2 className="text-xl font-bold mb-4 text-center text-white">
        N/B: Subscription for Each Package Is Valid for a Month
      </h2>

      {/* Learning Packages Section */}
      <div className="mb-6">
        <LearningSection />
      </div>
    </div>
  );
};

export default SubscriptionPrompt;
