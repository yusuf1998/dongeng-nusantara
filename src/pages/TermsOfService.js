import React from 'react';
import { motion } from 'framer-motion';
import styles from './TermsOfService.module.css';

const TermsOfService = () => {
  return (
    <motion.div 
      className={styles.termsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className={styles.title}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Rules of Magic: Our Enchanted Terms of Service
      </motion.h1>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2>The Golden Rule of Kindness</h2>
        <p>In our magical realm, we treat everyone with kindness and respect. Be nice to other adventurers, and they'll be nice to you!</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>The Spell of Truth</h2>
        <p>Always be honest in our kingdom. Use your real age when signing up, and never pretend to be someone you're not.</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>The Shield of Privacy</h2>
        <p>Keep your personal information safe like a treasure. Don't share your password or personal details with anyone, not even your best friend!</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2>The Wand of Responsibility</h2>
        <p>Use our magical website responsibly. Don't post anything mean, scary, or inappropriate. If you see something that doesn't feel right, tell a grown-up or our wizard moderators right away.</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2>The Scroll of Content</h2>
        <p>All the stories, images, and magic on our website belong to us or our magical partners. You can enjoy them, but please don't copy or share them without permission.</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2>The Crystal Ball of Changes</h2>
        <p>Sometimes, we might need to update these rules. We'll let you know when we do, so make sure to check back here occasionally!</p>
      </motion.section>

      <motion.p 
        className={styles.contact}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        If you have any questions about our Rules of Magic, ask a grown-up to send a magical message to our Council of Elders at terms@dongengnusantara.com.
      </motion.p>
    </motion.div>
  );
};

export default TermsOfService;