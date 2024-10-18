import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Oops! Page Not Found</h2>
        <p className={styles.description}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className={styles.homeButton}>
          Go Back to Home
        </Link>
      </div>
      <div className={styles.illustration}>
        {/* You can add an SVG illustration or image here */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="300" height="300">
          <path d="M250 30C128.52 30 30 128.52 30 250s98.52 220 220 220 220-98.52 220-220S371.48 30 250 30zm0 400c-99.41 0-180-80.59-180-180S150.59 70 250 70s180 80.59 180 180-80.59 180-180 180z" fill="#3498db"/>
          <path d="M250 140c-11.05 0-20 8.95-20 20v120c0 11.05 8.95 20 20 20s20-8.95 20-20V160c0-11.05-8.95-20-20-20zm0 200c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20z" fill="#3498db"/>
        </svg>
      </div>
    </div>
  );
}

export default NotFound;