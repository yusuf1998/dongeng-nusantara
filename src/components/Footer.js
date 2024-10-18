import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Newsletter subscription submitted for:', email);
    // Reset email input after submission
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About Dongeng Nusantara</h3>
          <p>Discover the rich tapestry of Indonesian folklore through our curated collection of traditional stories and legends.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
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
        </div>
        <div className={styles.footerSection}>
          <h3>Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Dongeng Nusantara. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;