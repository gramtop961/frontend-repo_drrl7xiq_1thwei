import React from 'react';
import Spline from '@splinetool/react-spline';
import { Award, Shield, Bot, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Building real AI tools for real problems
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl">
          Raul John Aju
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base text-white/80 sm:text-lg">
          While people call me the “AI Kid of India,” I see myself as a student of the world
          building tools, teaching what works, and always learning more
        </p>

        {/* Badges */}
        <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          <Badge icon={Award} label="4× TEDx Speaker" />
          <Badge icon={Rocket} label="Founder & Entrepreneur" />
          <Badge icon={Shield} label="Global Educator" />
          <Badge icon={Bot} label="Builder of AI Tools" />
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tools"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Explore My AI Tools
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#consulting"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 backdrop-blur">
      <Icon className="h-4 w-4 text-white/80" />
      <span>{label}</span>
    </div>
  );
}
