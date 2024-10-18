import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Testimonials.module.css';

const Testimonial = ({ name, quote, avatar, role }) => (
  <motion.div
    className={styles.testimonial}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
    <img src={avatar} alt={name} className={styles.avatar} />
    <blockquote className={styles.quote}>{quote}</blockquote>
    <footer className={styles.footer}>
      <cite className={styles.name}>{name}</cite>
      <span className={styles.role}>{role}</span>
    </footer>
  </motion.div>
);

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    { 
      name: "Sarah Kusuma", 
      quote: "Dongeng Nusantara has brought our family closer through storytelling. It's a magical way to connect with our heritage.",
      avatar: "/images/avatar-sarah.jpg",
      role: "Parent & Cultural Enthusiast"
    },
    { 
      name: "Budi Tanjung", 
      quote: "These stories have rekindled my love for Indonesian folklore. Each tale is a journey through our rich cultural tapestry.",
      avatar: "/images/avatar-budi.jpg",
      role: "Literature Professor"
    },
    { 
      name: "Rina Lestari", 
      quote: "As an educator, I find these tales perfect for teaching cultural values. They're engaging, insightful, and beautifully crafted.",
      avatar: "/images/avatar-rina.jpg",
      role: "Elementary School Teacher"
    },
    { 
      name: "Agus Pratama", 
      quote: "Dongeng Nusantara has helped me rediscover the wisdom in our traditional stories. It's a treasure trove of inspiration.",
      avatar: "/images/avatar-agus.jpg",
      role: "Aspiring Writer"
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>What Our Readers Say</h2>
      <div className={styles.carousel}>
        <AnimatePresence mode="wait">
          <Testimonial key={currentTestimonial} {...testimonials[currentTestimonial]} />
        </AnimatePresence>
      </div>
      <div className={styles.navigation}>
        <button onClick={prevTestimonial} className={styles.navButton} aria-label="Previous testimonial">
          &larr;
        </button>
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentTestimonial ? styles.active : ''}`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button onClick={nextTestimonial} className={styles.navButton} aria-label="Next testimonial">
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;