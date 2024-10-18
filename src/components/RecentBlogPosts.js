import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './RecentBlogPosts.module.css';

const RecentBlogPosts = () => {
  const recentPosts = [
    { 
      id: 1, 
      title: 'The Origins of Wayang Kulit', 
      excerpt: 'Discover the ancient art of shadow puppetry and its significance in Indonesian culture. Learn about the intricate craftsmanship and storytelling traditions that have been passed down through generations.',
      slug: 'origins-of-wayang-kulit', 
      date: '2023-05-15',
      image: '/images/wayang-kulit.jpg',
      readTime: '5 min read'
    },
    { 
      id: 2, 
      title: 'Legends of Mount Bromo', 
      excerpt: 'Explore the myths surrounding East Java\'s iconic volcano. Uncover the tales of brave heroes, star-crossed lovers, and divine interventions that have shaped the cultural landscape of the Tengger people.',
      slug: 'legends-of-mount-bromo', 
      date: '2023-05-10',
      image: '/images/mount-bromo.jpg',
      readTime: '7 min read'
    },
    { 
      id: 3, 
      title: 'The Tale of Sangkuriang', 
      excerpt: 'Uncover the tragic love story behind West Java\'s landscape. Delve into this Sundanese legend that explains the formation of Tangkuban Perahu mountain and its connection to human emotions and desires.',
      slug: 'tale-of-sangkuriang', 
      date: '2023-05-05',
      image: '/images/tangkuban-perahu.jpg',
      readTime: '6 min read'
    },
  ];

  return (
    <section className={styles.recentPostsSection}>
      <h2 className={styles.sectionTitle}>Recent Blog Posts</h2>
      <div className={styles.recentPosts}>
        {recentPosts.map(post => (
          <motion.article 
            key={post.id} 
            className={styles.post}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={post.image} alt={post.title} className={styles.postImage} />
            <div className={styles.postContent}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postMeta}>
                <span className={styles.date}>{new Date(post.date).toLocaleDateString()}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </p>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                Read More
                <span className={styles.arrow}>&rarr;</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
      <Link to="/blog" className={styles.viewAllButton}>
        View All Posts
      </Link>
    </section>
  );
};

export default RecentBlogPosts;