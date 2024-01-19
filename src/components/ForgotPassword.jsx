// ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/forgot-password', { email });
      console.log(response.data); // Handle success, show a success message, etc.
    } catch (error) {
      console.error('Error sending forgot password request:', error.response ? error.response.data : error.message);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="mb-4 text-center">Forgot Password</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary btn-block" onClick={handleForgotPassword}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
