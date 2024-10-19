import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './StoriesList.module.css';

function StoriesList() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call to fetch stories
    setTimeout(() => {
      const fetchedStories = [
        { id: 1, title: "The Legend of Tangkuban Perahu", region: "West Java", snippet: "A tale of forbidden love and volcanic creation...", icon: "🌋" },
        { id: 2, title: "Timun Mas", region: "Central Java", snippet: "A brave girl outwits a giant using magical items...", icon: "🥒" },
        { id: 3, title: "The Origin of Bali", region: "Bali", snippet: "How the island of Bali came to be...", icon: "🏝️" },
        { id: 4, title: "Malin Kundang", region: "West Sumatra", snippet: "The story of a son's betrayal and a mother's curse...", icon: "⛵" },
        { id: 5, title: "The Legend of Lake Toba", region: "North Sumatra", snippet: "A magical fish, a broken promise, and the creation of a lake...", icon: "🐠" },
      ];
      setStories(fetchedStories);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <motion.div 
             className={styles.loading}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5 }}
           >
             Loading magical stories...
           </motion.div>;
  }

  return (
    <motion.div 
      className={styles.storiesListContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Dongeng Nusantara</h1>
      <p className={styles.subtitle}>Embark on a magical journey through Indonesian folklore</p>
      
      <div className={styles.storiesList}>
        {stories.map((story, index) => (
          <motion.div 
            key={story.id} 
            className={styles.storyCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.storyIcon}>{story.icon}</div>
            <h2>{story.title}</h2>
            <p className={styles.region}>{story.region}</p>
            <p className={styles.snippet}>{story.snippet}</p>
            <Link to={`/story/${story.id}`} className={styles.readMore}>
              Start the Adventure
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default StoriesList;