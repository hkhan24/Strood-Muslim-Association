import React, { useState, useEffect } from 'react';
import smaLogo from '../assets/images/sma-logo.png';
import { siteConfig } from '../siteConfig';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#prayer', label: 'Prayer' },
  { href: '#vision', label: 'Vision' },
  { href: '#location', label: 'Location' },
  { href: '#notices', label: 'Notices' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-green-950/95 backdrop-blur-xl shadow-lg shadow-green-950/20 py-2'
            : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo + Title */}
          <a href="#top" className="flex items-center gap-3 no-underline group" aria-label="Back to top">
            <img
              src={smaLogo}
              alt={`${siteConfig.name} Logo`}
              className={`rounded-full ring-2 ring-gold-500/40 transition-all duration-300 group-hover:scale-110 group-hover:ring-gold-500/70
                ${scrolled ? 'w-9 h-9' : 'w-11 h-11'}`}
              width="44"
              height="44"
            />
            <div className="hidden sm:block">
              <h2 className="font-serif text-gold-500 text-sm font-semibold tracking-wide leading-tight m-0">
                {siteConfig.name}
              </h2>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Page navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-cream-200/80 text-[0.8rem] font-sans font-medium no-underline
                           px-3 py-2 rounded-lg transition-all duration-300
                           hover:text-gold-400 hover:bg-white/5"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] w-8 h-8 items-center justify-center
                       bg-transparent border-none cursor-pointer p-0"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-[2px] bg-gold-500 transition-all duration-300 origin-center
              ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-gold-500 transition-all duration-300
              ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-gold-500 transition-all duration-300 origin-center
              ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-backdrop fixed inset-0 z-40 bg-green-950/80 backdrop-blur-sm md:hidden ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`mobile-menu-panel fixed top-0 right-0 z-50 w-72 h-full bg-green-900 shadow-2xl md:hidden ${menuOpen ? 'open' : ''}`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="text-cream-200 text-base font-sans font-medium no-underline
                           px-4 py-3 rounded-xl transition-all duration-200
                           hover:text-gold-400 hover:bg-white/5"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-4" />
            <p className="text-cream-300/40 text-xs text-center">
              {siteConfig.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
