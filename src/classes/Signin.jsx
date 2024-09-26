import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }
    setError('');

    try {
      // Make a POST request to the custom WordPress API endpoint to authenticate the user
      const response = await axios.post('http://localhost/wordpress/wp-json/jwt-auth/v1/login', {
        username: email,
        password: password,
      });

      const token = response.data.token; // Store the token from the response

      // Store the token in local storage
      localStorage.setItem('token', token);
      // Optionally, store user info if returned
      // localStorage.setItem('userDetails', JSON.stringify(response.data));

      console.log('User signed in successfully', response.data);
      // Redirect to dashboard or another page here
    } catch (error) {
      // Handle errors (e.g., invalid credentials)
      setError('Invalid email or password.');
      console.error('Sign-in error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
          Welcome Back! Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-4">
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
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="/start-learning" className="text-yellow-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
