import React from 'react';
import styles from './FeaturedStories.module.css';

const StoryCard = ({ title, summary, rating, image }) => (
  <div className={styles.card}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{summary}</p>
    <div className={styles.rating}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
    <button className={styles.readMore}>Read More</button>
  </div>
);

const FeaturedStories = () => {
  const stories = [
    { title: "The Legend of Tangkuban Perahu", summary: "A tale of forbidden love and volcanic creation", rating: 4, image: "/images/tangkuban-perahu.jpg" },
    { title: "Timun Mas", summary: "A brave girl outwits a giant using magical items", rating: 5, image: "/images/timun-mas.jpg" },
    { title: "The Origin of Bali", summary: "How the island of Bali came to be", rating: 4, image: "/images/bali-origin.jpg" },
    { title: "Malin Kundang", summary: "The story of a son's betrayal and a mother's curse", rating: 4, image: "/images/malin-kundang.jpg" },
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