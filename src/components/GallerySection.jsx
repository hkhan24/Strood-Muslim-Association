import React, { useState } from 'react';
import memorialHall from '../assets/images/memorial-hall.jpg';
import prayerHall from '../assets/images/prayer-hall.jpg';

const galleryImages = [
  {
    src: memorialHall,
    alt: 'Frindsbury Extra Memorial Hall — the home of Strood Muslim Association',
    caption: 'Frindsbury Extra Memorial Hall',
  },
  {
    src: prayerHall,
    alt: 'Jummu\'ah prayer congregation inside the Memorial Hall',
    caption: 'Jummu\'ah Prayer Congregation',
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <section
        id="gallery"
        className="relative bg-green-950 py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
        aria-labelledby="gallery-heading"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-40" />

        {/* Ambient glow accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-700/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          {/* Section badge */}
          <div className="text-center mb-6 reveal">
            <span className="section-badge text-gold-400 bg-gold-500/10 border-gold-500/20">
              Gallery
            </span>
          </div>

          {/* Heading */}
          <h2
            id="gallery-heading"
            className="font-serif text-cream-100 text-3xl sm:text-4xl lg:text-5xl
                       font-bold text-center mb-4 reveal"
          >
            Our Community
          </h2>
          <p className="text-cream-300/60 text-center font-sans text-sm sm:text-base mb-14 max-w-xl mx-auto reveal">
            Moments from our gatherings at Frindsbury Extra Memorial Hall
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="reveal group relative rounded-2xl overflow-hidden cursor-pointer
                           shadow-xl shadow-black/30 ring-1 ring-gold-500/10
                           transition-all duration-500 hover:ring-gold-500/30
                           hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-1"
                onClick={() => setLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.caption}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(index)}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700
                               group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/20 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                flex items-end p-6">
                  <div>
                    <p className="text-cream-100 font-serif text-lg font-semibold mb-1">
                      {image.caption}
                    </p>
                    <span className="text-gold-400 text-xs font-sans uppercase tracking-widest flex items-center gap-2">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      View larger
                    </span>
                  </div>
                </div>

                {/* Static caption bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-950/80 to-transparent p-4
                                group-hover:opacity-0 transition-opacity duration-500">
                  <p className="text-cream-200/90 font-sans text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8
                     bg-green-950/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20
                       text-cream-100 flex items-center justify-center transition-all duration-300
                       hover:bg-white/20 hover:scale-110 cursor-pointer z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                       bg-white/10 border border-white/20 text-cream-100 flex items-center justify-center
                       transition-all duration-300 hover:bg-white/20 hover:scale-110 cursor-pointer z-10"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % galleryImages.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                       bg-white/10 border border-white/20 text-cream-100 flex items-center justify-center
                       transition-all duration-300 hover:bg-white/20 hover:scale-110 cursor-pointer z-10"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Lightbox image */}
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-cream-100 font-serif text-lg font-semibold">
                {galleryImages[lightbox].caption}
              </p>
              <p className="text-cream-300/50 text-xs font-sans mt-1">
                {lightbox + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
