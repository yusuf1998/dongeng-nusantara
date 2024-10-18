import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Dongeng Nusantara</div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#stories" onClick={toggleMenu}>Stories</a></li>
          <li><a href="#categories" onClick={toggleMenu}>Categories</a></li>
          <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
        </ul>
      </nav>
      <button className={styles.loginButton}>Login/Sign-up</button>
      <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;