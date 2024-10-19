import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaPaw, FaUsers, FaMagic } from 'react-icons/fa';
import styles from './Categories.module.css';

const CategoryCard = ({ title, description, image, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={`/category/${title.toLowerCase().replace(' ', '-')}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <motion.div 
          className={styles.iconWrapper}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className={styles.icon} aria-hidden="true" />
        </motion.div>
      </div>
      <div className={styles.content}>
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
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Wonderful Stories
      </motion.h2>
      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Dive into amazing Indonesian tales!
      </motion.p>
      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Categories;