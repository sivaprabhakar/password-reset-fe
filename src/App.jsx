
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';




const App = () => {
  return (
   
    <Router >
      <Routes>
        
        <Route path="/" element={<Login />} />
     
        <Route path="/signup" element={<Signup />} />
        <Route path="/Forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};


export default App;
