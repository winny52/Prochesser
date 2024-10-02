import React, { useState } from 'react';
import { fetchSignup } from '../fetch/login';
import { useNavigate } from 'react-router-dom';

const SignUp =()=> {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
     
    try {      
       const data = await fetchSignup(formData);
       localStorage.setItem('token',data.token);
      setSuccess('User registration successful!');
      navigate('/welcome'); 
    } catch (error) {
      setError(error.message);
      alert(error.message || "Some error occured");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 relative w-screen bg-black text-black py-16 px-6 mx-auto">
    <div className="flex justify-center items-center h-120 bg-black">
      <form onSubmit={handleSubmit} className="bg-black p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-yellow-500"

            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-yellow-500"

            required
          />
        </div>
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
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-yellow-500"

            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-yellow-500"

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
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-yellow-500"

            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-yellow-500"

            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 font-semibold text-black py-2 rounded hover:bg-yellow-600 hover:text-white transition-colors"

        >
          Sign Up
        </button>
      </form>
    </div>
    </section>
  );
};

export default SignUp;
