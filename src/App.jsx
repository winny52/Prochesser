import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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

function App() {
  const location = useLocation();

  // Check if the current route starts with "/dashboard"
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {/* Conditionally render Navbar or Header based on the route */}
      {isDashboardRoute ? <Header /> : <Navbar />}

      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/faqs" element={<FrequentlyAskedQuestions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/subscribe" element={<Newsletter />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/learnchess" element={<Content />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>

      {/* Conditionally render Footer or ClassesFooter based on the route */}
      {isDashboardRoute ? <ClassesFooter /> : <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
