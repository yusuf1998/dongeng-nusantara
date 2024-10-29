import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBookOpen, FaUser, FaCalendar } from 'react-icons/fa';
import ColorfulLoading from '../components/ColorfulLoading';
import styles from './StoryDetail.module.css';

function StoryDetail() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true);
      try {
        // In a real application, replace this with an actual API call
        const response = await new Promise((resolve) => 
          setTimeout(() => resolve({
            id: id,
            title: `The Magical Tale of Nusantara ${id}`,
            content: `Long ago, in the enchanted islands of Nusantara, there lived a brave young hero named Putra. He embarked on a journey through misty mountains and dense jungles, facing mythical creatures and solving ancient riddles. With the help of a wise old sage and a magical keris, Putra ultimately saved his village from an evil spirit, bringing peace and prosperity to the land.`,
            author: 'Dewi Lestari',
            publishDate: '2023-06-10',
            moral: 'Courage and wisdom can overcome any obstacle.',
            region: 'Java'
          }), 1000)
        );
        setStory(response);
      } catch (err) {
        setError('Oops! The story seems to have vanished into thin air. Please try again later!');
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) {
    return <ColorfulLoading />;
  }

  if (error) {
    return (
      <motion.div 
        className={styles.error}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {error}
      </motion.div>
    );
  }

  if (!story) {
    return (
      <motion.div 
        className={styles.error}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Oh no! This story seems to have disappeared into a magical portal. Try another one!
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={styles.storyContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className={styles.title}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {story.title}
      </motion.h1>
      <motion.div 
        className={styles.metadata}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p><FaUser /> <strong>Storyteller:</strong> {story.author}</p>
        <p><FaCalendar /> <strong>Published:</strong> {story.publishDate}</p>
        <p><FaBookOpen /> <strong>Region:</strong> {story.region}</p>
      </motion.div>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {story.content}
      </motion.div>
      <motion.div 
        className={styles.moral}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <strong>Moral of the story:</strong> {story.moral}
      </motion.div>
    </motion.div>
  );
}

export default StoryDetail;