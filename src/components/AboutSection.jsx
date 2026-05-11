import React from 'react';
import { siteConfig } from '../siteConfig';

export default function AboutSection() {
  const { about } = siteConfig;

  return (
    <section
      id="about"
      className="relative bg-cream-100 py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 geometric-pattern-light opacity-100" />

      <div className="relative max-w-3xl mx-auto">
        {/* Section badge */}
        <div className="text-center mb-10 reveal">
          <span className="section-badge text-gold-600 bg-gold-500/5">
            About Us
          </span>
        </div>

        {/* Content card with gold left border */}
        <div className="relative reveal">
          {/* Decorative gold left border */}
          <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full
                          bg-gradient-to-b from-transparent via-gold-500 to-transparent
                          hidden sm:block" />

          <div className="sm:pl-10">
            {/* Heading */}
            <h2
              id="about-heading"
              className="font-serif text-green-900 text-3xl sm:text-4xl lg:text-5xl
                         font-bold mb-8 leading-tight"
            >
              {about.heading}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-sans text-green-800/80 text-[0.95rem] sm:text-base
                             leading-[1.8] tracking-wide"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decorative bottom accent */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" />
              <span className="text-gold-500/60 text-sm">☪</span>
              <div className="h-px flex-1 bg-gradient-to-l from-gold-500/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
