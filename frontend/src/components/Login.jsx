import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { fetchLogin } from '../fetch/login';
import { userState } from '../state/userState';

const Login = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchLogin(email,password,setError);  
  };

  return (
    <section className="pt-32 relative w-screen bg-black text-black py-16 px-6 mx-auto">
 
    <div className="flex justify-center items-center h-120 mt- bg-black">
      <form onSubmit={handleSubmit} className="bg-black p-8 text-white rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">Login</h2>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 font-semibold text-black py-2 rounded hover:bg-yellow-600 hover:text-white transition-colors"
        >
          Login
        </button>
        
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            New member? <Link to="/signup" className="text-yellow-500 hover:underline hover:text-yellow-600 ">Register an account</Link>
          </p>
        </div>
      </form>
    </div>
    
    </section>
  );
};

export default Login;
