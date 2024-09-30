import React from 'react';

const SupportSection =()=> {
  return (
    <section className="support-section w-full  items-center text-center m-0 p-6">
      <h2 className="text-2xl font-bold">Support</h2>
      <div className="faq mt-4">
        <h3 className="text-xl">FAQs</h3>
        <ul>
          <li>How do I access my course?</li>
          <li>How can I contact support?</li>
        </ul>
      </div>
      <div className="contact mt-4">
        <h3 className="text-xl">Contact Us</h3>
        <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded">Live Chat</button>
      </div>
    </section>
  );
};

export default SupportSection;
