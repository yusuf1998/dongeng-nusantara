import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturedStories.module.css';

const StoryCard = ({ title, summary, rating, image, author }) => (
  <motion.div 
    className={styles.card}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={image} alt={title} className={styles.storyImage} />
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <p className={styles.author}>By {author}</p>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>★</span>
        ))}
      </div>
      <button className={styles.readMore}>Read More</button>
    </div>
  </motion.div>
);

const FeaturedStories = () => {
  const stories = [
    { 
      title: "The Legend of Tangkuban Perahu",
      author: "Sunda Folklore",
      summary: "A captivating tale of forbidden love between Sangkuriang and Dayang Sumbi, leading to the creation of the Tangkuban Perahu volcano.",
      rating: 4,
      image: "/images/tangkuban-perahu.jpg"
    },
    { 
      title: "Timun Mas",
      author: "Javanese Folklore",
      summary: "An exciting adventure of a brave girl who outsmarts a giant using magical items given by a hermit.",
      rating: 5,
      image: "/images/timun-mas.jpg"
    },
    { 
      title: "The Origin of Bali",
      author: "Balinese Legend",
      summary: "Discover the mystical story behind the creation of the beautiful island of Bali, involving gods and mythical creatures.",
      rating: 4,
      image: "/images/bali-origin.jpg"
    },
    { 
      title: "Malin Kundang",
      author: "Minangkabau Folklore",
      summary: "A poignant story about the consequences of a son's ingratitude and a mother's powerful curse.",
      rating: 4,
      image: "/images/malin-kundang.jpg"
    },
  ];

  return (
    <section className={styles.featured} id="featured-stories">
      <h2>Featured Stories</h2>
      <div className={styles.grid}>
        {stories.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedStories;