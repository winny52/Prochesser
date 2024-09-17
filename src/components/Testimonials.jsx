import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    quote: "Finally, a chess platform that truly values skill and intelligence. It's thrilling, competitive, and rewarding.",
    author: "Alejandro H.",
  },
  {
    quote: "The thrill of real competition plus the bonus of earning money? Sign me up!",
    author: "James F.",
  },
  {
    quote: "ProChesser transformed how I enjoy chess. Winning has never been so rewarding!",
    author: "Wilkins D.",
  },
  {
    quote: "ProChesser has transformed how I view chess. Winning cash for my strategic plays is unbelievably rewarding!",
    author: "Santiago M.",
  },
  {
    quote: "A seamless interface and a vibrant community. My go-to platform for chess.",
    author: "Alvaro G.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      }, 5000); // Change testimonial every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleTestimonialClick = () => {
    setIsPaused(true); // Pause the interval when a testimonial is clicked
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="bg-gray-100 m-0 w-screen py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6 md:mb-10">
              Testimonials
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-10">
              Hear From Our Victorious Players
            </h2>
          </div>

          {/* Second Column - Display one testimonial at a time */}
          <div className="grid grid-cols-1">
            <blockquote
              className="bg-black p-6 rounded-lg shadow-md text-white italic cursor-pointer"
              onClick={handleTestimonialClick} // Pause on click
            >
              "{currentTestimonial.quote}"
              <span className="block mt-2 text-gray-900 font-semibold">
                – {currentTestimonial.author}
              </span>
            </blockquote>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full">
            Join a Community Where Your Skills Pay Off
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
