import React, { useState } from 'react';
import styles from './AboutUs.module.css';
import { motion } from 'framer-motion';

function AboutUs() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      title: "Our Mission",
      content: "At Dongeng Nusantara, we are dedicated to preserving and sharing the rich tapestry of Indonesian folklore. Our mission is to bring the magical world of Indonesian stories to a global audience, fostering cultural understanding and appreciation.",
      icon: "🌟"
    },
    {
      title: "Our Vision",
      content: "We envision a world where the diverse stories of Indonesia are celebrated, cherished, and passed down to future generations. Through our platform, we aim to create a digital sanctuary for these timeless tales.",
      icon: "🔭"
    },
    {
      title: "Our Team",
      content: (
        <>
          <p>Dongeng Nusantara is brought to you by a passionate team of storytellers, researchers, and technologists. We combine traditional knowledge with modern technology to create an immersive storytelling experience.</p>
          <ul>
            <li>Putri Sari - Founder & Chief Storyteller</li>
            <li>Budi Prakoso - Head of Research</li>
            <li>Rina Wijaya - Lead Developer</li>
            <li>Ahmad Yusuf - Cultural Liaison</li>
          </ul>
        </>
      ),
      icon: "👥"
    },
    {
      title: "Our Values",
      content: (
        <ul>
          <li>Cultural Preservation</li>
          <li>Educational Empowerment</li>
          <li>Inclusive Storytelling</li>
          <li>Digital Innovation</li>
        </ul>
      ),
      icon: "🎭"
    }
  ];

  return (
    <motion.div 
      className={styles.aboutContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>About Dongeng Nusantara</h1>
      
      {sections.map((section, index) => (
        <motion.section 
          key={index}
          className={styles.section}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <h2 onClick={() => toggleSection(index)}>
            <span className={styles.icon}>{section.icon}</span>
            {section.title}
            <span className={styles.expandIcon}>{expandedSection === index ? '▲' : '▼'}</span>
          </h2>
          {expandedSection === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={styles.content}
            >
              {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
            </motion.div>
          )}
        </motion.section>
      ))}

      <section className={styles.contactSection}>
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Whether you have a story to share, a question to ask, or just want to say hello, feel free to reach out to us.</p>
        <motion.a 
          href="mailto:info@dongengnusantara.com"
          className={styles.contactButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </section>
    </motion.div>
  );
}

export default AboutUs;