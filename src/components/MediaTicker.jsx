import React from 'react';

const items = [
  'Asianet News', 'The Hindu', 'India Today', 'NDTV', 'Aaj Tak', 'Manorama News', 'Mathrubhumi News', 'Reporter TV', 'Red FM', 'Radio Mirchi', 'Hit FM', 'Deshabhimani', 'Manorama Online', 'News18', 'The Indian Express', 'Kerala Kaumudi', 'Club FM', 'Kairali News', 'Marunadan News', 'Media Mangalam', 'Kerala Online News', 'Interval Magazine', '& more…'
];

export default function MediaTicker() {
  return (
    <section className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-sm text-white/70">Featured by leading media across India</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex min-w-full gap-8 whitespace-nowrap py-3 [animation-duration:35s]">
          {[...items, ...items, ...items].map((label, idx) => (
            <span key={idx} className="text-white/80">
              {label}
              {idx !== items.length * 3 - 1 && <span className="mx-3 text-white/40">•</span>}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
