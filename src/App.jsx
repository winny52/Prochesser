import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import SignUp from './components/Signup'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import FrequentlyAskedQuestions from './components/FAQ'
import Footer from './components/Footer'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import HowItWorks from './components/Howitworks'
import ScrollToTop from './components/ScrollTop'
import Register from './classes/Register'
import SignIn from './classes/Signin'
import Dashboard from './classes/Dashboard'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/faqs" element={<FrequentlyAskedQuestions />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/subscribe" element ={<Newsletter/>} />
          <Route path="/how-it-works" element={<HowItWorks/>}/>
          <Route path="/start-learning" element={<Register/>}/>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
