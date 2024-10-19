import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Register.module.css';
import { FaUser, FaEnvelope, FaLock, FaLockOpen, FaWandMagicSparkles } from 'react-icons/fa6';

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
      setError('Oops! Please fill in all the magical fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Your magic spells don\'t match! Please try again.');
      return;
    }

    try {
      console.log('New wizard registered', { username, email, password });
      alert('Hooray! You\'ve joined the Magical Academy! Time to login and start your adventure!');
    } catch (err) {
      setError('Oh no! The magic spell fizzled. Please try again.');
    }
  };

  return (
    <motion.div 
      className={styles.registerContainer}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Join the Magical Academy!</h1>
      <motion.form 
        onSubmit={handleSubmit} 
        className={styles.form}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className={styles.inputGroup}>
          <label htmlFor="username"><FaUser className={styles.icon} /> Wizard Name</label>
          <input 
            id="username"
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Choose your magical name" 
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email"><FaEnvelope className={styles.icon} /> Owl Post Address</label>
          <input 
            id="email"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Where should we send your owl?" 
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password"><FaLock className={styles.icon} /> Secret Spell</label>
          <input 
            id="password"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Create your secret spell" 
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword"><FaLockOpen className={styles.icon} /> Confirm Secret Spell</label>
          <input 
            id="confirmPassword"
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Repeat your secret spell" 
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
          <FaWandMagicSparkles className={styles.buttonIcon} /> Cast the Joining Spell!
        </motion.button>
      </motion.form>
      <motion.p 
        className={styles.loginPrompt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Already a wizard? <Link to="/login">Enter the Magic Portal here!</Link>
      </motion.p>
    </motion.div>
  );
}

export default Register;