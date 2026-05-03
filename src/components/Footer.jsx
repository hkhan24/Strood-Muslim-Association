import React from 'react';

function MosqueSilhouette() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 sm:h-28 text-green-800/30 fill-current">
        {/* Mosque silhouette */}
        <path d="M0 120 L0 100 L30 100 L30 70 L35 60 L40 70 L40 100 L80 100 L80 80 L90 60 L95 50 L100 40 Q110 20 120 40 L125 50 L130 60 L140 80 L140 100 L180 100 L180 90 L185 85 L190 90 L190 100 L300 100 L300 80 L310 60 L315 45 Q320 25 325 45 L330 60 L340 80 L340 100 L420 100 L420 85 L425 75 L430 85 L430 100 L500 100 L500 70 L510 50 L515 35 Q525 10 535 35 L540 50 L550 70 L550 100 L600 100 L600 90 L605 85 L610 90 L610 100 L700 100 L700 75 L705 65 L710 55 Q720 30 730 55 L735 65 L740 75 L740 100 L800 100 L800 90 L805 80 L810 90 L810 100 L900 100 L900 65 L910 45 L915 30 Q925 5 935 30 L940 45 L950 65 L950 100 L1000 100 L1000 85 L1005 80 L1010 85 L1010 100 L1100 100 L1100 80 L1110 60 L1115 50 Q1120 35 1125 50 L1130 60 L1140 80 L1140 100 L1200 100 L1200 120Z" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-green-900 pt-8 pb-24 sm:pb-20 px-4 overflow-hidden">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative z-10 max-w-xl mx-auto text-center pt-8">
        {/* Closing message */}
        <p className="font-serif italic text-gold-400 text-xl sm:text-2xl mb-6 animate-shimmer">
          We look forward to welcoming you!
        </p>

        {/* Gold divider */}
        <div className="gold-divider mb-6">
          <span className="text-gold-500/60 text-sm">☪</span>
        </div>

        {/* Copyright */}
        <p className="font-sans text-cream-300/50 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Strood Muslim Association. All rights reserved.
        </p>
      </div>

      {/* Mosque silhouette decoration */}
      <MosqueSilhouette />
    </footer>
  );
}
