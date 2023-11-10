// ResetPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/reset-password', { password }, { headers: { Authorization: token } });
      console.log(response.data); // Handle success, show a success message, redirect, etc.
    } catch (error) {
      console.error('Error resetting password:', error.response ? error.response.data : error.message);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleResetPassword}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
