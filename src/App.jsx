import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ServiceDetailsSection from './components/ServiceDetailsSection';
import VisionSection from './components/VisionSection';
import LocationSection from './components/LocationSection';
import NoticesSection from './components/NoticesSection';
import ContactBar from './components/ContactBar';
import Footer from './components/Footer';

export default function App() {
  // Scroll-triggered reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all elements with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ServiceDetailsSection />
        <VisionSection />
        <LocationSection />
        <NoticesSection />
        <ContactBar />
      </main>
      <Footer />
    </div>
  );
}
