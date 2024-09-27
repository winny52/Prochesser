import React from 'react';

const FaqsSection =()=> {
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
    <section className="faqs-section">
      <h2 className='   text-3xl  font-bold mt-6 mb-6' >Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h3 className='text-xl font-semibold'>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FaqsSection;