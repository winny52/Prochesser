import React from 'react';

const LearningPath = ({ modules }) => {
  return (
    <section className="learning-path w-full p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-yellow-300 text-center">Learning Path</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">{module.title}</h3>
            <p className="text-gray-300 mt-2">{module.description}</p>
            <button className="mt-4 bg-yellow-500 text-gray-900 py-2 px-4 rounded-full transition duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300">
              Start
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPath;
