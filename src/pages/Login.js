import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Login.module.css';
import { FaUser, FaLock, FaMagic } from 'react-icons/fa';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Oops! Please enter your magical username and secret password.');
      return;
    }

    try {
      // Simulating a successful login
      onLogin({ username });
    } catch (err) {
      setError('Oh no! The magic spell failed. Please check your wizard credentials and try again.');
    }
  };

  return (
    <motion.div 
      className={styles.loginContainer}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Welcome to the Magical Realm!</h1>
      <motion.form 
        onSubmit={handleSubmit} 
        className={styles.form}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className={styles.inputGroup}>
          <label htmlFor="username">
            <FaUser className={styles.icon} /> Wizard Name
          </label>
          <input 
            id="username"
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your magical name" 
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">
            <FaLock className={styles.icon} /> Secret Spell
          </label>
          <input 
            id="password"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your secret spell" 
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <motion.button 
          type="submit" 
          className={styles.submitButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMagic className={styles.buttonIcon} /> Cast the Login Spell!
        </motion.button>
      </motion.form>
      <motion.p 
        className={styles.registerPrompt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        New to the magical world? <Link to="/register">Join the Wizarding Academy!</Link>
      </motion.p>
    </motion.div>
  );
}

export default Login;