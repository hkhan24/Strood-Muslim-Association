import React from 'react';
import { siteConfig } from '../siteConfig';

export default function Footer() {
  const { footer, name } = siteConfig;

  return (
    <footer className="relative bg-green-950 pt-12 pb-10 px-5 sm:px-8 overflow-hidden">
      {/* Geometric pattern border at top */}
      <div className="absolute top-0 left-0 right-0 h-24 geometric-pattern opacity-30" />
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center pt-10">
        {/* Closing message */}
        <p className="font-serif italic text-gold-400 text-xl sm:text-2xl mb-8 animate-shimmer">
          {footer.closingMessage}
        </p>

        {/* Gold divider */}
        <div className="gold-divider mb-8">
          <span className="text-gold-500/50 text-sm">☪</span>
        </div>

        {/* Quranic verse */}
        <div className="max-w-lg mx-auto mb-10">
          <p className="font-arabic text-gold-300/50 text-xl sm:text-2xl leading-relaxed mb-3"
             dir="rtl" lang="ar">
            {footer.verse.arabic}
          </p>
          <p className="font-serif italic text-cream-300/40 text-xs sm:text-sm leading-relaxed mb-1">
            "{footer.verse.translation}"
          </p>
          <p className="font-sans text-cream-300/30 text-[0.65rem] tracking-widest uppercase">
            — {footer.verse.reference}
          </p>
        </div>

        {/* Copyright */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent mb-6" />
        <p className="font-sans text-cream-300/30 text-[0.7rem] tracking-wide">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
