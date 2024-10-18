import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaPaw, FaUsers, FaMagic } from 'react-icons/fa';
import styles from './Categories.module.css';

const CategoryCard = ({ title, description, image, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={`/category/${title.toLowerCase().replace(' ', '-')}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <Icon className={styles.icon} aria-hidden="true" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  </motion.div>
);

const Categories = () => {
  const categories = [
    { title: "Nature Stories", description: "Magical tales about trees, rivers, and mountains", image: "/images/nature-stories.jpg", icon: FaLeaf },
    { title: "Animal Tales", description: "Fun stories with clever and kind animals", image: "/images/animal-tales.jpg", icon: FaPaw },
    { title: "Friendship Adventures", description: "Exciting journeys of friends helping each other", image: "/images/friendship-adventures.jpg", icon: FaUsers },
    { title: "Magical Objects", description: "Stories about enchanted items with special powers", image: "/images/magical-objects.jpg", icon: FaMagic },
  ];

  return (
    <section className={styles.categories} id="categories">
      <h2>Explore Wonderful Stories</h2>
      <p className={styles.subtitle}>Dive into amazing Indonesian tales!</p>
      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </motion.div>
    </section>
  );
};

export default Categories;