import React from 'react';

const CourseOverview = ({ packageName, progress }) => {
  return (
    <section className="course-overview bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white  py-24 rounded-lg shadow-2xl h-full relative overflow-hidden">
      <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
        Current Package: {packageName}
      </h2>
      <div className="progress-bar bg-gray-200 w-full h-4 rounded-full mt-6">
        <div
          className="progress bg-blue-600 h-4 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button className="mt-6 bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full md:w-auto">
        Start Your First Lesson
      </button>
    </section>
  );
};

export default CourseOverview;
