import React from 'react';
import smaLogo from '../assets/images/sma-logo.png';

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 bg-green-900/95 backdrop-blur-md border-b border-gold-500/30"
    >
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <a href="#top" className="flex items-center gap-3 no-underline group" aria-label="Back to top">
          <img
            src={smaLogo}
            alt="Strood Muslim Association Logo"
            className="w-10 h-10 rounded-full ring-2 ring-gold-500/50 transition-transform duration-300 group-hover:scale-110"
            width="40"
            height="40"
          />
          <div className="hidden sm:block">
            <h2 className="font-serif text-gold-500 text-sm font-semibold tracking-wide leading-tight m-0">
              Strood Muslim Association
            </h2>
            <p className="text-cream-300 text-[0.65rem] tracking-widest uppercase m-0">EST. 2026</p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav aria-label="Page navigation" className="flex items-center gap-1 sm:gap-4">
          {[
            { href: '#service', label: 'Service' },
            { href: '#location', label: 'Location' },
            { href: '#notices', label: 'Notices' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-cream-200 text-xs sm:text-sm font-sans font-medium no-underline
                         px-2 py-1.5 rounded-md transition-all duration-200
                         hover:text-gold-400 hover:bg-green-700/40"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
