import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedStories from '../components/FeaturedStories';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import RecentBlogPosts from '../components/RecentBlogPosts';
import styles from './Home.module.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Dongeng Nusantara - Discover Indonesian Folklore';
    // You can add more side effects here, such as fetching initial data
  }, []);

  return (
    <div className={styles.home}>
      <HeroSection />
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Stories</h2>
          <FeaturedStories />
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore Categories</h2>
          <Categories />
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Our Readers Say</h2>
          <Testimonials />
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Latest from Our Blog</h2>
          <RecentBlogPosts />
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stay Updated</h2>
          <Newsletter />
        </section>
      </main>
    </div>
  );
};

export default Home;