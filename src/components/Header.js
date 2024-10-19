import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaSun, FaMoon, FaStar } from 'react-icons/fa';

const Header = ({ isAuthenticated, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle(styles.darkMode);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isDarkMode ? styles.darkHeader : ''}`}>
      <Link to="/" className={styles.logo}>
        <FaStar className={styles.logoIcon} />
        <span>Dongeng Nusantara</span>
      </Link>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/stories" onClick={closeMenu}>Stories</Link></li>
          <li><Link to="/categories" onClick={closeMenu}>Categories</Link></li>
          <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </nav>
      {isAuthenticated ? (
        <div className={styles.userActions}>
          <Link to="/profile" className={styles.profileButton}>Profile</Link>
          <button onClick={onLogout} className={styles.logoutButton}>Logout</button>
        </div>
      ) : (
        <div className={styles.authButtons}>
          <Link to="/login" className={styles.loginButton}>Login</Link>
          <Link to="/register" className={styles.signupButton}>Sign Up</Link>
        </div>
      )}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <button 
        className={styles.darkModeToggle} 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;