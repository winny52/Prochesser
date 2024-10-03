import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from 'recoil';
import './App.css';
import Login from './components/Login';
import SignUp from './components/Signup';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import FrequentlyAskedQuestions from './components/FAQ';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import HowItWorks from './components/Howitworks';
import ScrollToTop from './components/ScrollTop';
import SignIn from './classes/Signin';
import Dashboard from './Dashboard/Dashboard';
import Blog from './components/Blog';
import Content from './classes/Content';
import Register from './classes/Register';
import Header from './Dashboard/Header';
import WelcomePage from './classes/WelcomePage';
import ClassesFooter from './Dashboard/ClassesFooter';
import Profile from './Dashboard/Profile';
import { PrivateRoute, PublicRoute } from './routes'; 
import { userState, fetchUserState } from "./state/userState";
import Payment from './payment';
import Spinner from './components/spinner';
function App() {
  const location = useLocation();
  const [user, setUser] = useRecoilState(userState);

  // Check if the current route starts with "/dashboard"
  const isDashboardRoute = location.pathname.startsWith('/dashboard');
  
  const userLoadable = useRecoilValueLoadable(fetchUserState);

  // Handle user loading based on Loadable state
  useEffect(() => {
    if (userLoadable.state === 'hasValue') {
      setUser(userLoadable.contents); // Set user data in state
    } else if (userLoadable.state === 'hasError') {
      setUser(null);
    }
  }, [userLoadable, setUser]);

  if (userLoadable.state === 'loading') {
    return <Spinner/>;
  }

  return (
    <div className='w-screen'>
      {/* Conditionally render Navbar or Header based on the route */}
      {isDashboardRoute ? <Header /> : <Navbar />}

      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<PublicRoute element={SignUp} />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/faqs" element={<FrequentlyAskedQuestions />} />
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/subscribe" element={<Newsletter />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/learnchess" element={<Content />} />
        <Route path="/signin" element={<PublicRoute element={SignIn} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<PublicRoute element={Register} />} />

        {/* Protected Routes wrapped in Route */}
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        <Route path="/welcome" element={<PrivateRoute element={WelcomePage} />} />
        <Route path="/profile" element={<PrivateRoute element={Profile} />} />
        <Route path="/payment/:secret_token/:api_ref/:mode" element={<PrivateRoute element={Payment} />} />
      </Routes>

      {isDashboardRoute ? <ClassesFooter /> : <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  );
}
