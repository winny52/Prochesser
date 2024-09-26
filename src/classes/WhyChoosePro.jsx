import React from 'react';

const WhyChooseProChesserAcademy =()=> {
  return (
    <section className="why-choose-and-future bg-black text-white p-10">
      <div className="flex flex-col">
        <h3 className="text-3xl font-bold mb-4">Why Choose ProChesser Academy?</h3>
        <p className="text-lg mb-4">
          Learning chess with ProChesser Academy is more than just a hobby. It’s about developing lifelong skills that empower your critical thinking, problem-solving, and focus. Chess is a powerful tool for mental growth, and our platform is designed to make your learning journey immersive, engaging, and practical.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <h4> Structured Lessons:</h4>
          <p className="border-r border-gray-300 pr-2">
            Learn at your own pace with step-by-step guidance.
          </p>
          <p className="border-r border-gray-300 pr-2">
            **Interactive Materials:** Engage with videos, puzzles, and live games.
          </p>
          <p className="border-r border-gray-300 pr-2">
            **Expert Coaches:** Benefit from the support of passionate, experienced instructors.
          </p>
          <p className="border-r border-gray-300 pr-2">
            **Skill Testing:** Challenge yourself against peers and AI opponents.
          </p>
          <p className="border-r border-gray-300 pr-2">
            **Supportive Community:** Connect with others who encourage your growth.
          </p>
          <p className="border-r border-gray-300 pr-2">
            **Earn Real Money:** Master your skills and compete for cash prizes on our platform.
          </p>
        </div>
      </div>
      <div className="future-awaits">
        <h3 className="text-3xl font-bold mb-4">Your Future Awaits at ProChesser Academy</h3>
        <p className="text-lg">
          Once you've completed your chess mastery training, you'll have the opportunity to compete and earn from your skills on our exclusive platform. Imagine a place where chess isn't just about winning—it's about unlocking new opportunities for success.
        </p>
        <button className="bg-yellow-600 text-black px-8 py-4 rounded-full hover:bg-yellow-500">Choose Your Learning Path</button>
      </div>
    </section>
  );
};

export default WhyChooseProChesserAcademy;