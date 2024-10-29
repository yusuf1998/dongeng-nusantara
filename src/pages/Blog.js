import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Blog.module.css';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const allPosts = [
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
    // Add more blog posts here...
  ];

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div 
      className={styles.blogContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.blogTitle}>Magical Stories from Nusantara</h1>
      <div className={styles.blogPosts}>
        {currentPosts.map((post, index) => (
          <motion.article 
            key={post.id} 
            className={styles.post}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={post.image} alt={post.title} className={styles.postImage} />
            <div className={styles.postContent}>
              <h2 className={styles.postTitle}>{post.title}</h2>
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
      <div className={styles.pagination}>
        {Array.from({ length: Math.ceil(allPosts.length / postsPerPage) }, (_, i) => (
          <motion.button
            key={i}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? styles.activePage : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {i + 1}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;