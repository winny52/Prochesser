import React from 'react';

const CourseOverview = () => {
  // Sample data for the learning modules
  const modulesData = [
    { title: 'Opening Strategies', description: 'Learn key opening principles to control the center and develop your pieces effectively.' },
    { title: 'Middle Game Tactics', description: 'Master powerful tactics like forks, pins, and discovered attacks.' },
    { title: 'Endgame Techniques', description: 'Explore advanced techniques for dominating the endgame and checkmating the opponent.' },
    { title: 'Chess Psychology', description: 'Understand the psychological aspects of chess and how to maintain focus during games.' },
    { title: 'Advanced Tactics', description: 'Dive into complex tactics and combinations to outsmart your opponents.' },
    { title: 'Tournament Preparation', description: 'Prepare for tournaments with strategies, tips, and practice methods.' }
  ];

  // Sample data for the course overview
  const packageName = ''; // No package means fallback will be used
  const progress = 50; // Example progress percentage

  const fallbackPackage = "Beginner Package: Pawn to King"; // Fallback option
  const displayedPackage = packageName || fallbackPackage; // Use fallback if no package

  return (
    <section className="course-overview-learning-path mt-2 bg-white text-black py-24 rounded-lg shadow-2xl mt-2 h-full relative overflow-hidden px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Course Overview Section */}
      <div className="course-overview col-span-1 bg-blue-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-blue-700 bg-clip-text text-transparent animate-pulse mb-6 text-center">
          Current Package: {displayedPackage}
        </h2>

        {/* Vertical Progress Bar */}
        <div className="flex flex-col items-center">
          <div className="progress-bar bg-gray-300 w-4 h-64 rounded-full overflow-hidden shadow-inner">
            <div
              className="progress bg-blue-700 h-full rounded-full transition-all duration-300 ease-in-out"
              style={{ height: `${progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-700 mt-2">{progress}% Complete</span>
        </div>

        {/* CTA Button */}
        <button className="mt-8 bg-gradient-to-r from-yellow-500 to-blue-500 text-white hover:bg-blue-600 py-3 px-8 rounded-full transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-full md:w-auto shadow-lg animate-pulse">
          Start Your First Lesson
        </button>
      </div>

      {/* Learning Path Section */}
      <div className="learning-path col-span-3 w-full p-6 text-black">
        <h2 className="text-2xl font-bold mb-6 text-yellow-600 text-center">Learning Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulesData.length > 0 ? (
            modulesData.map((module, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg shadow-md transition-shadow duration-300 ${
                  index % 2 === 0 ? 'bg-blue-50' : 'bg-gray-200'
                } border border-gray-400`}
              >
                <h3 className="text-xl font-semibold text-blue-800">{module.title}</h3>
                <p className="text-gray-700 mt-2">{module.description}</p>
                <button className="mt-4 bg-yellow-600 text-white justify-center py-2 px-4 rounded-full transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Start
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No learning modules available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
