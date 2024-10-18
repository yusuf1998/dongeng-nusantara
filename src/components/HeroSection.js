import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const handleStartReading = () => {
    // Implement start reading functionality
    console.log('Start Reading clicked');
  };

  const handleLatestStories = () => {
    // Implement latest stories functionality
    console.log('Latest Stories clicked');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Discover the Rich Heritage of Indonesian Folk Stories</h1>
        <p>Explore captivating folk tales curated for children and families</p>
        <div className={styles.cta}>
          <button className={styles.primary} onClick={handleStartReading}>
            Start Reading
          </button>
          <button className={styles.secondary} onClick={handleLatestStories}>
            Latest Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;