import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './StoriesList.module.css';

function StoriesList() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call to fetch stories
    setTimeout(() => {
      const fetchedStories = [
        { id: 1, title: "The Legend of Tangkuban Perahu", region: "West Java", snippet: "A tale of forbidden love and volcanic creation..." },
        { id: 2, title: "Timun Mas", region: "Central Java", snippet: "A brave girl outwits a giant using magical items..." },
        { id: 3, title: "The Origin of Bali", region: "Bali", snippet: "How the island of Bali came to be..." },
        { id: 4, title: "Malin Kundang", region: "West Sumatra", snippet: "The story of a son's betrayal and a mother's curse..." },
        { id: 5, title: "The Legend of Lake Toba", region: "North Sumatra", snippet: "A magical fish, a broken promise, and the creation of a lake..." },
      ];
      setStories(fetchedStories);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading stories...</div>;
  }

  return (
    <div className={styles.storiesListContainer}>
      <h1 className={styles.title}>Dongeng Nusantara</h1>
      <p className={styles.subtitle}>Explore the rich tapestry of Indonesian folklore</p>
      
      <div className={styles.storiesList}>
        {stories.map((story) => (
          <div key={story.id} className={styles.storyCard}>
            <h2>{story.title}</h2>
            <p className={styles.region}>{story.region}</p>
            <p className={styles.snippet}>{story.snippet}</p>
            <Link to={`/story/${story.id}`} className={styles.readMore}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoriesList;