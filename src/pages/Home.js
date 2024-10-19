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
          <FeaturedStories />
        </section>
        
        <section className={styles.section}>
          <Categories />
        </section>
        
        <section className={styles.section}>
          <Testimonials />
        </section>
        
        <section className={styles.section}>
          <RecentBlogPosts />
        </section>
        
        <section className={styles.section}>
          <Newsletter />
        </section>
      </main>
    </div>
  );
};

export default Home;