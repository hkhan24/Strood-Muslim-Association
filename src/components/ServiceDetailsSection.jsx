import React from 'react';

const serviceDetails = [
  {
    icon: 'calendar',
    label: 'Date',
    value: 'Friday 8th May',
  },
  {
    icon: 'clock',
    label: 'Start',
    value: '1:00 PM',
    highlighted: true,
  },
  {
    icon: 'people',
    label: 'Jamaat',
    value: '1:30 PM',
    highlighted: true,
  },
  {
    icon: 'book',
    label: 'Topic',
    value: 'Combating Individualism',
  },
  {
    icon: 'person',
    label: 'Imam',
    value: 'Ustadh Ismail Zubair',
  },
];

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
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="13" y2="11" />
    </svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

function DetailRow({ icon, label, value, highlighted }) {
  return (
    <div className={`flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-200 hover:bg-cream-200/60 group
      ${highlighted ? 'bg-cream-200/40' : ''}`}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-800 flex items-center justify-center
                      text-gold-500 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
        {icons[icon]}
      </div>

      {/* Label */}
      <span className="font-sans font-semibold text-green-800 text-sm sm:text-base min-w-[60px]">
        {label}:
      </span>

      {/* Value */}
      <span className={`font-sans font-bold text-sm sm:text-base flex-1
        ${highlighted ? 'text-green-900 text-base sm:text-lg' : 'text-green-800'}`}>
        {value}
      </span>
    </div>
  );
}

export default function ServiceDetailsSection() {
  return (
    <section id="service" className="bg-cream-100 py-10 sm:py-14 px-4" aria-labelledby="service-heading">
      <div className="max-w-xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-6">
          <span className="inline-block font-sans text-[0.7rem] tracking-[0.25em] uppercase text-gold-500 font-semibold
                          bg-green-900/5 px-4 py-1.5 rounded-full border border-gold-500/20">
            Service Details
          </span>
        </div>

        {/* Service details card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-gold-500/25 shadow-lg shadow-green-900/5
                        overflow-hidden">
          {/* Card header stripe */}
          <div className="h-1.5 bg-gradient-to-r from-green-800 via-gold-500 to-green-800" />

          {/* Detail rows */}
          <div className="divide-y divide-cream-300/50 py-2">
            {serviceDetails.map((detail) => (
              <DetailRow key={detail.label} {...detail} />
            ))}
          </div>

          {/* Card footer stripe */}
          <div className="h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
