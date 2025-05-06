import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make the login API request
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      // Save the token and role in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role); // Store role here
      
      // Clear any errors and redirect to dashboard
      setError('');
      navigate('/dashboard'); // Redirect to /dashboard after successful login
    } catch (err) {
      // Improved error handling
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-form">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
