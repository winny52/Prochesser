import React from 'react';

const SupportSection = () => {
  return (
    <section className="support-section w-full flex flex-col items-center bg-gray-50 py-12 px-6">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Support</h2>
      
      {/* FAQ Section */}
      <div className="faq bg-white shadow-md rounded-lg w-full max-w-3xl p-6 mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">FAQs</h3>
        <ul className="list-disc list-inside text-left space-y-2 text-gray-600">
          <li>How do I access my course?</li>
          <li>How can I contact support?</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact bg-white shadow-md rounded-lg w-full max-w-3xl p-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h3>
        <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
          Live Chat
        </button>
      </div>
    </section>
  );
};

export default SupportSection;
