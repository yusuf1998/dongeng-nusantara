import React from 'react';
import { motion } from 'framer-motion';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <motion.div 
      className={styles.privacyContainer}
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
        The Secret Scroll: Our Magical Privacy Policy
      </motion.h1>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2>The Enchanted Woods of Data Collection</h2>
        <p>As you wander through our magical realm, we collect only the most essential information to enhance your journey. This includes your name (or chosen magical alias), email address, and the tales you've enjoyed most.</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>The Wizard's Tower of Data Protection</h2>
        <p>We guard your information as fiercely as a dragon guards its treasure. Our team of expert wizards uses the most powerful spells and enchantments to keep your data safe from evil forces.</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>The Crystal Ball of Data Usage</h2>
        <p>We gaze into our crystal ball to use your information wisely. This helps us tailor your adventures, recommend new magical tales, and ensure our realm remains a joyful place for all young explorers.</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2>The Magical Scroll of Choices</h2>
        <p>You have the power to control your magical journey. At any time, you can update your information, change your preferences, or even erase your footprints from our enchanted lands.</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2>The Mystical Mirror of Third-Party Sharing</h2>
        <p>We only share your information with trusted allies who help us maintain our magical realm. We never sell your data to dark forces or unknown entities.</p>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2>The Enchanted Quill of Updates</h2>
        <p>As our magical world grows and changes, so too may this Secret Scroll. We'll notify you of any significant changes through magical notifications or mystical emails.</p>
      </motion.section>

      <motion.p 
        className={styles.contact}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        If you have any questions about our Secret Scroll, please send a magical message to our Council of Elders at privacy@dongengnusantara.com.
      </motion.p>
    </motion.div>
  );
};

export default PrivacyPolicy;