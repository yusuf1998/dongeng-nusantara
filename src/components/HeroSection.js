import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSection.module.css';

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
    }, 5000);

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
          Magical Tales of Indonesia
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.subtitle}
        >
          Join us on an adventure through enchanting folk stories!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.cta}
        >
          <Link to="/stories" className={`${styles.button} ${styles.primary}`}>
            Start Your Journey
            <span className={styles.icon}>🚀</span>
          </Link>
          <Link to="/latest" className={`${styles.button} ${styles.secondary}`}>
            New Adventures
            <span className={styles.icon}>✨</span>
          </Link>
        </motion.div>
      </div>
      <div className={styles.imageGallery}>
        {['wayang-kulit.jpg', 'batik-pattern.jpg', 'indonesian-landscape-bg.jpg'].map((img, index) => (
          <motion.div
            key={img}
            className={styles.galleryImageWrapper}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/${img}`}
              alt={`Indonesian Culture ${index + 1}`}
              className={styles.galleryImage}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        <span>Scroll for More Magic</span>
        <span className={styles.scrollArrow}>🌟</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;