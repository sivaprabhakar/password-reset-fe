import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://password-reset-a41y.onrender.com/api/login', { email, password });
      console.log(response.data); // Handle success, store the token, redirect, etc.
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-4 text-center">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
            Log In
          </button>
          <div className="mt-3 text-center">
            <Link to="/signup" className="btn btn-secondary">
              Sign Up
            </Link>
          </div>
          <div className="mt-3 text-center">
            <Link to="/forgot-password" className="btn btn-link">
              Forgot Password
            </Link>
          </div>
          <div className="mt-3 text-center">
            <Link to="/reset-password/:token" className="btn btn-link">
              Reset Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
