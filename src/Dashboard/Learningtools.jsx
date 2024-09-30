import React from 'react';

const LearningTools =()=> {
  return (
    <section className="learning-tools w-full items-center text-center p-6">
      <h2 className="text-2xl font-bold">Learning Tools</h2>
      <ul className="mt-4">
        <li><a href="#videos">Video Lessons</a></li>
        <li><a href="#puzzles">Chess Puzzles of the Day</a></li>
        <li><a href="#downloadable">Downloadable Materials</a></li>
      </ul>
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded">Solve Today's Puzzle</button>
    </section>
  );
};

export default LearningTools;
