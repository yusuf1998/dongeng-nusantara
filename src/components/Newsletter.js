import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement newsletter subscription logic here
    // This is a mock implementation. Replace with actual API call in production.
    if (email.includes('@')) {
      console.log('Subscribing email:', email);
      setMessage('Thank you for subscribing!');
      setIsError(false);
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
      setIsError(true);
    }
  };

  return (
    <div className={styles.newsletter}>
      <h3>Subscribe to Our Newsletter</h3>
      <p>Stay updated with our latest stories and folklore insights!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && (
        <p className={isError ? styles.errorMessage : styles.successMessage}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Newsletter;