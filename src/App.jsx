import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceDetailsSection from './components/ServiceDetailsSection';
import LocationSection from './components/LocationSection';
import NoticesSection from './components/NoticesSection';
import ContactBar from './components/ContactBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <main>
        <HeroSection />
        <ServiceDetailsSection />
        <LocationSection />
        <NoticesSection />
        <ContactBar />
      </main>
      <Footer />
    </div>
  );
}
