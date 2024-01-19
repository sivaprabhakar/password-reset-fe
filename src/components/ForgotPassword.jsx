import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('https://password-reset-a41y.onrender.com/api/forgot-password', { email });
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="mb-4 text-center">Forgot Password</h2>
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
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
