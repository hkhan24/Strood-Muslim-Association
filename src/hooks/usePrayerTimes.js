import { useState, useEffect } from 'react';
import { siteConfig } from '../siteConfig';

function formatTo12Hour(time24) {
  if (!time24) return '';
  // Time comes in as "HH:MM" or "HH:MM (BST)"
  const [time] = time24.split(' ');
  const [hours, minutes] = time.split(':');
  let h = parseInt(hours, 10);
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  return `${h}:${minutes} ${ampm}`;
}

export function usePrayerTimes() {
  const [times, setTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const { city, country, method } = siteConfig.dailyPrayers;
        
        // Format today's date as YYYY-MM-DD
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const dateString = `${dd}-${mm}-${yyyy}`;

        const url = `https://api.aladhan.com/v1/timingsByCity/${dateString}?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${method}`;
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch prayer times');
        }
        
        const data = await response.json();
        const t = data.data.timings;
        
        // Determine current prayer
        const now = new Date();
        const currentMins = now.getHours() * 60 + now.getMinutes();
        
        const parseToMins = (time24) => {
          const [h, m] = time24.split(' ')[0].split(':').map(Number);
          return h * 60 + m;
        };

        const prayerKeys = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
        let activePrayer = 'Isha'; // Defaults to Isha if before Fajr
        
        for (const p of prayerKeys) {
          if (currentMins >= parseToMins(t[p])) {
            activePrayer = p;
          } else {
            break;
          }
        }

        // We only want the core 6 times, formatted nicely
        setTimes({
          Fajr: formatTo12Hour(t.Fajr),
          Sunrise: formatTo12Hour(t.Sunrise),
          Dhuhr: formatTo12Hour(t.Dhuhr),
          Asr: formatTo12Hour(t.Asr),
          Maghrib: formatTo12Hour(t.Maghrib),
          Isha: formatTo12Hour(t.Isha),
          date: data.data.date.readable,
          methodName: data.data.meta.method.name,
          city: city,
          currentPrayer: activePrayer,
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Unable to load daily prayer times at this moment.');
        setLoading(false);
      }
    };

    fetchTimes();
  }, []);

  return { times, loading, error };
}
