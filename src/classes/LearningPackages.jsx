import React from 'react';

const LearningSection =()=> {
  const packages = [
    {
      name: 'Beginner Package: "Pawn to King"',
      price: '$19.99/month',
      description: 'For absolute beginners who need a strong foundation in the basics of chess. Start here, and master the rules, movement of the pieces, and basic tactics. You\'ll build a solid groundwork that will prepare you for more advanced strategies.',
      cta: 'Sign Up for the Beginner Package',
      includedMaterials: [
        '10+ high-quality video tutorials',
        'Downloadable PDF guides with chessboard diagrams and explanations',
        'Interactive quizzes and chess puzzles to enhance your skills',
        'Weekly games with AI opponents',
        'Monthly group Q&A with experienced chess coaches'
      ]
    },
    {
      name: 'Intermediate Package: "Master the Middlegame"',
      price: '$39.99/month',
      description: 'For those who know the basics but want to take their gameplay to the next level. Here, we dive into advanced tactics, develop middlegame strategies, and refine your chess intuition.',
      cta: 'Level Up Your Skills with the Intermediate Package',
      includedMaterials: [
        '20+ hours of video content covering intermediate tactics and strategies',
        'Weekly chess puzzles tailored to your skill level',
        'In-depth analysis of classic chess games by top players',
        'Monthly one-on-one coaching sessions (60 min) with an expert coach',
        'Personal game reviews with feedback to help you improve'
      ]
    },
    {
      name: 'Advanced Package: "Road to Mastery"',
      price: '$69.99/month',
      description: 'Designed for serious learners ready to compete at high levels. This package covers deep strategies and complex endgames, preparing you to face strong opponents and potentially enter competitive chess.',
      cta: 'Master the Game with the Advanced Package',
      includedMaterials: [
        '40+ hours of advanced chess content',
        'One-on-one coaching sessions (90 min) with a Grandmaster or International Master',
        'Weekly in-depth game analysis and feedback',
        'Access to private online tournaments and competitive games',
        'A personal chess library of resources and annotated games'
      ]
    }
  ];

  
 
  return (
    <section className="learning-section">
      <h2 className="text-3xl font-bold mb-4">Our Learning Packages and Resources</h2>
      <div className="package-grid grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((packageData, index) => (
          <div className="package-card border rounded-lg p-4" key={index}>
            <h3 className="text-2xl font-semibold mb-2">{packageData.name}</h3>
            <p className="text-lg mb-4">{packageData.price}</p>
            <p className="text-gray-700 mb-4">{packageData.description}</p>
            <ul className="list-none space-y-2">
              {packageData.includedMaterials.map((material, i) => (
                <li className="text-gray-600" key={i}>{material}</li>
              ))}
            </ul>
            <button className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-blue-600">
              {packageData.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningSection;