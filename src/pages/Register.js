import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Register.module.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Here you would typically send a request to your backend
      // For example:
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, email, password }),
      // });
      // const data = await response.json();
      // if (response.ok) {
      //   // Handle successful registration
      // } else {
      //   throw new Error(data.message);
      // }

      // For now, we'll just log the data
      console.log('Register submitted', { username, email, password });
      alert('Registration successful! Please log in.');
      // Redirect to login page or clear form
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <motion.div 
      className={styles.registerContainer}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Create an Account</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input 
            id="username"
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Choose a username" 
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
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
            placeholder="Create a password" 
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            id="confirmPassword"
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm your password" 
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.submitButton}>Register</button>
      </form>
      <p className={styles.loginPrompt}>
        Already have an account? <Link to="/login">Log in here</Link>
      </p>
    </motion.div>
  );
}

export default Register;