import React from 'react';
import styles from './Categories.module.css';

const CategoryCard = ({ title, image }) => (
  <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
    <h3>{title}</h3>
  </div>
);

const Categories = () => {
  const categories = [
    { title: "Legends", image: "/images/legends.jpg" },
    { title: "Fables", image: "/images/fables.jpg" },
    { title: "Myths", image: "/images/myths.jpg" },
    { title: "Historical Tales", image: "/images/historical.jpg" },
  ];

  return (
    <section className={styles.categories} id="categories">
      <h2>Story Categories</h2>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;