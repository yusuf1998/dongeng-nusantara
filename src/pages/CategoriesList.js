import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './CategoriesList.module.css';

const CategoriesList = () => {
  const categories = [
    { id: 1, name: 'Animal Tales', description: 'Fun stories featuring clever and kind animals', image: '/images/animal-tales.jpg', icon: '🐘' },
    { id: 2, name: 'Nature Stories', description: 'Magical tales about trees, rivers, and mountains', image: '/images/nature-stories.jpg', icon: '🌳' },
    { id: 3, name: 'Friendship Adventures', description: 'Exciting journeys of friends helping each other', image: '/images/friendship-adventures.jpg', icon: '🤝' },
    { id: 4, name: 'Magical Objects', description: 'Stories about enchanted items with special powers', image: '/images/magical-objects.jpg', icon: '✨' },
    { id: 5, name: 'Brave Heroes', description: 'Tales of courageous children doing great deeds', image: '/images/brave-heroes.jpg', icon: '🦸' },
    { id: 6, name: 'Funny Folktales', description: 'Hilarious stories that will make you laugh', image: '/images/funny-folktales.jpg', icon: '😂' },
  ];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = '/images/placeholder.jpg';
  };

  return (
    <motion.div 
      className={styles.categoriesContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Magical World of Indonesian Stories</h1>
      <p className={styles.subtitle}>Discover amazing tales from the beautiful islands of Indonesia</p>
      
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/category/${category.id}`} className={styles.categoryCard}>
              <div className={styles.categoryImageContainer}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className={styles.categoryImage}
                  onError={handleImageError}
                />
                <div className={styles.categoryIcon}>{category.icon}</div>
              </div>
              <div className={styles.categoryContent}>
                <h2 className={styles.categoryTitle}>{category.name}</h2>
                <p className={styles.categoryDescription}>{category.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoriesList;