import React from 'react';
import { siteConfig } from '../siteConfig';
import DailyPrayerTimes from './DailyPrayerTimes';

const icons = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <rect x="8" y="14" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

function DetailRow({ icon, label, value, highlight }) {
  return (
    <div className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200
                     hover:bg-green-900/5 group ${highlight ? 'bg-green-900/5' : ''}`}>
      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-green-900/10 flex items-center justify-center
                      text-green-800 group-hover:bg-green-900/20 group-hover:scale-105 transition-all duration-200 shadow-sm">
        {icons[icon]}
      </div>
      <span className="font-sans font-semibold text-green-900/80 text-base min-w-[70px] uppercase tracking-wide">
        {label}
      </span>
      <span className={`font-sans font-extrabold flex-1 text-right sm:text-left
        ${highlight ? 'text-green-950 text-xl sm:text-2xl' : 'text-green-900 text-lg sm:text-xl'}`}>
        {value}
      </span>
    </div>
  );
}

function PrayerCard({ title, children }) {
  return (
    <div className="bg-cream-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/40 relative transform transition-all hover:-translate-y-1 hover:shadow-gold-500/20">
      {/* Bold Gold top stripe */}
      <div className="h-[6px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      {/* Title */}
      <div className="px-5 pt-8 pb-4 border-b border-green-900/10 bg-white/50">
        <h3 className="font-serif text-green-950 text-3xl sm:text-4xl font-extrabold text-center tracking-tight">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="px-2 py-4">
        {children}
      </div>
    </div>
  );
}

export default function ServiceDetailsSection() {
  const { jummah, eid } = siteConfig;

  const jummahFields = [
    { icon: 'calendar', label: 'Day', value: jummah.date },
    { icon: 'clock', label: 'Starts', value: jummah.startTime, highlight: true },
    { icon: 'people', label: 'Jamaat', value: jummah.jamaatTime, highlight: true },
    { icon: 'person', label: 'Imam', value: jummah.imam },
  ];

  const eidFields = eid ? [
    { icon: 'calendar', label: 'Date', value: eid.date },
    { icon: 'clock', label: 'Time', value: eid.time, highlight: true },
  ] : [];

  return (
    <section
      id="prayer"
      className="relative bg-green-950 py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
      aria-labelledby="prayer-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-60" />

      {/* Radial glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%)'
      }} />

      <div className="relative max-w-2xl mx-auto">
        <h2 id="prayer-heading" className="sr-only">Prayer Times</h2>

        {/* Cards grid */}
        <div className="space-y-10">
          {/* Jummah Prayer Card */}
          <div className="reveal">
            <PrayerCard title="Jummah Prayer">
              <div className="divide-y divide-green-900/10 py-1">
                {jummahFields.map((field) => (
                  <DetailRow key={field.label} {...field} />
                ))}
              </div>
            </PrayerCard>
          </div>

          {/* Eid Prayer Card */}
          {eid && (
            <div className="reveal">
              <PrayerCard title="Eid Prayer">
                <div className="divide-y divide-green-900/10 py-1">
                  {eidFields.map((field) => (
                    <DetailRow key={field.label} {...field} />
                  ))}
                </div>
              </PrayerCard>
            </div>
          )}

          {/* Daily Prayer Times */}
          <div className="reveal mt-12 pt-8 border-t border-green-900/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500/20">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2L15 8H9L12 2Z" />
                <path d="M12 22L9 16H15L12 22Z" />
              </svg>
            </div>
            <DailyPrayerTimes />
          </div>
        </div>
      </div>
    </section>
  );
}
