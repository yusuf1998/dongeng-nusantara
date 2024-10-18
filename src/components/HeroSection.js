import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSection.module.css';

// Array of background images for rotation
const backgroundImages = [
  `${process.env.PUBLIC_URL}/images/indonesian-landscape-bg.jpg`,
  `${process.env.PUBLIC_URL}/images/indonesian-culture-bg.jpg`,
  `${process.env.PUBLIC_URL}/images/indonesian-folklore-bg.jpg`
];

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <AnimatePresence>
        <motion.div
          key={currentBgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
        />
      </AnimatePresence>
      <div className={styles.backgroundOverlay} />
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.title}
        >
          Discover the Rich Heritage of Indonesian Folk Stories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.subtitle}
        >
          Explore captivating folk tales curated for children and families
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.cta}
        >
          <Link to="/stories" className={`${styles.button} ${styles.primary}`}>
            Start Reading
            <span className={styles.icon}>📖</span>
          </Link>
          <Link to="/latest" className={`${styles.button} ${styles.secondary}`}>
            Latest Stories
            <span className={styles.icon}>🆕</span>
          </Link>
        </motion.div>
      </div>
      <div className={styles.imageGallery}>
        {['wayang-kulit.jpg', 'batik-pattern.jpg', 'indonesian-landscape-bg.jpg'].map((img, index) => (
          <motion.img
            key={img}
            src={`${process.env.PUBLIC_URL}/images/${img}`}
            alt={`Indonesian Culture ${index + 1}`}
            className={styles.galleryImage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
          />
        ))}
      </div>
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        <span>Scroll to Explore</span>
        <span className={styles.scrollArrow}>↓</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;