import React, { useState } from 'react'
import { ChaosLogo } from '../brand/ChaosLogo'
import { sound } from '../../utils/sound'
import { ArrowDown, Sparkles, ShieldAlert, Cpu, Download, Compass } from 'lucide-react'

interface HeroSectionProps {
  chaosLevel: number
  onExploreGames: () => void
  onOpenBrandKit: () => void
  onTriggerAnomaly: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  chaosLevel,
  onExploreGames,
  onOpenBrandKit,
  onTriggerAnomaly
}) => {
  const [realityCoherence, setRealityCoherence] = useState<number>(94.2)
  const [anomaliesPoked, setAnomaliesPoked] = useState<number>(0)

  const handlePokeAnomaly = () => {
    sound.playGlitch()
    setAnomaliesPoked(prev => prev + 1)
    setRealityCoherence(prev => Math.max(12.4, +(prev - (Math.random() * 8 + 3)).toFixed(1)))
    onTriggerAnomaly()
  }

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-20 flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#F5A623]/10 via-[#00E5FF]/10 to-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Calibration Tag */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11131B]/90 border border-white/10 text-xs font-mono text-[#94A3B8] mb-8 shadow-lg backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
        <span className="text-[#00E5FF] font-semibold">BROWSER GAMES MADE WITH AI</span>
        <span className="text-white/20">//</span>
        <span>ZERO INSTALL</span>
      </div>

      {/* Main Emblem Showcase with Interactive Hover */}
      <div className="relative mb-8 group cursor-pointer" onClick={handlePokeAnomaly}>
        <div className="w-32 h-32 sm:w-40 sm:h-40 relative z-10 transition-transform duration-500 group-hover:scale-105">
          <ChaosLogo variant="symbol" theme="dark" interactive={false} />
        </div>
        <div className="absolute inset-0 bg-[#00E5FF]/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>

      {/* Monumental Headline */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.08] mb-6">
          UNCONVENTIONAL{' '}
          <span className="bg-gradient-to-r from-[#00E5FF] via-[#7DD3FC] to-[#00E5FF] bg-clip-text text-transparent">
            BROWSER GAMES
          </span>{' '}
          MADE WITH AI.
        </h1>

        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          A collection of browser games created with AI. Unconventional mechanics, fourth-wall breaks, and software that probably has opinions about you. Instant play, zero install.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            onClick={() => {
              sound.playClick()
              onExploreGames()
            }}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#D97706] text-[#090A0F] font-bold text-base hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#F5A623]/25 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#090A0F]" />
            <span>Explore Games</span>
          </button>

          <button
            onClick={handlePokeAnomaly}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#11131B] border border-white/15 hover:border-[#00E5FF]/60 text-[#F8FAFC] font-semibold text-base hover:text-[#00E5FF] transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#00E5FF]" />
            <span>Pester Anomaly {anomaliesPoked > 0 && `(${anomaliesPoked})`}</span>
          </button>

          <button
            onClick={() => {
              sound.playClick()
              onOpenBrandKit()
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#11131B] border border-white/10 hover:border-[#00E5FF]/40 text-[#94A3B8] hover:text-[#F8FAFC] font-medium text-sm transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#00E5FF]" />
            <span>Brand Marks &amp; SVGs</span>
          </button>
        </div>

        {/* Real-Time Telemetry HUD */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="p-3 rounded-lg bg-[#11131B]/80 border border-white/5 text-left">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#64748B] uppercase">
              <Cpu className="w-3 h-3 text-[#00E5FF]" />
              <span>Platform</span>
            </div>
            <div className="font-mono text-xs font-bold text-[#F8FAFC] mt-1">
              Browser Native
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#11131B]/80 border border-white/5 text-left">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#64748B] uppercase">
              <ShieldAlert className="w-3 h-3 text-[#FF9F43]" />
              <span>Reality Coherence</span>
            </div>
            <div className="font-mono text-xs font-bold text-[#FF9F43] mt-1">
              {realityCoherence}% (Tolerable)
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#11131B]/80 border border-white/5 text-left">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#64748B] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF2A5F]" />
              <span>4th Wall Integrity</span>
            </div>
            <div className="font-mono text-xs font-bold text-[#FF2A5F] mt-1">
              12.0% (Cracking)
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#11131B]/80 border border-white/5 text-left">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#64748B] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              <span>Built With</span>
            </div>
            <div className="font-mono text-xs font-bold text-[#00E5FF] mt-1">
              Generative AI
            </div>
          </div>
        </div>

        {/* Footnote humor */}
        <div className="mt-8 font-mono text-[11px] text-[#64748B] tracking-wide">
          Notice: No browsers were permanently harmed in the calibration of this viewport (Entropy: {chaosLevel}%).
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => {
          sound.playClick()
          onExploreGames()
        }}
        className="mt-12 flex flex-col items-center gap-2 text-[#64748B] hover:text-[#F5A623] transition-colors focus:outline-none"
        aria-label="Scroll down to games"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">DISCOVER THE GAMES</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
