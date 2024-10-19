import React, { useState } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
    console.log('Form submitted:', formData);
    alert('Hooray! Your magical message has been sent! We will get back to you faster than a flying carpet! 🧞‍♂️✨');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div 
      className={styles.contactContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Send Us a Magical Message!</h1>
      <p className={styles.subtitle}>Do you have a question about our enchanting stories? Want to share your own tale? Or just want to say "Abracadabra"? We're all ears (and maybe a few magical creatures too)!</p>
      
      <div className={styles.contactWrapper}>
        <motion.form 
          onSubmit={handleSubmit} 
          className={styles.contactForm}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Magical Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g. Aladdin, Cinderella, Harry Potter"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Owl Post Address (Email)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="wizard@magickingdom.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Your Enchanted Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Once upon a time..."
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className={styles.submitButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cast Your Message Spell! 🪄
          </motion.button>
        </motion.form>

        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2>Find Our Magic Castle</h2>
          <p><FaEnvelope /> <strong>Magic Scroll (Email):</strong> spells@dongengnusantara.com</p>
          <p><FaPhone /> <strong>Crystal Ball (Phone):</strong> +62 123 MAGIC</p>
          <p><FaMapMarkerAlt /> <strong>Enchanted Location:</strong> 123 Fairytale Lane, Wonderland, Indonesia</p>
          <div className={styles.socialLinks}>
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}><FaFacebook /> Facebook</motion.a>
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}><FaTwitter /> Twitter</motion.a>
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}><FaInstagram /> Instagram</motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;