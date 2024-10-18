import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedStories from './components/FeaturedStories';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturedStories />
        <Categories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;