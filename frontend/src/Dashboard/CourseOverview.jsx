import React from 'react';

const CourseOverview = ({ packageName, progress }) => {
  return (
    <section className="course-overview bg-gray-100  text-black py-24 rounded-lg shadow-2xl h-full relative overflow-hidden px-4 md:px-8 lg:px-12">
      <h2 className="text-3xl font-semibold bg-gradient-to-r from-yellow-300 to-blue-500 bg-clip-text text-transparent animate-pulse mb-6 text-center">
        Current Package: {packageName}
      </h2>
      <div className="progress-bar bg-gray-700 w-full h-4 rounded-full mt-6">
        <div
          className="progress bg-yellow-500 h-4 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button className="mt-8 bg-yellow-500 to-blue-500 text-black hover:text-white py-2 px-6 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-full md:w-auto animate-pulse">
        Start Your First Lesson
      </button>
    </section>
  );
};

export default CourseOverview;
