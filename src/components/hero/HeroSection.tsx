import React, { useState } from 'react'
import { ChaosLogo } from '../brand/ChaosLogo'
import { sound } from '../../utils/sound'
import { ArrowDown, AlertTriangle, ShieldAlert, Cpu, Download, Compass, ExternalLink, RotateCcw } from 'lucide-react'

interface HeroSectionProps {
  chaosLevel: number
  onExploreGames: () => void
  onOpenBrandKit: () => void
  onTriggerAnomaly: () => void
}

const FORBIDDEN_STEPS = [
  { text: '⚠️ Do Not Click', coherence: 94.2, status: 'Stable' },
  { text: 'Hey. I said do not click.', coherence: 78.4, status: 'Frayed' },
  { text: 'Stop touching this button.', coherence: 54.1, status: 'Unstable' },
  { text: 'You are destabilizing the site...', coherence: 29.8, status: 'Critical' },
  { text: 'One more click breaks everything.', coherence: 8.5, status: 'Breach Imminent' },
  { text: '💥 Zero Self-Control! Play "Do Not Press Submit" ↗', coherence: 0.0, status: 'Total Failure' }
]

export const HeroSection: React.FC<HeroSectionProps> = ({
  chaosLevel,
  onExploreGames,
  onOpenBrandKit,
  onTriggerAnomaly
}) => {
  const [clickCount, setClickCount] = useState<number>(0)

  const isCompleted = clickCount >= FORBIDDEN_STEPS.length - 1
  const currentStep = FORBIDDEN_STEPS[Math.min(clickCount, FORBIDDEN_STEPS.length - 1)]

  const handleForbiddenClick = () => {
    if (isCompleted) {
      // Clear payoff: Directly launch the actual game!
      sound.playClick()
      window.open('https://donotpresssubmit--donotpresssubmit.us-central1.hosted.app/', '_blank', 'noopener,noreferrer')
      return
    }

    const nextCount = clickCount + 1
    setClickCount(nextCount)
    onTriggerAnomaly()

    if (nextCount === 1) {
      sound.playClick()
    } else if (nextCount === 2) {
      sound.playHover()
    } else if (nextCount === 3) {
      sound.playGlitch()
    } else if (nextCount === 4) {
      sound.playBuzzer()
    } else if (nextCount >= 5) {
      sound.playBuzzer()
      sound.playStudioReveal()
    }
  }

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation()
    sound.playClick()
    setClickCount(0)
  }

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-20 flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FF6A00]/15 via-[#FF8C33]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Calibration Tag */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11131B]/90 border border-white/10 text-xs font-mono text-[#94A3B8] mb-8 shadow-lg backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-ping" />
        <span className="text-[#FF6A00] font-semibold">BROWSER GAMES MADE WITH AI</span>
        <span className="text-white/20">//</span>
        <span>ZERO INSTALL</span>
      </div>

      {/* Main Emblem Showcase with Interactive Reaction */}
      <div className="relative mb-8 group cursor-pointer" onClick={handleForbiddenClick} title="Poke the Terminal">
        <div className="w-40 h-40 sm:w-48 sm:h-48 relative z-10 transition-transform duration-500 group-hover:scale-105">
          <ChaosLogo variant="symbol" theme="dark" interactive={false} />
        </div>
        <div className="absolute inset-0 bg-[#FF6A00]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>

      {/* Monumental Headline */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.08] mb-6">
          UNCONVENTIONAL{' '}
          <span className="bg-gradient-to-r from-[#FF8C33] via-[#FFAE66] to-[#FF6A00] bg-clip-text text-transparent">
            BROWSER GAMES
          </span>{' '}
          MADE WITH AI.
        </h1>

        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          A collection of browser games created with AI. Unconventional mechanics, fourth-wall breaks, and software that probably has opinions about you. Instant play, zero install.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14">
          {/* Explore Games Button */}
          <button
            onClick={() => {
              sound.playClick()
              onExploreGames()
            }}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#E65500] text-[#05070A] font-bold text-base hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#FF6A00]/25 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#05070A]" />
            <span>Explore Games</span>
          </button>

          {/* Simple "Do Not Click" Challenge Button */}
          <div className="relative flex items-center gap-2">
            <button
              onClick={handleForbiddenClick}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-[#FF6A00] text-[#05070A] shadow-lg shadow-[#FF6A00]/30 animate-pulse font-bold'
                  : clickCount > 0
                  ? 'bg-[#181B26] border border-[#FF6A00] text-[#FF6A00] shadow-md'
                  : 'bg-[#11131B] border border-white/15 hover:border-[#FF6A00]/60 text-[#F8FAFC] hover:text-[#FF6A00]'
              }`}
            >
              {isCompleted ? (
                <ExternalLink className="w-5 h-5 text-[#05070A]" />
              ) : (
                <AlertTriangle className={`w-5 h-5 ${clickCount > 0 ? 'text-[#FF6A00]' : 'text-[#FF6A00]'}`} />
              )}
              <span>{currentStep.text}</span>
            </button>

            {clickCount > 0 && (
              <button
                onClick={handleReset}
                title="Reset Test"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#64748B] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Brand Kit Button */}
          <button
            onClick={() => {
              sound.playClick()
              onOpenBrandKit()
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#11131B] border border-white/10 hover:border-[#FF6A00]/40 text-[#94A3B8] hover:text-[#F8FAFC] font-medium text-sm transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#FF6A00]" />
            <span>Brand Kit &amp; PNGs</span>
          </button>
        </div>

        {/* Real-Time Telemetry HUD */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="p-3 rounded-lg bg-[#11131B]/80 border border-white/5 text-left">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#64748B] uppercase">
              <Cpu className="w-3 h-3 text-[#FF6A00]" />
              <span>Platform</span>
            </div>
            <div className="font-mono text-xs font-bold text-[#F8FAFC] mt-1">
              Browser Native
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#11131B]/80 border border-white/5 text-left">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#64748B] uppercase">
              <ShieldAlert className="w-3 h-3 text-[#FF6A00]" />
              <span>Impulse Control</span>
            </div>
            <div className="font-mono text-xs font-bold text-[#FF6A00] mt-1">
              {currentStep.coherence}% ({currentStep.status})
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#11131B]/80 border border-white/5 text-left">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#64748B] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              <span>Entropy Level</span>
            </div>
            <div className="font-mono text-xs font-bold text-[#FF6A00] mt-1">
              {chaosLevel}% Calibrated
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#11131B]/80 border border-white/5 text-left">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#64748B] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#94A3B8]" />
              <span>Built With</span>
            </div>
            <div className="font-mono text-xs font-bold text-[#94A3B8] mt-1">
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
        className="mt-12 flex flex-col items-center gap-2 text-[#64748B] hover:text-[#FF6A00] transition-colors focus:outline-none"
        aria-label="Scroll down to games"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">DISCOVER THE GAMES</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
