
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

// Set your desired base URL here
const baseUrl = "https://passwordreset-front.netlify.app";


const App = () => {
  return (
   
    <Router basename={baseUrl}>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};


export default App;
