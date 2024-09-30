import React from 'react';

const SupportSection = () => {
  return (
    <section className="support-section w-full flex flex-col items-center bg-gray-50 py-12 px-6">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-blue-900 mb-8">Support</h2>
      
      {/* FAQ Section */}
      <div className="faq bg-white shadow-lg rounded-lg w-full max-w-3xl p-8 mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">FAQs</h3>
        <ul className="list-disc list-inside text-left space-y-4 text-gray-700">
          <li>How do I access my course?</li>
          <li>How can I contact support?</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact bg-white shadow-lg rounded-lg w-full max-w-3xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-8 rounded-full transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
          Live Chat
        </button>
      </div>
    </section>
  );
};

export default SupportSection;
