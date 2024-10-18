import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>We'd love to hear from you! Whether you have a question about our stories, want to contribute, or just want to say hello, feel free to reach out.</p>
      
      <div className={styles.contactWrapper}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>

        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> info@dongengnusantara.com</p>
          <p><strong>Phone:</strong> +62 123 456 7890</p>
          <p><strong>Address:</strong> 123 Storyteller Street, Jakarta, Indonesia</p>
          <div className={styles.socialLinks}>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;