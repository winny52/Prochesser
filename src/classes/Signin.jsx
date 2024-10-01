import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

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
      navigate('/dashboard'); // Use navigate to redirect
    } catch (error) {
      // Handle errors (e.g., invalid credentials)
      setError('Invalid email or password.');
      console.error('Sign-in error:', error);
    }
  };

  return (
    <section className="pt-12 relative w-screen bg-black text-black py-16 px-6 mx-auto">
      <div className="flex w-full justify-center items-center min-h-screen text-white p-4">
        <div className="bg-black p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-extrabold text-center text-yellow-500 animate-pulse mb-6">
            Welcome Back! Sign In
          </h2>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              />
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-bold py-2 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-600"
            >
              {error ? 'Retry' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-4">
            Don't have an account?{' '}
            <a href="/register" className="text-yellow-500 hover:text-yellow-600 underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
