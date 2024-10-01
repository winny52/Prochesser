import React from 'react';

const LearningTools = () => {
  return (
    <section className="learning-tools w-full p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Learning Tools</h2>
      <ul className="mt-4 space-y-4">
        <li><a href="#videos" className="text-blue-600 hover:underline">Video Lessons</a></li>
        <li><a href="#puzzles" className="text-blue-600 hover:underline">Chess Puzzles of the Day</a></li>
        <li><a href="#downloadable" className="text-blue-600 hover:underline">Downloadable Materials</a></li>
      </ul>
      <button className="mt-6 bg-yellow-500 text-gray-900 py-2 px-6 rounded-full transition duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300">
        Solve Today's Puzzle
      </button>
    </section>
  );
};

export default LearningTools;
