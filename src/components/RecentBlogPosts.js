import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './RecentBlogPosts.module.css';

const RecentBlogPosts = () => {
  const recentPosts = [
    { 
      id: 1, 
      title: 'The Magical World of Wayang Kulit', 
      excerpt: 'Step into the enchanting world of shadow puppets! Discover how these amazing stories come to life on a glowing screen.',
      slug: 'magical-wayang-kulit', 
      date: '2023-05-15',
      image: '/images/wayang-kulit.jpg',
      readTime: '5 min read'
    },
    { 
      id: 2, 
      title: 'Brave Heroes of Mount Bromo', 
      excerpt: 'Join us on an exciting adventure to the fiery Mount Bromo! Meet courageous heroes and magical creatures in this thrilling tale.',
      slug: 'heroes-of-mount-bromo', 
      date: '2023-05-10',
      image: '/images/mount-bromo.jpg',
      readTime: '7 min read'
    },
    { 
      id: 3, 
      title: 'Sangkuriang\'s Amazing Journey', 
      excerpt: 'Embark on a fantastic voyage with Sangkuriang! Learn how his incredible story shaped the beautiful landscapes we see today.',
      slug: 'sangkuriang-journey', 
      date: '2023-05-05',
      image: '/images/tangkuban-perahu.jpg',
      readTime: '6 min read'
    },
  ];

  return (
    <section className={styles.recentPostsSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Exciting New Stories!
      </motion.h2>
      <div className={styles.recentPosts}>
        {recentPosts.map((post, index) => (
          <motion.article 
            key={post.id} 
            className={styles.post}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div className={styles.postImageWrapper}>
              <img src={post.image} alt={post.title} className={styles.postImage} />
            </div>
            <div className={styles.postContent}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postMeta}>
                <span className={styles.date}>{new Date(post.date).toLocaleDateString()}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </p>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                Read More
                <motion.span 
                  className={styles.arrow}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/blog" className={styles.viewAllButton}>
          Discover More Stories!
        </Link>
      </motion.div>
    </section>
  );
};

export default RecentBlogPosts;