import React from 'react';

const LearningPath =({ modules })=> {
  return (
    <section className="learning-pathw-full p-6">
      <h2 className="text-2xl font-bold mb-4">Learning Path</h2>
      <ul>
        {modules.map((module, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl">{module.title}</h3>
            <p>{module.description}</p>
            <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded">Start</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LearningPath;
