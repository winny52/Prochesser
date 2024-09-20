import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');

    // Handle signup logic here
    console.log({ firstName, secondName, email, password });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Column 1: Chess Description */}
      <div className="lg:w-1/2 w-full p-6">
        <h1 className="text-3xl font-bold text-yellow-600 mb-4">
          Learn How To Play Chess
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4">
          New to Chess? No Problem!
        </h2>
        <p className="text-gray-600 text-lg">
          Discover the beauty of chess with our comprehensive guides, tutorials,
          and strategies designed for beginners and advanced players alike.
          Master the fundamentals, refine your technique, and prepare to
          conquer the board.
        </p>
      </div>

      {/* Column 2: Register Form */}
      <div className="lg:w-1/2 w-full p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full mx-auto">
          <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
            Join the Chess Journey
          </h2>
          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
            />
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}
            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="text-yellow-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
