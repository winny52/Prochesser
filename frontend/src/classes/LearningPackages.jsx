import React, { useState } from 'react';
import { BACKEND_URL } from '../constant';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from '../state/userState';
import { FaCheckCircle } from 'react-icons/fa'; // Import tick icon from FontAwesome
import PaymentPopup from '../components/popup';

const LearningSection = () => {
  const user = useRecoilValue(userState);
  const [packag,setPackag]=useState(null);
  const packages = [
    {
      name: 'Beginner Package: "Pawn to King"',
      price: '$19.99/month',
      description:
        "For absolute beginners who need a strong foundation in the basics of chess. Start here, and master the rules, movement of the pieces, and basic tactics. You'll build a solid groundwork that will prepare you for more advanced strategies.",
      cta: 'Sign Up for the Beginner Package',
      includedMaterials: [
        '10+ high-quality video tutorials',
        'Downloadable PDF guides with chessboard diagrams and explanations',
        'Interactive quizzes and chess puzzles to enhance your skills',
        'Weekly games with AI opponents',
        'Monthly group Q&A with experienced chess coaches',
      ],
      whatYoullLearn: [
        'Master the chessboard and how each piece moves.',
        'Understand basic rules like check, checkmate, and special moves (castling, en passant).',
        'Learn essential tactics: forks, pins, and skewers.',
        'Discover basic checkmate patterns.',
        'Practice with easy-to-solve chess puzzles and interactive games.',
      ],
      type: "beginner",
    },
    {
      name: 'Intermediate Package: "Master the Middlegame"',
      price: '$39.99/month',
      description:
        'For those who know the basics but want to take their gameplay to the next level. Here, we dive into advanced tactics, develop middlegame strategies, and refine your chess intuition.',
      cta: 'Level Up Your Skills with the Intermediate Package',
      includedMaterials: [
        '20+ hours of video content covering intermediate tactics and strategies',
        'Weekly chess puzzles tailored to your skill level',
        'In-depth analysis of classic chess games by top players',
        'Monthly one-on-one coaching sessions (60 min) with an expert coach',
        'Personal game reviews with feedback to help you improve',
      ],
      whatYoullLearn: [
        'Explore advanced opening strategies and plans.',
        'Strengthen your middlegame understanding: piece coordination, pawn structure, and space control.',
        'Learn deeper tactics like discovered attacks, removing the defender, and advanced combinations.',
        'Analyze famous chess games to understand common patterns and mistakes.',
        'Improve your ability to anticipate your opponent\'s moves.',
      ],
      popularLabel: 'Most Popular', // Updated to reflect the 'Most Popular' label
      type: "intermediate",
    },
    {
      name: 'Advanced Package: "Road to Mastery"',
      price: '$69.99/month',
      description:
        'Designed for serious learners ready to compete at high levels. This package covers deep strategies and complex endgames, preparing you to face strong opponents and potentially enter competitive chess.',
      cta: 'Master the Game with the Advanced Package',
      includedMaterials: [
        '40+ hours of advanced chess content',
        'One-on-one coaching sessions (90 min) with a Grandmaster or International Master',
        'Weekly in-depth game analysis and feedback',
        'Access to private online tournaments and competitive games',
        'A personal chess library of resources and annotated games',
      ],
      whatYoullLearn: [
        'Opening preparation tailored to your playing style.',
        'Advanced tactics and multi-move combinations.',
        'Mastering complex endgames, including bishop vs. knight, pawn endgames, and more.',
        'Chess psychology: managing time pressure and handling competitive play.',
        'Prepare for tournaments and rated games on platforms like Chess.com or Lichess.',
      ],
      recommendedLabel: 'Recommended', 
      type: "advanced",
    },
  ];


  return (
    <section className="learning-section py-12 bg-gray-100">
    {packag&&  <PaymentPopup setPackag={setPackag}  user={user} packag={packag}/> }
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Learning Packages</h2>
      <div className="package-grid grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
        {packages.map((packageData, index) => (
          <div
            className="package-card border rounded-3xl p-6 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-500 text-black hover:text-white"
            key={index}
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
            <p className="text-gray-900 mb-6 hover:text-white">{packageData.description}</p>
            <h4 className="text-lg font-semibold mb-2">What You'll Learn:</h4>
            <ul className="list-inside space-y-2 mb-6">
              {packageData.whatYoullLearn.map((lesson, i) => (
                <li className="flex items-center text-gray-900 hover:text-white transition-colors" key={i}>
                  <FaCheckCircle className="text-yellow-600 mr-2" /> {/* Tick icon */}
                  {lesson}
                </li>
              ))}
            </ul>
            <ul className="list-inside space-y-2 mb-6">
              {packageData.includedMaterials.map((material, i) => (
                <li className="flex items-center text-gray-900 hover:text-white transition-colors" key={i}>
                  <FaCheckCircle className="text-yellow-600 mr-2 w-5 h-5" /> {/* Tick icon */}
                  {material}
                </li>
              ))}
            </ul>
        
            <div className="flex justify-center mt-4">
              <button
                className="bg-yellow-600 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-500 hover:shadow-lg transition-colors duration-300"
                onClick={(e) => {
                  setPackag(packageData);
                  console.log('nasnclksa',packag);
                }}
              >
                {packageData.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningSection;
