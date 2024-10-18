import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const Testimonial = ({ name, quote, avatar, isActive }) => (
  <div className={`${styles.testimonial} ${isActive ? styles.active : ''}`}>
    <img src={avatar} alt={name} className={styles.avatar} />
    <p className={styles.quote}>{quote}</p>
    <p className={styles.name}>{name}</p>
  </div>
);

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    { name: "Sarah K.", quote: "Dongeng Nusantara has brought our family closer through storytelling.", avatar: "path/to/avatar1.jpg" },
    { name: "Budi T.", quote: "These stories have rekindled my love for Indonesian folklore.", avatar: "path/to/avatar2.jpg" },
    { name: "Rina L.", quote: "As an educator, I find these tales perfect for teaching cultural values.", avatar: "path/to/avatar3.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.testimonials}>
      <h2>What Our Readers Say</h2>
      <div className={styles.carousel}>
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            {...testimonial}
            isActive={index === currentTestimonial}
          />
        ))}
      </div>
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
    </section>
  );
};

export default Testimonials;