import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic  form submission
    console.log("Newsletter subscription:", email);

    
    setEmail("");
    setMessage("Thank you for subscribing!");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-center mb-4">Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full max-w-md px-4 py-2 mb-4 border rounded shadow-sm focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-600 transition-colors"
        >
          Subscribe
        </button>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default Newsletter;
