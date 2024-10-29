import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Oops! We've Lost Our Way</h1>
        <h2 className={styles.subtitle}>The Magic Map Is Blank</h2>
        <p className={styles.description}>
          It seems our magical map has gone blank! The story you're looking for might have flown away on a flying carpet, or perhaps it's playing hide and seek with us.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className={styles.homeButton}>
            Return to the Magical Homepage
          </Link>
        </motion.div>
      </motion.div>
      <motion.div 
        className={styles.illustration}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="300" height="300">
          <motion.path 
            d="M250 30C128.52 30 30 128.52 30 250s98.52 220 220 220 220-98.52 220-220S371.48 30 250 30zm0 400c-99.41 0-180-80.59-180-180S150.59 70 250 70s180 80.59 180 180-80.59 180-180 180z" 
            fill="#f582ae"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path 
            d="M250 140c-11.05 0-20 8.95-20 20v120c0 11.05 8.95 20 20 20s20-8.95 20-20V160c0-11.05-8.95-20-20-20zm0 200c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20z" 
            fill="#f582ae"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.circle
            cx="250"
            cy="250"
            r="50"
            fill="#8bd3dd"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default NotFound;