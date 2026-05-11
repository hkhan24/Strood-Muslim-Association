import React from 'react';
import smaLogo from '../assets/images/sma-logo.png';
import { siteConfig } from '../siteConfig';

/* ──────────────────────────── Floating Gold Particles ──────────────────────────── */
function Particles() {
  // Generate a fixed set of particles with varied positions & timing
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 5.3) % 90}%`,
    size: 2 + (i % 4),
    duration: 10 + (i % 8) * 2,
    delay: (i * 1.7) % 12,
    opacity: 0.3 + (i % 5) * 0.12,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────── Decorative Geometric Rings ──────────────────────── */
function GeometricRings() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large rotating octagon */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 border border-gold-500/[0.06] rounded-full animate-rotate-slow"
        style={{ animationDuration: '100s' }}
      />
      <div
        className="absolute -top-24 -right-24 w-80 h-80 border border-gold-500/[0.04] rounded-full animate-rotate-slow"
        style={{ animationDuration: '140s', animationDirection: 'reverse' }}
      />
      {/* Bottom-left rings */}
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 border border-gold-500/[0.05] rounded-full animate-rotate-slow"
        style={{ animationDuration: '120s', animationDirection: 'reverse' }}
      />
      <div
        className="absolute -bottom-28 -left-28 w-80 h-80 border border-gold-500/[0.03] rounded-full animate-rotate-slow"
        style={{ animationDuration: '160s' }}
      />
    </div>
  );
}

/* ──────────────────────────── Lantern SVG ──────────────────────────── */
function LanternSVG({ className }) {
  return (
    <svg viewBox="0 0 48 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="24" y1="0" x2="24" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M18 18 H30 L32 22 H16 Z" fill="currentColor" opacity="0.8" />
      <path d="M16 22 Q16 16, 24 14 Q32 16, 32 22" fill="currentColor" opacity="0.3" />
      <path d="M16 22 C14 30, 14 50, 18 58 L30 58 C34 50, 34 30, 32 22" fill="currentColor" opacity="0.4" />
      <ellipse cx="24" cy="40" rx="6" ry="12" fill="currentColor" opacity="0.2" />
      <line x1="20" y1="24" x2="20" y2="56" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="28" y1="24" x2="28" y2="56" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M18 58 L20 64 Q24 68, 28 64 L30 58" fill="currentColor" opacity="0.7" />
      <circle cx="24" cy="70" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/* ──────────────────────────── Hero Section ──────────────────────────── */
export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center bg-green-950 overflow-hidden"
    >
      {/* Geometric pattern background */}
      <div className="absolute inset-0 geometric-pattern opacity-100" />

      {/* Radial gradient overlays for depth */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 50% 100%, rgba(13,40,24,0.9) 0%, transparent 70%),
          radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(7,26,16,0.5) 100%)
        `
      }} />

      {/* Geometric rings */}
      <GeometricRings />

      {/* Floating particles */}
      <Particles />

      {/* Lanterns */}
      <div className="absolute top-16 left-[8%] sm:left-[12%] animate-float">
        <LanternSVG className="w-10 h-16 sm:w-14 sm:h-22 text-gold-500 opacity-30" />
      </div>
      <div className="absolute top-12 right-[8%] sm:right-[12%] animate-float" style={{ animationDelay: '3s' }}>
        <LanternSVG className="w-8 h-14 sm:w-12 sm:h-20 text-gold-500 opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Logo with glow */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            {/* Glow behind logo */}
            <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-2xl scale-125 animate-pulse-soft" />
            <img
              src={smaLogo}
              alt={`${siteConfig.name} Emblem`}
              className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full
                         ring-2 ring-gold-500/30 shadow-2xl"
              width="160"
              height="160"
            />
          </div>
        </div>

        {/* Organization name */}
        <h2 className="font-serif text-gold-500 text-base sm:text-lg font-semibold
                       tracking-[0.2em] uppercase mb-2 animate-slide-up opacity-0"
            style={{ animationFillMode: 'forwards' }}>
          {siteConfig.name}
        </h2>

        {/* EST badge */}
        <p className="text-cream-300/40 text-[0.65rem] tracking-[0.3em] uppercase mb-6
                      animate-slide-up opacity-0"
           style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          EST. {siteConfig.established}
        </p>

        {/* Gold divider */}
        <div className="gold-divider mb-6 animate-slide-up opacity-0"
             style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="text-gold-500 text-lg">✦</span>
        </div>

        {/* Main tagline */}
        <h1
          className="font-serif text-cream-100 text-[2.2rem] sm:text-[3.2rem] lg:text-[4rem]
                     font-bold leading-[1.1] mb-5 animate-slide-up opacity-0"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          {siteConfig.tagline}
        </h1>

        {/* Subtitle */}
        <p
          className="font-sans text-cream-200/60 text-sm sm:text-base max-w-lg mx-auto
                     leading-relaxed mb-10 animate-slide-up opacity-0"
          style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
        >
          {siteConfig.subtitle}
        </p>

        {/* CTA scroll indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-gold-500/50 no-underline
                     transition-all duration-300 hover:text-gold-400 animate-slide-up opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          aria-label="Scroll down to learn more"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.2em] font-sans font-medium">Discover More</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-5 h-5 animate-float"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-100 to-transparent" />
    </section>
  );
}
