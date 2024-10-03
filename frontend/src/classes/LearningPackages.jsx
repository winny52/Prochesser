import React from 'react';
import { BACKEND_URL } from '../constant';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from '../state/userState';

const LearningSection = () => {
  const user = useRecoilValue(userState);
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
      type:"beginner"
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
      popularLabel: true, // Add a property to indicate popularity
      type:"intermediate"
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
      type:"advanced"
    },
  ];

  async function GetUrl(type) {
    const token = localStorage.getItem('token');
    if (!user || !token) {
      window.location.href = "/login";
      return;
    }
    
    const url = `${BACKEND_URL}/api/payment/get-url`;
    const userId = user.user.id;
    try {
      const response = await axios.post(
        url,
        {
          userId: userId,
          name: type
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      const data = response.data;
      window.location.href = data.paymentDetails
      console.log(data);
    } catch (error) {
      console.error('Error fetching payment URL:', error);
    }
  }
  
    return (
    <section className="learning-section py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Learning Packages </h2>
      <div className="package-grid grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
        {packages.map((packageData, index) => (
          <div
            className="package-card border rounded-3xl p-6 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-500 text-black hover:text-white"
            key={index}
          >
            <h3 className="text-2xl font-bold mb-4">
              {packageData.name}
              {packageData.popularLabel && (
                <span className="bg-blue-800 text-white font-semibold text-xs uppercase rounded-full px-2 ml-2">
                  Most Popular and Recommended
                </span>
              )}
            </h3>
            <p className="text-xl mb-4 font-bold">{packageData.price}</p>
            <p className="text-gray-900 mb-6 hover:text-white">{packageData.description}</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {packageData.includedMaterials.map((material, i) => (
                <li className="text-gray-900 hover:text-white transition-colors" key={i}>
                  {material}
                </li>
              ))}
            </ul>
            <button className="bg-yellow-600 text-white font-bold py-2 px-6 rounded-full mt-4 hover:bg-yellow-600 hover:shadow-lg transition-colors duration-300" onClick={(e)=>GetUrl(packageData.type)}>
              {packageData.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningSection;
