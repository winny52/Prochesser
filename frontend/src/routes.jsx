import React, { Component } from 'react';
import { useRecoilValue } from 'recoil';
import { userState,isLoadingState } from './state/userState';
import { Navigate } from 'react-router-dom'; 
import Spinner from './components/spinner';

// PrivateRoute component to protect routes
export const PrivateRoute = ({ element: Component }) => {
  const user = useRecoilValue(userState); // Use useRecoilValue to avoid unnecessary re-renders
  const isloading = useRecoilValue(isLoadingState)
  // If user is undefined, you may want to show a loading state or similar
  if (isloading) {
    return <Spinner/>
  }

  return user ? <Component /> : <Navigate to="/login" />;
};

export const PublicRoute = ({ element: Component }) => {
  const user = useRecoilValue(userState); // Use useRecoilValue to avoid unnecessary re-renders
  const isloading = useRecoilValue(isLoadingState)

  if (isloading) {
    return <Spinner/>
  }

  return user ? <Navigate to="/" /> : <Component />;
};

export const SubscriptionPrivateRoutes = ({ element: Component }) => {
  const user = useRecoilValue(userState); // Use useRecoilValue to avoid unnecessary re-renders
  const isloading = useRecoilValue(isLoadingState)

  if (isloading) {
    return <Spinner />; 
  }
  if(!user)return <Navigate to="/login" />; 
  if ((user && (!user.subscriptions || user.subscriptions.length === 0))) {
    return <Navigate to="/" />; 
  }

  return <Component />; 
};