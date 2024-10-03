import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faWallet, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../components/spinner';

const Dashboard = () => {
  const [learner, setLearner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch learner details and classes
    const fetchLearnerData = async () => {
      try {
        const response = await axios.get('http://localhost/wordpress/wp-json/custom/v1/learner');
        setLearner(response.data);
      } catch (err) {
        setError('Failed to fetch learner data');
      } finally {
        setLoading(false);
      }
    };

    fetchLearnerData();
  }, []);

  const handleClassClick = (classItem) => {
    // Redirect to payment page if not paid, else show class content
    if (!classItem.paid) {
      navigate(`/payment/${classItem.id}`);
    } else {
      navigate(`/classes/${classItem.id}`);
    }
  };

  if (loading) return <Spinner/>;
  if (error) return <p>{error}</p>;

  return (
    
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-600">Dashboard</h1>

        {/* Profile Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl">Welcome back, {learner?.first_name}!</h2>
        </div>

        {/* Profile, Wallet, and Classes Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {/* Profile Area */}
          <div className="p-4 bg-gray-200 rounded-lg text-center">
            <FontAwesomeIcon icon={faUser} size="2x" className="text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold">Profile</h3>
            <p>{learner?.first_name} {learner?.last_name}</p>
            <p>Email: {learner?.email}</p>
            <Link to="/profile" className="text-yellow-500">Edit Profile</Link>
          </div>

          {/* Wallet Area */}
          <div className="p-4 bg-gray-200 rounded-lg text-center">
            <FontAwesomeIcon icon={faWallet} size="2x" className="text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold">Wallet</h3>
            <p>Balance: {learner?.wallet_balance} KES</p>
            <Link to="/wallet" className="text-yellow-500">Top-up Wallet</Link>
          </div>

          {/* Classes Area */}
          <div className="p-4 bg-gray-200 rounded-lg text-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold">My Classes</h3>
            <p>You have {learner?.classes.length} classes.</p>
            <div className="space-y-2">
              {learner?.classes.map((classItem) => (
                <div key={classItem.id} className="border p-2 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200" onClick={() => handleClassClick(classItem)}>
                  <h4 className="font-semibold">{classItem.title}</h4>
                  <p>Progress: {classItem.progress}%</p>
                  <p>{classItem.paid ? 'Paid' : 'Payment Required'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
