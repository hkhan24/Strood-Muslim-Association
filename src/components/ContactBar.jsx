import React from 'react';
import { siteConfig } from '../siteConfig';

export default function ContactBar() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="relative bg-green-950 py-16 sm:py-20 px-5 sm:px-8 overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0 geometric-pattern opacity-40" />
      <div className="relative max-w-3xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent mb-12" />

        {/* Contact heading */}
        <div className="text-center mb-8 reveal">
          <h2 id="contact-heading" className="sr-only">Contact Us</h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gold-500">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="font-sans text-gold-500 font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
              Questions? Get in Touch
            </span>
          </div>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 reveal">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/44${contact.whatsapp.raw.slice(1)}`}
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full
                       border border-gold-500/30 bg-white/[0.05]
                       no-underline transition-all duration-300
                       hover:bg-gold-500 hover:border-gold-500 hover:scale-105 hover:shadow-lg hover:shadow-gold-500/20
                       w-full sm:w-auto justify-center"
            aria-label={`WhatsApp ${contact.whatsapp.display}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold-400 group-hover:text-green-900 transition-colors">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-sans font-bold text-cream-100 text-sm sm:text-base tracking-wide group-hover:text-green-900 transition-colors">
              {contact.whatsapp.display}
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:+44${contact.phone.raw.slice(1)}`}
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full
                       border border-gold-500/30 bg-white/[0.05]
                       no-underline transition-all duration-300
                       hover:bg-gold-500 hover:border-gold-500 hover:scale-105 hover:shadow-lg hover:shadow-gold-500/20
                       w-full sm:w-auto justify-center"
            aria-label={`Call ${contact.phone.display}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round"
                 className="w-5 h-5 text-gold-400 group-hover:text-green-900 transition-colors">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-sans font-bold text-cream-100 text-sm sm:text-base tracking-wide group-hover:text-green-900 transition-colors">
              {contact.phone.display}
            </span>
          </a>
        </div>

        {/* WhatsApp Group Join */}
        <div className="reveal">
          <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent mb-12" />

          <div className="text-center">
            <p className="font-sans text-cream-200/50 text-sm max-w-sm mx-auto mb-6 leading-relaxed">
              Stay up to date with prayer times, community announcements, and events
            </p>

            {/* Fancy WhatsApp Group Button */}
            <a
              href={contact.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-8 py-4 rounded-2xl
                         no-underline transition-all duration-400
                         hover:scale-105 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.05) 100%)',
                border: '1px solid rgba(37,211,102,0.3)',
                boxShadow: '0 0 20px rgba(37,211,102,0.08), 0 4px 16px rgba(0,0,0,0.2)',
              }}
              aria-label="Join our WhatsApp group"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(37,211,102,0.25) 0%, rgba(37,211,102,0.1) 100%)';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(37,211,102,0.2), 0 8px 24px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.05) 100%)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(37,211,102,0.08), 0 4px 16px rgba(0,0,0,0.2)';
              }}
            >
              {/* WhatsApp icon with glow */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#25D366]/20 blur-lg scale-150
                                group-hover:bg-[#25D366]/30 transition-all duration-300" />
                <div className="relative w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center
                                shadow-lg shadow-[#25D366]/30 group-hover:shadow-[#25D366]/50
                                group-hover:scale-110 transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </div>

              <div className="text-left">
                <span className="block font-sans font-bold text-cream-100 text-sm sm:text-base
                                 group-hover:text-white transition-colors">
                  Join Our WhatsApp Group
                </span>
                <span className="block font-sans text-cream-300/50 text-[0.7rem] sm:text-xs mt-0.5">
                  Community updates & announcements
                </span>
              </div>

              {/* Arrow icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                   className="w-5 h-5 text-cream-300/30 group-hover:text-[#25D366] group-hover:translate-x-1
                              transition-all duration-300 ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
