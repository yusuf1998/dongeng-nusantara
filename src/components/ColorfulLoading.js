import React from 'react';
import { motion } from 'framer-motion';
import styles from './ColorfulLoading.module.css';

const ColorfulLoading = () => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];

  return (
    <div className={styles.loadingContainer}>
      <h2 className={styles.loadingText}>Loading Fun...</h2>
      <div className={styles.dotsContainer}>
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className={styles.dot}
            style={{ backgroundColor: color }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorfulLoading;