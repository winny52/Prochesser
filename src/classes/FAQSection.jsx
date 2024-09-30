import React from 'react';

const FaqsSection = () => {
  const faqs = [
    {
      question: 'Who can join ProChesser Academy?',
      answer: 'Anyone! Whether you\'re an absolute beginner or an intermediate player...'
    },
    {
      question: 'How are the classes delivered?',
      answer: 'All lessons are delivered online through video tutorials, live practice games, and interactive exercises.'
    },
    {
      question: 'How long does it take to see improvement?',
      answer: 'It depends on your dedication. Most students see noticeable improvements within the first month of consistent practice.'
    },
    {
      question: 'Do I need any chess knowledge before signing up?',
      answer: 'No prior knowledge is required! Our beginner package is designed to help you learn from the ground up.'
    },
    {
      question: 'Will I get personalized feedback?',
      answer: 'Yes, our coaches provide personalized game analysis and feedback tailored to help you improve.'
    },
    {
      question: 'How often can I access the materials?',
      answer: 'You have unlimited access to all the learning materials for the duration of your subscription.'
    },
    {
      question: 'Are there live practice games?',
      answer: 'Yes! You can play live games with fellow students or AI opponents anytime on our platform.'
    },
    {
      question: 'Can I really earn from playing chess?',
      answer: 'Once you master the game, you’ll have the opportunity to participate in matches where you can earn from your skills.'
    },
    {
      question: 'How are the chess coaches qualified?',
      answer: 'Our coaches include experienced professionals, some of whom hold titles like Grandmaster and International Master.'
    },
    {
      question: 'What’s the difference between the beginner, intermediate, and advanced packages?',
      answer: 'Each package is tailored to different levels of experience. Beginners focus on fundamentals, intermediates dive into strategy, and advanced learners refine their skills for competitive play.'
    },
    {
      question: 'Can I upgrade my package if I improve?',
      answer: 'Absolutely! You can upgrade to a higher-level package anytime to keep progressing in your chess journey.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'We don’t offer free trials, but our packages are designed to deliver exceptional value and a strong learning experience for every player.'
    }
  ];

  return (
    <section className="faqs-section py-12 bg-gray-100 text-gray-800 rounded-lg shadow-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Frequently Asked Questions</h2>
        <ul className="space-y-6">
          {faqs.map((faq, index) => (
            <li key={index} className="bg-white p-6 rounded-md shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300">{faq.question}</h3>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FaqsSection;
