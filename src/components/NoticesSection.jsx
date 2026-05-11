import React from 'react';
import { siteConfig } from '../siteConfig';

function ParkingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 7h4a3 3 0 0 1 0 6H9V7zm2 2v2h2a1 1 0 0 0 0-2h-2zM9 13v4"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WudhuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z"
            fill="currentColor" opacity="0.15" />
      <path d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14 12 14C14.5 14 16 12.5 16 10C16 6 12 2 12 2Z" />
      <path d="M6 16C6 16 4 18 4 20C4 21 5 22 6 22" />
      <path d="M18 16C18 16 20 18 20 20C20 21 19 22 18 22" />
    </svg>
  );
}

const iconComponents = { parking: ParkingIcon, wudhu: WudhuIcon };

function NoticeCard({ icon, title, body }) {
  const IconComponent = iconComponents[icon] || ParkingIcon;
  return (
    <div className="glass-card-light p-6 sm:p-7 transition-all duration-400
                    hover:-translate-y-1.5 hover:shadow-xl group">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent
                      -mt-6 sm:-mt-7 mb-6 sm:mb-7 -mx-6 sm:-mx-7 rounded-t-3xl" />
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-green-900 flex items-center justify-center
                        text-gold-500 shadow-md group-hover:scale-110 transition-transform duration-300">
          <IconComponent />
        </div>
        <div className="flex-1">
          <h3 className="font-sans text-green-900 font-bold text-sm sm:text-base uppercase tracking-wider mb-2">
            {title}
          </h3>
          <p className="font-sans text-green-800/70 text-[0.82rem] sm:text-sm leading-[1.75] m-0">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function NoticesSection() {
  const { notices } = siteConfig;
  return (
    <section id="notices" className="relative bg-cream-100 pb-20 sm:pb-28 px-5 sm:px-8" aria-labelledby="notices-heading">
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-10 reveal">
          <h2 id="notices-heading" className="sr-only">Important Notices</h2>
          <span className="section-badge text-gold-600 bg-gold-500/5">Important Notices</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {notices.map((notice) => (
            <div key={notice.id} className="reveal"><NoticeCard {...notice} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
