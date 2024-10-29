import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import styles from './HeroSection.module.css';

const backgroundImages = [
  `${process.env.PUBLIC_URL}/images/indonesian-landscape-bg.jpg`,
  `${process.env.PUBLIC_URL}/images/indonesian-culture-bg.jpg`,
  `${process.env.PUBLIC_URL}/images/1-bg.jpg`
];

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentBgIndex((prevIndex) => 
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  return (
    <section 
      className={styles.hero}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
      <motion.div className={styles.parallaxOverlay} style={{ y }} />
      <motion.div className={styles.backgroundOverlay} style={{ opacity }} />
      <motion.div 
        className={styles.content}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <motion.h1
          className={styles.title}
          variants={titleVariants}
        >
          Dongeng Nusantara
        </motion.h1>
        <motion.h2
          className={styles.subtitle}
          variants={contentVariants}
        >
          Magical Tales of Indonesia
        </motion.h2>
        <motion.p
          className={styles.description}
          variants={contentVariants}
        >
          Embark on a journey through the enchanting stories of the Indonesian archipelago
        </motion.p>
        <motion.div variants={contentVariants}>
          <Link to="/stories" className={styles.ctaButton}>
            Explore Stories
            <motion.span 
              className={styles.icon}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📚
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        <span>Scroll for More Magic</span>
        <motion.svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={styles.scrollArrow}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <path 
            d="M20 5 L20 35 M10 25 L20 35 L30 25" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;