import React, { useState } from 'react';
import styles from './AboutUs.module.css';
import { motion, AnimatePresence } from 'framer-motion';

function AboutUs() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      title: "Our Magic Mission",
      content: "At Dongeng Nusantara, we're on a magical quest to share the wonderful stories of Indonesia with kids all around the world! We want to sprinkle the magic of Indonesian tales everywhere, helping everyone understand and love our amazing culture.",
      icon: "🧙‍♂️"
    },
    {
      title: "Our Dreamy Vision",
      content: "We dream of a world where every child knows and loves the enchanting stories of Indonesia. Through our magical website, we're creating a special place where these timeless tales can live forever and ever!",
      icon: "🔮"
    },
    {
      title: "Our Fantastic Team",
      content: (
        <>
          <p>Dongeng Nusantara is brought to life by a team of magical storytellers, curious explorers, and tech wizards. We use our special powers to bring you the most exciting stories!</p>
          <ul>
            <li>Yusuf Habibi - Master Storyteller & Founder</li>
            <li>Astri Ifah - Chief Explorer of Tales</li>
            <li>Althaf Rasyafariq Habibi - Wizard of the Web</li>
          </ul>
        </>
      ),
      icon: "🧚‍♂️"
    },
    {
      title: "Our Treasure Chest of Values",
      content: (
        <ul>
          <li>Keeping Our Stories Alive Forever</li>
          <li>Learning Through Fun Adventures</li>
          <li>Stories for Every Little Hero</li>
          <li>Making Magic with Technology</li>
        </ul>
      ),
      icon: "🏴‍☠️"
    }
  ];

  return (
    <motion.div 
      className={styles.aboutContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Welcome to the Magical World of Dongeng Nusantara!</h1>
      
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
            <motion.span 
              className={styles.expandIcon}
              animate={{ rotate: expandedSection === index ? 180 : 0 }}
            >
              🔽
            </motion.span>
          </h2>
          <AnimatePresence>
            {expandedSection === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.content}
              >
                {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      ))}

      <section className={styles.contactSection}>
        <h2>Send Us a Magic Message!</h2>
        <p>Do you have a fantastic story to share? A curious question to ask? Or just want to say "Halo"? Wave your magic wand and get in touch with us!</p>
        <motion.a 
          href="mailto:magic@dongengnusantara.com"
          className={styles.contactButton}
          whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
          whileTap={{ scale: 0.95 }}
        >
          Cast Your Message Spell!
        </motion.a>
      </section>
    </motion.div>
  );
}

export default AboutUs;