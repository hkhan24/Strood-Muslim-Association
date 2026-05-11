import React from 'react';
import { siteConfig } from '../siteConfig';

export default function LocationSection() {
  const { location } = siteConfig;
  const fullAddress = `${location.venueName}, ${location.addressLine1}, ${location.addressLine2}, ${location.postcode}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const embedUrl = `https://www.google.com/maps?q=${location.mapsQuery}&output=embed`;

  return (
    <section
      id="location"
      className="relative bg-cream-100 pb-20 sm:pb-28 px-5 sm:px-8"
      aria-labelledby="location-heading"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Section badge */}
        <div className="text-center mb-10 reveal">
          <span className="section-badge text-gold-600 bg-gold-500/5">
            Location
          </span>
        </div>

        {/* Location card */}
        <div className="glass-card-light overflow-hidden shadow-lg shadow-green-900/5 reveal">
          {/* Gold top accent */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

          {/* Content */}
          <div className="p-8 sm:p-10 text-center">
            {/* Location pin icon */}
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-green-900 flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                   strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold-500">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            {/* Venue name */}
            <h3 id="location-heading"
                className="font-serif text-green-900 text-2xl sm:text-3xl font-bold mb-4 leading-tight">
              {location.venueName}
            </h3>

            {/* Address */}
            <address className="not-italic font-sans text-green-800/70 text-sm sm:text-base leading-relaxed mb-1">
              {location.addressLine1}<br />
              {location.addressLine2}
            </address>
            <p className="font-sans text-green-900 font-bold text-lg tracking-wider mb-6">
              {location.postcode}
            </p>

            {/* Get Directions button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full
                         bg-green-900 text-gold-500 font-sans font-semibold text-sm
                         no-underline shadow-lg shadow-green-900/20
                         transition-all duration-300
                         hover:bg-green-800 hover:shadow-xl hover:scale-105 hover:-translate-y-0.5"
              aria-label={`Get directions to ${location.venueName} on Google Maps`}
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
          <div className="border-t border-gold-500/15">
            <iframe
              title={`Location of ${location.venueName}`}
              src={embedUrl}
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>

          {/* Card bottom accent */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
