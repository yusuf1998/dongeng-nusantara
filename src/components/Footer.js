import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted for:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <motion.div 
          className={styles.footerSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.sectionTitle}>About Our Magical Stories</h3>
          <p>Join us on a fantastic journey through Indonesia's enchanting tales and legends!</p>
        </motion.div>
        <motion.div 
          className={styles.footerSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className={styles.sectionTitle}>Adventure Map</h3>
          <ul className={styles.quickLinks}>
            <li><Link to="/about-us">Our Story</Link></li>
            <li><Link to="/privacy-policy">Secret Scroll</Link></li>
            <li><Link to="/terms-of-service">Rules of Magic</Link></li>
            <li><Link to="/blog">Storyteller's Corner</Link></li>
            <li><Link to="/contact">Send Us a Message in a Bottle</Link></li>
          </ul>
        </motion.div>
        <motion.div 
          className={styles.footerSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className={styles.sectionTitle}>Join Our Quest</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </motion.div>
        <motion.div 
          className={styles.footerSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className={styles.sectionTitle}>Join Our Magical Mailing List</h3>
          <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Your magical email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
            />
            <motion.button 
              type="submit"
              className={styles.subscribeButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cast the Spell
            </motion.button>
          </form>
        </motion.div>
      </div>
      <motion.div 
        className={styles.footerBottom}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>&copy; {new Date().getFullYear()} Dongeng Nusantara. All magical rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;