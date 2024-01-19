import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      console.log('Token:', token);
      console.log('Sending reset request with token:', token);
      const response = await axios.post('https://password-reset-a41y.onrender.com/api/reset-password', 
      { password }, 
      { headers: { Authorization: `Bearer ${token}` }
     });
    
      setSuccessMessage(response.data.message); // Assuming the server sends a success message
      setErrorMessage(''); // Clear any previous error messages
    } catch (error) {
      console.error('Error in reset password request:', error)
      if (error.response.status === 403) {
        setErrorMessage('Invalid or expired token');
      } else {
        setErrorMessage(error.response ? error.response.data.message : error.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      {successMessage && <p className="text-success">{successMessage}</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      {!successMessage && !errorMessage && (
        <>
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
        </>
      )}
    </div>
  );
};

export default ResetPassword;
