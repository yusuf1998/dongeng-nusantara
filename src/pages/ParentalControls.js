import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ParentalControls.module.css';

const ParentalControls = () => {
  const [timeLimit, setTimeLimit] = useState(60);
  const [contentFilter, setContentFilter] = useState('moderate');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Settings saved:', { timeLimit, contentFilter });
  };

  return (
    <motion.div 
      className={styles.parentalControls}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Parental Controls</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="timeLimit">Daily Time Limit (minutes):</label>
          <input 
            type="number" 
            id="timeLimit" 
            value={timeLimit} 
            onChange={(e) => setTimeLimit(e.target.value)}
            min="0"
            max="240"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contentFilter">Content Filter Level:</label>
          <select 
            id="contentFilter" 
            value={contentFilter} 
            onChange={(e) => setContentFilter(e.target.value)}
          >
            <option value="strict">Strict</option>
            <option value="moderate">Moderate</option>
            <option value="relaxed">Relaxed</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Save Settings</button>
      </form>
    </motion.div>
  );
};

export default ParentalControls;