import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoriesList.module.css';

const CategoriesList = () => {
  const categories = [
    { id: 1, name: 'Animal Tales', description: 'Fun stories featuring clever and kind animals', image: '/images/animal-tales.jpg' },
    { id: 2, name: 'Nature Stories', description: 'Magical tales about trees, rivers, and mountains', image: '/images/nature-stories.jpg' },
    { id: 3, name: 'Friendship Adventures', description: 'Exciting journeys of friends helping each other', image: '/images/friendship-adventures.jpg' },
    { id: 4, name: 'Magical Objects', description: 'Stories about enchanted items with special powers', image: '/images/magical-objects.jpg' },
    { id: 5, name: 'Brave Heroes', description: 'Tales of courageous children doing great deeds', image: '/images/brave-heroes.jpg' },
    { id: 6, name: 'Funny Folktales', description: 'Hilarious stories that will make you laugh', image: '/images/funny-folktales.jpg' },
  ];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = '/images/placeholder.jpg';
  };

  return (
    <div className={styles.categoriesContainer}>
      <h1 className={styles.title}>Magical World of Indonesian Stories</h1>
      <p className={styles.subtitle}>Discover amazing tales from the beautiful islands of Indonesia</p>
      
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id} className={styles.categoryCard}>
            <div className={styles.categoryImageContainer}>
              <img 
                src={category.image} 
                alt={category.name}
                className={styles.categoryImage}
                onError={handleImageError}
              />
            </div>
            <div className={styles.categoryContent}>
              <h2 className={styles.categoryTitle}>{category.name}</h2>
              <p className={styles.categoryDescription}>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;