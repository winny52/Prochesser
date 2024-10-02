import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from './state/userState';
import { Navigate } from 'react-router-dom'; 

// PrivateRoute component to protect routes
export const PrivateRoute = ({ element: Component }) => {
  const user = useRecoilValue(userState); // Use useRecoilValue to avoid unnecessary re-renders

  // If user is undefined, you may want to show a loading state or similar
  if (user === undefined) {
    return <div>Loading...</div>; // Optional loading state
  }

  return user ? <Component /> : <Navigate to="/login" />;
};

export const PublicRoute = ({ element: Component }) => {
  const user = useRecoilValue(userState); // Use useRecoilValue to avoid unnecessary re-renders

  // If user is undefined, you may want to show a loading state or similar
  if (user === undefined) {
    return <div>Loading...</div>; // Optional loading state
  }

  return user ? <Navigate to="/dashboard" /> : <Component />;
};
