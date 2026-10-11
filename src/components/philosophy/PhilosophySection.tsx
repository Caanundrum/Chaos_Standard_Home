import React from 'react'
import { sound } from '../../utils/sound'
import {
  Sparkles,
  Monitor,
  Eye,
  Crosshair,
  Zap,
  Globe2,
  CheckCircle2
} from 'lucide-react'

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'The Ridiculous Standard',
      accent: '#F5A623',
      icon: Sparkles,
      tagline: 'We take making ridiculous things extremely seriously.',
      description:
        'The humor can be absurd; the craft must never be. We reject intentionally ugly joke games. Instead, we pour cinematic art direction, custom sound design, fluid animation, and architectural typography into concepts that happen to have questionable relationships with reality.'
    },
    {
      number: '02',
      title: 'The Browser as Console',
      accent: '#00E5FF',
      icon: Monitor,
      tagline: 'Zero friction, zero installs, instant boot.',
      description:
        'The web browser is the most ubiquitous gaming machine on earth, yet it is chronically underestimated. We build browser-native games that launch with a single click or shared URL—no launchers, no gigabyte updates, no barriers between you and controlled chaos.'
    },
    {
      number: '03',
      title: 'Sentient Interfaces',
      accent: '#FF2A5F',
      icon: Eye,
      tagline: 'Software that notices who is holding the mouse.',
      description:
        'Games that break the fourth wall deliberately and with charm. Buttons that question your judgment, dialogues that remember what you tried, and narrative systems that respond to the human in the chair rather than just the avatar on screen.'
    },
    {
      number: '04',
      title: 'Precision Colliding with Chaos',
      accent: '#8B5CF6',
      icon: Crosshair,
      tagline: 'Deep mechanical logic made to be dismantled.',
      description:
        'True controlled chaos requires rigorous foundational rules. We engineer robust simulation, AI, and multiplayer synchronization so that when unpredictable emergence happens, it feels astonishing and earned rather than broken.'
    }
  ]

  return (
    <section id="philosophy" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#F5A623]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="font-mono text-xs text-[#00E5FF] uppercase tracking-[0.25em] mb-2 font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
          STUDIO MANIFESTO
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
          CRAFTED PRECISION. DELIGHTFUL ANOMALY.
        </h2>
        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          Chaos Standard exists because gaming is at its best when high-level production values collide with playful irreverence. We are an independent studio dedicated to original browser games that are as beautiful as they are strange.
        </p>
      </div>

      {/* Four Studio Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {pillars.map((pillar) => {
          const Icon = pillar.icon
          return (
            <div
              key={pillar.number}
              onMouseEnter={() => sound.playHover()}
              className="group relative p-8 sm:p-10 rounded-2xl bg-[#11131B]/90 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-xl overflow-hidden backdrop-blur-md"
            >
              {/* Top Accent Line */}
              <div
                style={{ backgroundColor: pillar.accent }}
                className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
              />

              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-3xl font-extrabold text-white/20 group-hover:text-white/40 transition-colors">
                  {pillar.number}
                </span>
                <div
                  style={{ backgroundColor: `${pillar.accent}1A`, color: pillar.accent }}
                  className="p-3 rounded-xl border border-white/10"
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#F8FAFC] mb-2">
                {pillar.title}
              </h3>

              <div
                style={{ color: pillar.accent }}
                className="font-mono text-xs font-semibold uppercase tracking-wider mb-4"
              >
                {pillar.tagline}
              </div>

              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* The Browser Manifesto Highlight Card */}
      <div className="rounded-3xl bg-gradient-to-r from-[#171924] via-[#11131B] to-[#171924] border border-[#F5A623]/25 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="font-mono text-xs text-[#F5A623] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#F5A623]" />
              THE PLATFORM ADVANTAGE
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-4">
              Why Browser-Native Games Matter
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
              When games require client downloads, account setups, and GPU driver verification, the magic of spontaneous play is lost. A browser game can be shared across group chats, played during lunch breaks, and tested on any laptop in the world with zero friction. We use raw WebGL, Web Audio, and Canvas to ensure that zero install never means compromise.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#F8FAFC]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Zero Installation</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Instant Multiplayer URLs</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Hardware Accelerated WebGL</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-black/50 border border-white/10">
            <Zap className="w-10 h-10 text-[#F5A623] mb-3 animate-pulse" />
            <div className="font-mono text-xs uppercase text-[#94A3B8] mb-1">
              STUDIO COHERENCE RATING
            </div>
            <div className="font-display text-3xl font-extrabold text-[#F8FAFC]">
              100% UNAPOLOGETIC
            </div>
            <div className="font-mono text-[10px] text-[#64748B] mt-2">
              No generic templates. No cookie-cutter cards.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
