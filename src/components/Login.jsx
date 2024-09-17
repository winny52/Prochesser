import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login Data:', formData);
  };

  return (
    <div className="flex justify-center items-center h-120 mt- bg-black">
      <form onSubmit={handleSubmit} className="bg-black p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">Login</h2>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition-colors"
        >
          Login
        </button>
        
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            New member? <Link to="/signup" className="text-yellow-500 hover:underline">Register an account</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
