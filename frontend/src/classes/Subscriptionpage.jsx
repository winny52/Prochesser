import React from 'react';
import LearningSection from './LearningPackages';
import { useNavigate, useParams } from "react-router-dom";
import { packages } from '../constant';
import { FaCheckCircle } from 'react-icons/fa';
import PaymentPopup from '../components/popup';
import { useRecoilValue } from 'recoil';
import { userState } from '../state/userState';

const SubscriptionPrompt = () => {
  const { type } = useParams();
  const user = useRecoilValue(userState)
  const packageData = packages.find(p => {
    return p.type === type;
  })
  
  return (
    <div className="subscription bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-32 md:mt-16 lg:mt-16 px-4 sm:px-6 lg:px-8 py-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-blue-500 animate-pulse drop-shadow-md">
        Choose Your Desired Package to Proceed
      </h2>
      <p className="text-lg font-semibold mb-6 text-center text-gray-300">
        N/B: Subscription for each package is valid for one month
      </p>
<div className='flex justify-around flex-wrap-reverse'>

        <div
          className="package-card border rounded-3xl mb-4 p-6 bg-white shadow-lg text-black w-[50%]"
        >
          <h3 className="text-2xl font-bold mb-4">
            {packageData.name}
            {packageData.popularLabel && (
              <span className="bg-yellow-600 text-white font-semibold text-xs uppercase rounded-full px-2 ml-2">
                {packageData.popularLabel}
              </span>
            )}
            {packageData.recommendedLabel && (
              <span className="bg-yellow-600 text-white font-semibold text-xs uppercase rounded-full px-2 ml-2">
                {packageData.recommendedLabel}
              </span>
            )}
          </h3>
          <p className="text-xl mb-4 font-bold">{packageData.price}</p>
          <p className="text-gray-900 mb-6">{packageData.description}</p>
          <h4 className="text-lg font-semibold mb-2">What You'll Learn:</h4>
          <ul className="list-inside space-y-2 mb-6">
            {packageData.whatYoullLearn.map((lesson, i) => (
              <li className="flex items-center text-gray-900" key={i}>
                <FaCheckCircle className="text-yellow-600 mr-2" /> {/* Tick icon */}
                {lesson}
              </li>
            ))}
          </ul>

          <h4 className="text-lg font-semibold mb-2">Included Materials:</h4>

          <ul className="list-inside space-y-2 mb-6">
            {packageData.includedMaterials.map((material, i) => (
              <li className="flex items-center text-gray-900" key={i}>
                <FaCheckCircle className="text-yellow-600 mr-2 w-5 h-5" /> {/* Tick icon */}
                {material}
              </li>
            ))}
          </ul>
        </div>
      <div>
          <PaymentPopup packag={packageData} user={user}/>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPrompt;
