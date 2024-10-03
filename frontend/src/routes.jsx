import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from './state/userState';
import { Navigate } from 'react-router-dom'; 
import Spinner from './components/spinner';

// PrivateRoute component to protect routes
export const PrivateRoute = ({ element: Component }) => {
  const user = useRecoilValue(userState); // Use useRecoilValue to avoid unnecessary re-renders

  // If user is undefined, you may want to show a loading state or similar
  if (user === undefined) {
    return <Spinner/>
  }

  return user ? <Component /> : <Navigate to="/login" />;
};

export const PublicRoute = ({ element: Component }) => {
  const user = useRecoilValue(userState); // Use useRecoilValue to avoid unnecessary re-renders

  if (user === undefined) {
    return <Spinner/>
  }

  return user ? <Navigate to="/dashboard" /> : <Component />;
};
