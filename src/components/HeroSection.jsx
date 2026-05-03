import React from 'react';
import smaLogo from '../assets/images/sma-logo.png';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative bg-green-900 overflow-hidden"
    >
      {/* Background geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(201,168,76,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(201,168,76,0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Decorative hanging chains */}
      <div className="absolute top-0 left-[15%] w-px h-16 bg-gradient-to-b from-gold-500 to-transparent opacity-40" />
      <div className="absolute top-0 left-[85%] w-px h-16 bg-gradient-to-b from-gold-500 to-transparent opacity-40" />

      {/* Top gold border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 pt-10 pb-12 text-center">
        {/* Lantern decorations */}
        <div className="absolute top-6 left-4 sm:left-8 animate-float">
          <LanternSVG className="w-10 h-16 sm:w-14 sm:h-20 text-gold-500 opacity-60" />
        </div>
        <div className="absolute top-6 right-4 sm:right-8 animate-float" style={{ animationDelay: '3s' }}>
          <LanternSVG className="w-8 h-14 sm:w-12 sm:h-18 text-gold-500 opacity-40" />
        </div>

        {/* Logo */}
        <div className="mb-5 animate-fade-in">
          <img
            src={smaLogo}
            alt="Strood Muslim Association Emblem"
            className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full ring-4 ring-gold-500/40 shadow-2xl"
            width="144"
            height="144"
          />
        </div>

        {/* Organization name */}
        <h2 className="font-serif text-gold-500 text-lg sm:text-xl font-semibold tracking-[0.15em] uppercase mb-3 animate-slide-up">
          Strood Muslim Association
        </h2>

        {/* Welcome tagline with star accents */}
        <p className="font-serif italic text-gold-300 text-base sm:text-lg mb-2 star-accent animate-slide-up"
           style={{ animationDelay: '0.15s' }}>
          Welcome to our
        </p>

        {/* Main title */}
        <h1
          className="font-serif text-cream-100 text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-tight mb-4 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Jummu'ah Service
        </h1>

        {/* Gold divider */}
        <div className="gold-divider mb-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <span className="text-gold-500 text-lg">✦</span>
        </div>

        {/* Sub-tagline */}
        <p
          className="font-sans text-cream-200/80 text-sm sm:text-base max-w-md mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          We are delighted to welcome you to our weekly congregational prayer.
        </p>
      </div>

      {/* Bottom gradient transition to cream */}
      <div className="h-16 bg-gradient-to-b from-green-900 to-cream-100" />
    </section>
  );
}

/* Decorative Lantern SVG */
function LanternSVG({ className }) {
  return (
    <svg viewBox="0 0 48 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chain */}
      <line x1="24" y1="0" x2="24" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      {/* Top cap */}
      <path d="M18 18 H30 L32 22 H16 Z" fill="currentColor" opacity="0.8" />
      {/* Dome */}
      <path d="M16 22 Q16 16, 24 14 Q32 16, 32 22" fill="currentColor" opacity="0.3" />
      {/* Body */}
      <path d="M16 22 C14 30, 14 50, 18 58 L30 58 C34 50, 34 30, 32 22" fill="currentColor" opacity="0.4" />
      {/* Inner glow */}
      <ellipse cx="24" cy="40" rx="6" ry="12" fill="currentColor" opacity="0.2" />
      {/* Glass panels */}
      <line x1="20" y1="24" x2="20" y2="56" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="28" y1="24" x2="28" y2="56" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      {/* Bottom */}
      <path d="M18 58 L20 64 Q24 68, 28 64 L30 58" fill="currentColor" opacity="0.7" />
      {/* Bottom tip */}
      <circle cx="24" cy="70" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
