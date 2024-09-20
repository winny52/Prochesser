import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faWallet, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'; 

const Dashboard = () => {
  const learnerName = 'Winny';
  const classes = [
    { id: 1, title: 'Chess Basics', progress: '80%' },
    { id: 2, title: 'Advanced Chess Tactics', progress: '50%' },
  ];
  const walletBalance = 1000; 
  const paymentHistory = [
    { id: 1, amount: 500, date: '2024-08-15', method: 'Mpesa' },
    { id: 2, amount: 300, date: '2024-08-10', method: 'PayPal' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-600">Dashboard</h1>

        {/* Welcome Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl">Welcome back, {learnerName}!</h2>
        </div>

        {/* Profile, Wallet, and Classes Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {/* Profile Area */}
          <div className="p-4 bg-gray-200 rounded-lg text-center">
            <FontAwesomeIcon icon={faUser} size="2x" className="text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold">Profile</h3>
            <p>Manage your profile details.</p>
            <Link to="/profile" className="text-yellow-500">View Profile</Link>
          </div>

          {/* Wallet Area */}
          <div className="p-4 bg-gray-200 rounded-lg text-center">
            <FontAwesomeIcon icon={faWallet} size="2x" className="text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold">Wallet</h3>
            <p>Balance: {walletBalance} KES</p>
            <Link to="/wallet" className="text-yellow-500">View Wallet</Link>
          </div>

          {/* Classes Area */}
          <div className="p-4 bg-gray-200 rounded-lg text-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold">My Classes</h3>
            <p>You have {classes.length} classes.</p>
            <Link to="/classes" className="text-yellow-500">View Classes</Link>
          </div>
        </div>

       

       </div>
    </div>
  );
};

export default Dashboard;
