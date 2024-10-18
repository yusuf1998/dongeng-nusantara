import React from 'react';
import { motion } from 'framer-motion';
import styles from './KidsFunZone.module.css';

const KidsFunZone = () => {
  const activities = [
    { name: 'Coloring Game', icon: '🎨' },
    { name: 'Memory Match', icon: '🃏' },
    { name: 'Story Creator', icon: '📚' },
    { name: 'Puzzle Challenge', icon: '🧩' },
  ];

  return (
    <motion.div 
      className={styles.funZone}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Welcome to the Fun Zone! 🎉</h1>
      <p className={styles.subtitle}>Pick an activity and let's have some fun!</p>

      <div className={styles.activityGrid}>
        {activities.map((activity, index) => (
          <motion.div 
            key={index}
            className={styles.activityCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.activityIcon}>{activity.icon}</span>
            <h3>{activity.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default KidsFunZone;