import React from 'react';

export default function LocationSection() {
  const address = "Frindsbury Extra Memorial Hall, Holly Road, Wainscott, Rochester, Kent, ME2 4LG";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const embedUrl = "https://www.google.com/maps?q=Frindsbury+Extra+Memorial+Hall,+Holly+Road,+Wainscott,+Rochester,+Kent,+ME2+4LG&output=embed";

  return (
    <section id="location" className="bg-cream-100 pb-10 sm:pb-14 px-4" aria-labelledby="location-heading">
      <div className="max-w-xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-6">
          <span className="inline-block font-sans text-[0.7rem] tracking-[0.25em] uppercase text-gold-500 font-semibold
                          bg-green-900/5 px-4 py-1.5 rounded-full border border-gold-500/20">
            Location
          </span>
        </div>

        {/* Location card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-gold-500/25 shadow-lg shadow-green-900/5
                        overflow-hidden">
          {/* Card header stripe */}
          <div className="h-1.5 bg-gradient-to-r from-green-800 via-gold-500 to-green-800" />

          {/* Content */}
          <div className="p-6 sm:p-8 text-center">
            {/* Location pin icon */}
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-800 flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                   className="w-6 h-6 text-gold-500">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            {/* Venue name */}
            <h3 id="location-heading" className="font-serif text-green-900 text-xl sm:text-2xl font-bold mb-3">
              Frindsbury Extra<br />Memorial Hall
            </h3>

            {/* Address lines */}
            <address className="not-italic font-sans text-green-800/80 text-sm sm:text-base leading-relaxed mb-1">
              Holly Road, Wainscott<br />
              Rochester, Kent
            </address>
            <p className="font-sans text-green-900 font-bold text-base sm:text-lg tracking-wide mb-5">
              ME2 4LG
            </p>

            {/* Get Directions button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                         bg-green-800 text-gold-500 font-sans font-semibold text-sm
                         no-underline shadow-md
                         transition-all duration-300
                         hover:bg-green-700 hover:shadow-lg hover:scale-105"
              aria-label="Get directions to Frindsbury Extra Memorial Hall on Google Maps"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Map embed */}
          <div className="border-t-2 border-gold-500/15">
            <iframe
              title="Location of Frindsbury Extra Memorial Hall"
              src={embedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>

          {/* Card footer stripe */}
          <div className="h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
