import React from "react";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Learn How To Play Chess</h2>
        <p className="text-lg text-center">
          New to Chess? No Problem! Discover the beauty of chess with our comprehensive guides, tutorials, and strategies designed for beginners and advanced players alike. Master the fundamentals, refine your technique, and prepare to conquer the board.
        </p>
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/start-learning")}
            className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600 transition-colors"
          >
            Start Learning
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold text-center mb-4">Join the Community</h3>
        <p className="text-lg text-center">
          Join our vibrant community of chess lovers and enthusiasts. Share stories and strategies, and celebrate victories together. Participate in community events, tournaments, and workshops designed to bring out the grandmaster in you.
        </p>
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/join-now")}
            className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600 transition-colors"
          >
            Join Now
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-center mb-4">Newsletter Section</h3>
        <p className="text-lg text-center">
          Subscribe to our newsletter for the latest updates and exclusive offers. Get chess tips, updates on upcoming tournaments, and more directly in your inbox.
        </p>
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/newsletter")}
            className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Guide;
