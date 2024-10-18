import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Login.module.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      // Here you would typically send a request to your backend
      // For example:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password }),
      // });
      // const data = await response.json();
      // if (response.ok) {
      //   onLogin(data);
      // } else {
      //   throw new Error(data.message);
      // }

      // For now, we'll just simulate a successful login
      onLogin({ username });
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <motion.div 
      className={styles.loginContainer}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Welcome Back</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input 
            id="username"
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your username" 
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
      <p className={styles.registerPrompt}>
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
    </motion.div>
  );
}

export default Login;