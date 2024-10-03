// import React from 'react';

// const Support = () => {
//   return (
//     <section className="support-and-learning w-full flex flex-col items-center bg-gray-50 py-12 px-6">
//       {/* Section Header */}
//       <h2 className="text-4xl font-bold text-blue-900 mb-8">Support & Learning Tools</h2>

//       {/* Grid Container for Three Columns */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
//         {/* Learning Tools Section */}
//         <div className="learning-tools bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
//           <h3 className="text-3xl font-semibold mb-6 text-yellow-600">Learning Tools</h3>
//           <ul className="mt-4 space-y-4">
//             <li>
//               <a href="#videos" className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300">
//                 Video Lessons
//               </a>
//             </li>
//             <li>
//               <a href="#puzzles" className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300">
//                 Chess Puzzles of the Day
//               </a>
//             </li>
//             <li>
//               <a href="#downloadable" className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300">
//                 Downloadable Materials
//               </a>
//             </li>
//           </ul>
//           <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
//             Solve Today's Puzzle
//           </button>
//         </div>

//         {/* Support Section */}
//         <div className="support bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
//           <h3 className="text-3xl font-semibold text-yellow-600 mb-6">Support</h3>
//           <ul className="mt-4 space-y-4">
//             <li>
//               <a href="#contact" className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300">
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               <a href="#faqs" className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300">
//                 Explore our FAQs
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Additional Resources Section */}
//         <div className="additional-section bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
//           <h3 className="text-3xl font-semibold mb-6 text-yellow-600">Additional Resources</h3>
//           <ul className="mt-4 space-y-4">
//             <li>
//               <a href="#community" className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300">
//                 Community Forum
//               </a>
//             </li>
//             <li>
//               <a href="#guides" className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300">
//                 User Guides
//               </a>
//             </li>
//             <li>
//               <a href="#webinars" className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300">
//                 Upcoming Webinars
//               </a>
//             </li>
//           </ul>
         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Support;
import React from 'react';

const Support = () => {
  return (
    <section className="support-and-learning w-full flex flex-col items-center bg-gray-50 py-12 px-6">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-blue-900 mb-8">Support & Learning Tools</h2>

      {/* Grid Container for Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Learning Tools Section */}
        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden transition-transform transform hover:scale-105">
          <div className="absolute top-0 left-0 right-0 h-64 bg-blue-50 rounded-t-full"></div>
          <h3 className="text-3xl font-semibold mb-6 text-yellow-600 relative z-10">Learning Tools</h3>
          <ul className="mt-4 space-y-4 relative z-10">
            <li>
              <a href="#videos" className="text-blue hover:underline transition duration-300">Video Lessons</a>
            </li>
            <li>
              <a href="#puzzles" className="text-blue hover:underline transition duration-300">Chess Puzzles of the Day</a>
            </li>
            <li>
              <a href="#downloadable" className="text-blue hover:underline transition duration-300">Downloadable Materials</a>
            </li>
          </ul>
      
        </div>

        {/* Support Section */}
        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden transition-transform transform hover:scale-105">
          <div className="absolute top-0 left-0 right-0 h-full bg-blue-50 rounded-t-full"></div>
          <h3 className="text-3xl font-semibold text-yellow-600 mb-6 relative z-10">Support</h3>
          <ul className="mt-4 space-y-4 relative z-10">
            <li>
              <a href="#contact" className="text-blue hover:underline transition duration-300">Contact Us</a>
            </li>
            <li>
              <a href="#faqs" className="text-blue hover:underline transition duration-300">Explore our FAQs</a>
            </li>
          </ul>
        </div>

        {/* Additional Resources Section */}
        <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden transition-transform transform hover:scale-105">
          <div className="absolute top-0 left-0 right-0 h-full bg-blue-50 rounded-t-full"></div>
          <h3 className="text-3xl font-semibold mb-6 text-yellow-600 relative z-10">Additional Resources</h3>
          <ul className="mt-4 space-y-4 relative z-10">
            <li>
              <a href="#community" className="text-blue hover:underline transition duration-300">Community Forum</a>
            </li>
            <li>
              <a href="#guides" className="text-blue hover:underline transition duration-300">User Guides</a>
            </li>
            <li>
              <a href="#webinars" className="text-blue hover:underline transition duration-300">Upcoming Webinars</a>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Support;
