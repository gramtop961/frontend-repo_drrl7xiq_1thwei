import React from 'react';
import { Users, Trophy, Building2, Heart, BookOpen, Award, LineChart } from 'lucide-react';

export default function ImpactSections() {
  return (
    <section className="w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-6xl space-y-14 px-6">
        {/* Global AI Educator & Speaker */}
        <div>
          <h2 className="text-3xl font-semibold">Global AI Educator & Speaker</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <StatCard icon={Users} value="100000+" label="People taught" />
            <StatCard icon={LineChart} value="1M+" label="Avg views per post" />
            <StatCard icon={Trophy} value="20M+" label="Total views" />
          </div>
          <p className="mt-4 max-w-3xl text-white/80">
            From live stages to virtual classrooms — Delhi to Dubai — breaking down AI complexity into actionable knowledge for everyone.
          </p>
        </div>

        {/* Content creation */}
        <div>
          <h3 className="text-2xl font-semibold">Making AI Actually Usable</h3>
          <p className="mt-2 max-w-3xl text-white/80">
            I create content to get people to actually use AI — not just hear about it. Reels that solve real-life problems and deep-dives on the future: AI, Web3, blockchain, and more.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Pill>Script</Pill>
            <Pill>Shoot</Pill>
            <Pill>Act</Pill>
            <Pill>Edit</Pill>
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="text-2xl font-semibold">Brands We've Partnered With</h3>
          <p className="mt-2 text-white/80">We love collaborating with brands that align with our mission.</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {['Oxygen','CleverType','Filmora','Linkacadamy','MentorBee','D\'LIFE','NextWave','Other Huge creators'].map((b, i) => (
              <div key={i} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* ThinkCraft Academy */}
        <div>
          <h3 className="text-2xl font-semibold">🎓 ThinkCraft Academy</h3>
          <p className="mt-2 max-w-3xl text-white/80">
            From curious to creator — free and paid courses, 30-day AI challenges, bite-sized lessons, and live Q&A. Build real tools, not just theory. Trusted by 100K+ learners worldwide.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Feature icon={BookOpen} title="Courses" desc="Free & paid — start anywhere" />
            <Feature icon={Users} title="Community" desc="30-day AI challenges" />
            <Feature icon={Award} title="Outcomes" desc="Build real tools that ship" />
          </div>
        </div>

        {/* Recognition */}
        <div>
          <h3 className="text-2xl font-semibold">🏆 Wins & Recognition</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Highlight title="2× Back-to-Back Winner — 100X Engineers" icon={Trophy} />
            <Highlight title="Government & Public Impact" icon={Building2} desc="Worked with governments, education departments, and law enforcement to explore real-world use of AI. Shared insights with leaders on access, safety, and learning." />
          </div>
        </div>

        {/* What drives me */}
        <div>
          <h3 className="text-2xl font-semibold">💭 What Drives Me</h3>
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="max-w-3xl text-white/80">
              It's the smile on someone’s face when AI makes their life a little easier. I build to make the world a better place — using future tech to solve real problems that matter.
            </p>
          </div>
        </div>

        {/* Moments */}
        <div>
          <h3 className="text-2xl font-semibold">Moments That Matter</h3>
          <p className="mt-1 text-white/70">Videos and highlights from sessions and events.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
                <div className="aspect-video w-full rounded-lg bg-white/5" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full bg-black/60 p-3"><svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14.752 11.168l-5.197-3.028A1 1 0 008 9.028v5.944a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z' /></svg></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-2xl font-semibold">Ready to collaborate?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/80">Let’s build AI that actually helps people. I’m open to speaking, partnerships, and consulting.</p>
          <a href="#consulting" className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">Start the conversation →</a>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
      {children}
    </span>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-white/70">{desc}</div>
    </div>
  );
}

function Highlight({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="text-lg font-semibold">{title}</div>
        {desc && <p className="mt-1 text-white/70">{desc}</p>}
      </div>
    </div>
  );
}
