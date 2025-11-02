import React from 'react';
import { Shield, Bot, Zap, Rocket, Megaphone, PlayCircle } from 'lucide-react';

export default function ToolsShowcase() {
  return (
    <section id="tools" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            🧠 AI Realm — Tools I Built to Make AI Actually Useful
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/80">
            As the founder of AI Realm Technologies, I build tools that solve real problems—from legal help to
            cloud deployment—with zero hype.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ToolCard
            icon={Shield}
            title="RESQ (Project 47X)"
            subtitle="LAW + EMERGENCY AI for common people and lawyers"
            description="It helps in emergencies, studies real cases, drafts contracts, and connects you to lawyers instantly — all while keeping your data completely private."
            cta={{ label: 'Get Early Access', href: '#', target: '_self' }}
            tone="emerald"
          />

          <ToolCard
            icon={Bot}
            title="MeBot"
            subtitle="An AI that moves, speaks, and thinks like its creator"
            description="A physical AI clone — trained on my voice, gestures, and personality. It speaks naturally, moves its hands, reacts with LED expressions, and is controlled via tablet."
            extra="Built to explore what it means to ‘clone’ a person’s way of thinking — safely and creatively. Used in workshops, school demos, and AI showcases across India."
            cta={{ label: 'See MeBot in Action', href: '#', target: '_self', icon: PlayCircle }}
            tone="violet"
          />

          <ToolCard
            icon={Zap}
            title="ZapGap"
            subtitle="Zero to Cloud — in one click"
            description="Auto-deploy your projects to the cloud with no code, no DevOps, no stress. Perfect for students, indie devs, and teams who just want their app to run."
            extra="Paste your project link — boom, it's live. Works with websites, bots, APIs, AI tools & more."
            cta={{ label: 'Launch with ZapGap', href: '#', target: '_self' }}
            tone="yellow"
          />

          <ToolCard
            icon={Rocket}
            title="Investo AI"
            subtitle="Your budget. Your goals. Smart AI-backed investing."
            description="Smarter choices across crypto, gold, and stocks based on your budget, goals, and risk level — no jargon, just clear, AI-tailored guidance."
            extra="Great for first-time investors and finance nerds alike."
            tone="sky"
          />
        </div>

        {/* FeedFye + StoryScince and more */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">🧠 FeedFye + StoryScince</h3>
          <p className="mt-2 text-white/80">
            Content that posts itself. Auto-write captions and post to Instagram & LinkedIn — saving hours weekly.
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-white/70 sm:grid-cols-3">
            <li>AI-written posts & captions</li>
            <li>Auto-scheduling + publishing</li>
            <li>Personal tone, pro style</li>
          </ul>
          <p className="mt-3 text-white/80">
            Used by influencers, startups, and busy teams across India.
          </p>
        </div>

        {/* Consulting CTA */}
        <div id="consulting" className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 text-center backdrop-blur">
          <h3 className="text-2xl font-semibold">🧩 Helping Businesses Use AI (Without the Hype)</h3>
          <p className="mx-auto mt-2 max-w-3xl text-white/80">
            I help companies bring AI into their workflows — simple, fast, and actually useful. No jargon. Just AI that works.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Book a session →
          </a>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ icon: Icon, title, subtitle, description, extra, cta, tone = 'violet' }) {
  const toneMap = {
    violet: 'from-violet-500/20 to-fuchsia-500/10',
    emerald: 'from-emerald-500/20 to-teal-500/10',
    yellow: 'from-yellow-400/20 to-orange-500/10',
    sky: 'from-sky-400/20 to-cyan-500/10',
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20`}> 
      <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${toneMap[tone]} opacity-0 blur-2xl transition duration-500 group-hover:opacity-40`} />
      <div className="relative">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        <p className="mt-3 text-white/80">{description}</p>
        {extra && <p className="mt-2 text-white/70">{extra}</p>}
        {cta && (
          <a
            href={cta.href}
            target={cta.target || '_self'}
            rel={cta.target === '_blank' ? 'noopener noreferrer' : undefined}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            {cta.icon ? <cta.icon className="h-4 w-4" /> : null}
            {cta.label}
          </a>
        )}
      </div>
    </div>
  );
}
