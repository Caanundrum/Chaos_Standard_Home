import React from 'react'
import { sound } from '../../utils/sound'
import {
  Sparkles,
  Monitor,
  Eye,
  Crosshair,
  Zap,
  Globe2,
  CheckCircle2,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'

interface PhilosophySectionProps {
  onBackToHome?: () => void
  onExploreGames?: () => void
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onBackToHome,
  onExploreGames
}) => {
  const pillars = [
    {
      number: '01',
      title: 'AI as a Creative Engine',
      accent: '#FF6A00',
      icon: Sparkles,
      tagline: 'Dynamic dungeon masters, living narratives, and emergent worlds.',
      description:
        'AI isn\'t used as a lazy shortcut for generic filler; it powers dynamic Dungeon Masters, responsive narrative logic, and interfaces that react unpredictably to the human behind the screen.'
    },
    {
      number: '02',
      title: 'The Browser as the Console',
      accent: '#94A3B8',
      icon: Monitor,
      tagline: 'Zero friction, zero installs, instant boot.',
      description:
        'The web browser is the most ubiquitous gaming machine in existence. Games launch with a single link or shared URL—no launchers, no gigabyte updates, no barriers between you and controlled chaos.'
    },
    {
      number: '03',
      title: 'Sentient Interfaces',
      accent: '#FF8533',
      icon: Eye,
      tagline: 'Software that notices who is clicking.',
      description:
        'Games with intentional fourth-wall breaks and actual personality. Buttons that question your judgment, prompts that remember what you tried, and systems that talk back.'
    },
    {
      number: '04',
      title: 'Controlled Chaos',
      accent: '#64748B',
      icon: Crosshair,
      tagline: 'Rigorous logic built for delightful emergence.',
      description:
        'Real surprise requires solid foundations. Deep rulesets, dynamic state management, and responsive systems allow unexpected outcomes to feel earned rather than broken.'
    }
  ]

  return (
    <section id="philosophy" className="relative pt-8 sm:pt-10 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Top Breadcrumb & Return to Home */}
      {onBackToHome && (
        <div className="mb-8">
          <button
            onClick={() => {
              sound.playClick()
              onBackToHome()
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#94A3B8] hover:text-[#FF6A00] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FF6A00]" />
            <span>RETURN TO STUDIO HOME</span>
          </button>
        </div>
      )}

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="font-mono text-xs text-[#FF6A00] uppercase tracking-[0.25em] mb-2 font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          ABOUT CHAOS STANDARD
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
          BUILT WITH AI. CONTROLLED CHAOS.
        </h2>
        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          Chaos Standard is a home for unconventional browser games built with AI. No corporate pretense, no bloated downloads—just high-concept experiments, playful irreverence, and software that refuses to behave normally.
        </p>
      </div>

      {/* Four Pillars Grid */}
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

      {/* The Browser Highlight Card */}
      <div className="rounded-3xl bg-gradient-to-r from-[#171924] via-[#11131B] to-[#171924] border border-[#FF6A00]/25 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="font-mono text-xs text-[#FF6A00] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#FF6A00]" />
              THE PLATFORM ADVANTAGE
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mb-4">
              Why Browser-Native AI Games Matter
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
              When games require client downloads, account setups, and GPU driver verification, the magic of spontaneous play is lost. A browser game can be shared across chat, played during lunch breaks, and explored without friction on any device. Built with modern WebGL, Web Audio, and reactive interfaces.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#F8FAFC]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>Zero Installation</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>Instant Play URLs</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>Hardware Accelerated WebGL</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-black/50 border border-white/10">
            <Zap className="w-10 h-10 text-[#FF6A00] mb-3 animate-pulse" />
            <div className="font-mono text-xs uppercase text-[#94A3B8] mb-1">
              CHAOS INTEGRITY
            </div>
            <div className="font-display text-3xl font-extrabold text-[#F8FAFC]">
              100% UNAPOLOGETIC
            </div>
            <div className="font-mono text-[10px] text-[#64748B] mt-2">
              Built with AI. Played in the browser.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer for About page */}
      <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {onBackToHome && (
          <button
            onClick={() => {
              sound.playClick()
              onBackToHome()
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#94A3B8] hover:text-[#FF6A00] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FF6A00]" />
            <span>Return to Studio Home</span>
          </button>
        )}
        {onExploreGames && (
          <button
            onClick={() => {
              sound.playClick()
              onExploreGames()
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#E65500] text-[#05070A] font-bold text-xs font-mono transition-all hover:brightness-110 active:scale-95 cursor-pointer flex items-center gap-2 shadow-lg shadow-[#FF6A00]/25"
          >
            <span>Explore the Games Catalog</span>
            <ArrowRight className="w-4 h-4 text-[#05070A]" />
          </button>
        )}
      </div>
    </section>
  )
}
