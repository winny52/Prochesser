import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-500  m-0 w-screen py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6 md:mb-10">
              Testimonials
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10">
              Hear From Our Victorious Players
            </h2>
          </div>

          {/* Second Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-700 italic">
              "Finally, a chess platform that truly values skill and intelligence. It's thrilling, competitive, and rewarding."
              <span className="block mt-2 text-gray-900 font-semibold">– Alejandro H.</span>
            </blockquote>
            <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-700 italic">
              "The thrill of real competition plus the bonus of earning money? Sign me up!"
              <span className="block mt-2 text-gray-900 font-semibold">- James F.</span>
            </blockquote>
            <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-700 italic">
              "ProChesser transformed how I enjoy chess. Winning has never been so rewarding!"
              <span className="block mt-2 text-gray-900 font-semibold">- Wilkins D.</span>
            </blockquote>
            <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-700 italic">
              "ProChesser has transformed how I view chess. Winning cash for my strategic plays is unbelievably rewarding!"
              <span className="block mt-2 text-gray-900 font-semibold">– Santiago M.</span>
            </blockquote>
            <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-700 italic">
              "A seamless interface and a vibrant community. My go-to platform for chess."
              <span className="block mt-2 text-gray-900 font-semibold">- Alvaro G.</span>
            </blockquote>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full ">
            Join a Community Where Your Skills Pay Off
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
