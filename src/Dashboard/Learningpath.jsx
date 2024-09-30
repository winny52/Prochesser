import React from 'react';

const LearningPath = ({ modules }) => {
  return (
    <section className="learning-path w-full p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">Learning Path</h2>
      <ul className="space-y-6">
        {modules.map((module, index) => (
          <li key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">{module.title}</h3>
            <p className="text-gray-700 mt-2">{module.description}</p>
            <button className="mt-4 bg-yellow-500 text-gray-900 py-2 px-4 rounded-full transition duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300">
              Start
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LearningPath;
