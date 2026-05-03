import React from 'react';

const notices = [
  {
    id: 'parking',
    icon: 'parking',
    title: 'Parking Notice',
    body: 'To help us maintain a good relationship with our neighbours, please park considerately and do not block driveways or access roads.',
  },
  {
    id: 'wudhu',
    icon: 'wudhu',
    title: 'Wudhu Reminder',
    body: 'Please note that there are no wudhu facilities available at the hall. Kindly ensure you arrive in a state of purification.',
  },
];

function ParkingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 7h4a3 3 0 0 1 0 6H9V7zm2 2v2h2a1 1 0 0 0 0-2h-2zM9 13v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WudhuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z" fill="currentColor" opacity="0.15" />
      <path d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z" />
      <path d="M6 16C6 16 4 18 4 20C4 21 5 22 6 22" />
      <path d="M18 16C18 16 20 18 20 20C20 21 19 22 18 22" />
      <path d="M8 15C7 16 6 18 6 20" />
      <path d="M16 15C17 16 18 18 18 20" />
    </svg>
  );
}

function NoticeCard({ icon, title, body }) {
  const IconComponent = icon === 'parking' ? ParkingIcon : WudhuIcon;
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-gold-500/25 shadow-lg shadow-green-900/5 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-gold-500 shadow-sm">
          <IconComponent />
        </div>
        <h3 className="font-sans text-green-900 font-bold text-sm sm:text-base uppercase tracking-wide m-0">
          {title}:
        </h3>
      </div>
      <p className="font-sans text-green-800/80 text-[0.8125rem] sm:text-sm leading-relaxed m-0 pl-[52px]">
        {body}
      </p>
    </div>
  );
}

export default function NoticesSection() {
  return (
    <section id="notices" className="bg-cream-100 pb-10 sm:pb-14 px-4" aria-labelledby="notices-heading">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <h2 id="notices-heading" className="sr-only">Important Notices</h2>
          <span className="inline-block font-sans text-[0.7rem] tracking-[0.25em] uppercase text-gold-500 font-semibold bg-green-900/5 px-4 py-1.5 rounded-full border border-gold-500/20">
            Important Notices
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} {...notice} />
          ))}
        </div>
      </div>
    </section>
  );
}
