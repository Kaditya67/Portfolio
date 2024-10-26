import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(ShowLoading());
    try {
      const response = await axios.post('/api/portfolio/admin-login', { username, password });
      if (response.data.success) {
        setError('');
        navigate('/admin'); // Navigate to '/admin' after successful login
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      setError('Failed to connect to server');
      console.error('Error logging in:', error);
    } finally {
      dispatch(HideLoading());
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
