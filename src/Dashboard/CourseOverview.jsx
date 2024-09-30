import React from 'react';

const CourseOverview = ({ packageName, progress }) => {
  return (
    <section className="course-overview bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white  py-24 rounded-lg shadow-2xl h-full relative overflow-hidden">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">
        Current Package: {packageName}
      </h2>
      <div className="progress-bar bg-gray-200 w-full h-4 rounded-full mt-6">
        <div
          className="progress bg-yellow-500 h-4 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded-full transition duration-300 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-full md:w-auto">
        Start Your First Lesson
      </button>
    </section>
  );
};

export default CourseOverview;
