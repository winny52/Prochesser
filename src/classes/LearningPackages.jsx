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

  const resources = [
    'Interactive Video Lessons',
    'Chess Puzzles & Daily Drills',
    'Personalized Game Analysis',
    'Live Practice Games & Competitive Play'
  ];

  return (
    <section className="learning-section">
      <h2>Our Learning Packages and Resources</h2>
      <div className="package-list">
        {packages.map((packageData, index) => (
          <div className="package" key={index}>
            <h3>{packageData.name}</h3>
            <p>{packageData.price}</p>
            <p>{packageData.description}</p>
            <ul>
              {packageData.includedMaterials.map((material, i) => (
                <li key={i}>{material}</li>
              ))}
            </ul>
            <button className="cta-button">{packageData.cta}</button>
          </div>
        ))}
      </div>
      <div className="resource-list">
        <h2>Learning Tools & Resources</h2>
        <ul>
          {resources.map((resource, index) => (
            <li key={index}>{resource}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LearningSection;