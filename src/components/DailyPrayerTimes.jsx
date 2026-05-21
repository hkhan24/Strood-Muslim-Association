import React from 'react';
import { usePrayerTimes } from '../hooks/usePrayerTimes';

export default function DailyPrayerTimes() {
  const { times, loading, error } = usePrayerTimes();

  if (error) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center text-cream-200/50 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-cream-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/40 relative transform transition-all hover:-translate-y-1 hover:shadow-gold-500/20">
      {/* Bold Gold top stripe */}
      <div className="h-[6px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      {/* Header */}
      <div className="px-5 pt-8 pb-4 border-b border-green-900/10 bg-white/50 flex flex-col items-center gap-1">
        <h3 className="font-serif text-green-950 text-3xl sm:text-4xl font-extrabold text-center tracking-tight">
          Daily Prayer Times
        </h3>
        <span className="font-sans text-green-800/60 text-xs sm:text-sm uppercase tracking-widest font-bold mt-1">
          {loading ? 'Loading...' : times?.date}
        </span>
      </div>

      {/* Grid of times */}
      <div className="px-2 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y divide-green-900/10">
          {['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer, i) => {
            const isActive = times?.currentPrayer === prayer;
            return (
              <div key={prayer} className={`p-4 sm:p-5 flex flex-col items-center justify-center gap-1 transition-colors ${isActive ? 'bg-green-200 shadow-inner relative' : 'hover:bg-green-900/5'} ${i < 2 ? 'border-t-0' : ''} ${i % 2 === 0 ? 'border-l-0' : ''} sm:border-l sm:border-t-0`}>
                {isActive && (
                  <div className="absolute inset-x-0 top-0 h-[4px] bg-green-600" />
                )}
                <span className={`font-sans text-xs uppercase tracking-[0.15em] font-bold ${isActive ? 'text-green-900' : 'text-green-900/60'}`}>
                  {prayer}
                </span>
                {loading ? (
                  <div className="h-6 sm:h-7 w-16 bg-green-900/10 rounded animate-pulse mt-1" />
                ) : (
                  <span className={`font-sans font-extrabold ${isActive ? 'text-green-950 text-2xl sm:text-3xl' : 'text-green-950 text-xl sm:text-2xl'}`}>
                    {times[prayer]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Footer / Notice */}
      <div className="px-6 py-4 bg-green-900/5 border-t border-green-900/10 text-center">
        <p className="font-sans text-green-800 text-[0.7rem] sm:text-xs font-semibold">
          ⚠️ These times are for <strong>personal reference only</strong> and are not held at the mosque.
          <br />
          <span className="font-normal opacity-80 mt-1 block">
            Currently, only <strong>Jummu'ah (Friday) prayer</strong> is held at our venue. Daily prayer times shown above are calculated beginning times for {times?.city} ({times?.methodName}).
          </span>
        </p>
      </div>
    </div>
  );
}
