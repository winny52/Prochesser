import React from 'react';

const CommunitySection = () => {
  return (
    <section className="community-and-support">
      <h2 className="text-3xl font-bold mb-4">Community and Support</h2>
      <p className="text-lg mb-6">
        When you join ProChesser Academy, you're not just signing up for lessons—you're joining a supportive and vibrant chess community.
      </p>
      <ul className="list space-y-4">
        <li className="text-gray-700">
          <strong className="text-gray-900">Chess Forums</strong>: Share ideas, ask questions, and learn from peers and coaches alike.
        </li>
        <li className="text-gray-700">
          <strong className="text-gray-900">Study Groups</strong>: Join virtual study groups led by coaches and engage with fellow students.
        </li>
        <li className="text-gray-700">
          <strong className="text-gray-900">Weekly Challenges</strong>: Test your skills with unique challenges designed to hone your tactical and strategic abilities.
        </li>
        <li className="text-gray-700">
          <strong className="text-gray-900">Online Tournaments</strong>: Compete in exclusive tournaments and earn rankings as you progress through your training.
        </li>
      </ul>
      <button className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-blue-600">
        Join the ProChesser Community
      </button>
    </section>
  );
};

export default CommunitySection;