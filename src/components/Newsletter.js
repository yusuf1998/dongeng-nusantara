import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      console.log('Subscribing email:', email);
      setMessage('Yay! You\'re now part of our magical story circle!');
      setIsError(false);
      setEmail('');
    } else {
      setMessage('Oops! That doesn\'t look like a proper email. Can you check it again?');
      setIsError(true);
    }
  };

  return (
    <motion.div 
      className={styles.newsletter}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={styles.title}>Join Our Magical Story Circle!</h3>
      <p className={styles.description}>Be the first to hear about new adventures and folkore treasures!</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <motion.input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your magical email address"
          required
          className={styles.input}
          whileFocus={{ scale: 1.05 }}
        />
        <motion.button 
          type="submit" 
          className={styles.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Circle
        </motion.button>
      </form>
      {message && (
        <motion.p 
          className={isError ? styles.errorMessage : styles.successMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Newsletter;