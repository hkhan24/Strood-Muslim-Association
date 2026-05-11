import React from 'react';
import { siteConfig } from '../siteConfig';

/* ──────── Vision Pillar Icons (SVG) ──────── */
const pillarIcons = {
  mosque: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 4 C24 4, 14 14, 14 22 L14 38 L34 38 L34 22 C34 14, 24 4, 24 4Z"
            stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M14 38 L8 38 L8 28 L14 24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M34 38 L40 38 L40 28 L34 24" stroke="currentColor" strokeWidth="1.5" />
      <rect x="20" y="30" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="2" x2="24" y2="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="1.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 38 C14 30, 18 26, 24 26 C30 26, 34 30, 34 38" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M4 38 C4 32, 7 28, 12 28" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="36" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M44 38 C44 32, 41 28, 36 28" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M24 44 L24 18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 18 C24 18, 16 22, 14 14 C12 6, 24 4, 24 12"
            stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M24 24 C24 24, 32 26, 34 18 C36 10, 24 10, 24 18"
            stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M24 30 C24 30, 18 32, 16 26"
            stroke="currentColor" strokeWidth="1.5" />
      <line x1="18" y1="44" x2="30" y2="44" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

function PillarCard({ icon, title, description, index }) {
  return (
    <div
      className="glass-card-light p-7 sm:p-8 text-center transition-all duration-500
                 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/10 group reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gold top accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent
                      -mt-7 sm:-mt-8 mb-7 sm:mb-8 -mx-7 sm:-mx-8 rounded-t-3xl" />

      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-green-900/5 flex items-center justify-center
                      text-green-800 group-hover:bg-green-900/10 group-hover:scale-110
                      transition-all duration-300">
        {pillarIcons[icon]}
      </div>

      {/* Title */}
      <h3 className="font-serif text-green-900 text-xl font-bold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-green-800/70 text-[0.85rem] leading-[1.8]">
        {description}
      </p>
    </div>
  );
}

export default function VisionSection() {
  const { vision } = siteConfig;

  return (
    <section
      id="vision"
      className="relative bg-cream-100 py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
      aria-labelledby="vision-heading"
    >
      {/* Light geometric background */}
      <div className="absolute inset-0 geometric-pattern-light opacity-100" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <span className="section-badge text-gold-600 bg-gold-500/5 mb-5 inline-block">
            Our Vision
          </span>
          <h2
            id="vision-heading"
            className="font-serif text-green-900 text-3xl sm:text-4xl font-bold mb-3"
          >
            {vision.heading}
          </h2>
          <p className="font-sans text-green-800/60 text-sm sm:text-base max-w-md mx-auto">
            {vision.subtitle}
          </p>
        </div>

        {/* Pillar cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {vision.pillars.map((pillar, index) => (
            <PillarCard key={pillar.icon} {...pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
