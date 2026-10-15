import React, { useState } from 'react'
import { ChaosLogo } from '../brand/ChaosLogo'
import { sound } from '../../utils/sound'
import { AlertTriangle, Compass, ExternalLink, RotateCcw } from 'lucide-react'

interface HeroSectionProps {
  chaosLevel: number
  onExploreGames: () => void
  onTriggerAnomaly: () => void
}

const FORBIDDEN_STEPS = [
  { text: '⚠️ Do Not Click', coherence: 94.2, status: 'Stable' },
  { text: 'Hey. I said do not click.', coherence: 78.4, status: 'Frayed' },
  { text: 'Stop touching this button.', coherence: 54.1, status: 'Unstable' },
  { text: 'You are destabilizing the site...', coherence: 29.8, status: 'Critical' },
  { text: 'One more click breaks everything.', coherence: 8.5, status: 'Breach Imminent' },
  { text: '💥 Play "Do Not Press Submit" ↗', coherence: 0.0, status: 'Total Failure' }
]

export const HeroSection: React.FC<HeroSectionProps> = ({
  chaosLevel,
  onExploreGames,
  onTriggerAnomaly
}) => {
  const [clickCount, setClickCount] = useState<number>(0)

  const isCompleted = clickCount >= FORBIDDEN_STEPS.length - 1
  const currentStep = FORBIDDEN_STEPS[Math.min(clickCount, FORBIDDEN_STEPS.length - 1)]

  const handleForbiddenClick = () => {
    if (isCompleted) {
      // Clear payoff: Directly launch the actual game!
      sound.playClick()
      window.open('https://dnps.chaosstandard.com', '_blank', 'noopener,noreferrer')
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

  const [logoWiggle, setLogoWiggle] = useState<boolean>(false)

  const handleLogoClick = () => {
    sound.playHover()
    setLogoWiggle(true)
    setTimeout(() => setLogoWiggle(false), 500)
  }

  const isHighChaos = chaosLevel >= 70
  const isMaxChaos = chaosLevel >= 95

  const getStatusBadgeText = () => {
    if (clickCount > 0) {
      return `REALITY COHERENCE: ${currentStep.coherence}% // ${currentStep.status.toUpperCase()}`
    }
    if (isMaxChaos) {
      return 'WARNING: MAXIMUM CHAOS ENGAGED // FOURTH WALL COMPROMISED'
    }
    if (isHighChaos) {
      return `ENTROPY ELEVATED (${chaosLevel}%) // TERMINAL GETTING NERVOUS`
    }
    if (chaosLevel <= 10) {
      return 'STRICT STANDARD MODE // SUSPICIOUSLY CALM'
    }
    return 'ZERO INSTALL'
  }

  return (
    <section id="hero" className="relative w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 py-4 overflow-hidden">
      {/* Background Radial Glow - Scales dynamically with Chaos Calibrator */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] pointer-events-none -z-10 transition-all duration-500"
        style={{
          width: `${520 + chaosLevel * 2.5}px`,
          height: `${520 + chaosLevel * 2.5}px`,
          background: `radial-gradient(circle, rgba(255,106,0,${0.12 + (chaosLevel / 100) * 0.18}) 0%, rgba(245,166,35,${0.05 + (chaosLevel / 100) * 0.1}) 50%, transparent 75%)`
        }}
      />

      {/* Calibration Tag */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#11131B]/90 border text-[11px] sm:text-xs font-mono mb-4 sm:mb-5 shadow-lg backdrop-blur-md transition-all duration-300 ${
          isHighChaos || clickCount > 0
            ? 'border-[#FF6A00]/50 text-[#F5A623] shadow-[#FF6A00]/15'
            : 'border-white/10 text-[#94A3B8]'
        }`}
      >
        <span className={`w-2 h-2 rounded-full bg-[#FF6A00] ${isHighChaos ? 'animate-ping' : 'animate-pulse'}`} />
        <span className="text-[#FF6A00] font-semibold">BROWSER GAMES MADE WITH AI</span>
        <span className="text-white/20">//</span>
        <span className={isHighChaos || clickCount > 0 ? 'text-[#F5A623] font-semibold' : ''}>
          {getStatusBadgeText()}
        </span>
      </div>

      {/* Main Emblem Showcase with Independent Mascot Reaction & Chaos Reactivity */}
      <div 
        className="relative mb-4 sm:mb-5 group cursor-pointer select-none" 
        onClick={handleLogoClick} 
        title="Click to poke the Chaos Standard Terminal"
      >
        <div
          className={`w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 relative z-10 transition-transform duration-300 group-hover:scale-105 active:scale-95 ${
            logoWiggle ? 'animate-bounce' : isMaxChaos ? 'animate-pulse scale-105' : ''
          }`}
          style={{
            transform: isHighChaos && !logoWiggle
              ? `rotate(${chaosLevel >= 90 ? '-2.5deg' : '1.5deg'}) scale(${1 + (chaosLevel - 60) * 0.0015})`
              : undefined,
            filter: `drop-shadow(0 0 ${8 + Math.round(chaosLevel * 0.25)}px rgba(255, 106, 0, ${0.2 + (chaosLevel / 100) * 0.45}))`
          }}
        >
          <ChaosLogo variant="symbol" theme="dark" interactive={false} />
        </div>
        <div
          className="absolute inset-0 bg-[#FF6A00]/25 rounded-full blur-2xl transition-opacity duration-500 -z-10"
          style={{ opacity: Math.max(0.15, chaosLevel / 100) }}
        />
      </div>

      {/* Monumental Headline */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.1] mb-3 sm:mb-4">
          UNCONVENTIONAL{' '}
          <span
            className="bg-gradient-to-r from-[#FF8C33] via-[#F5A623] to-[#FF6A00] bg-clip-text text-transparent transition-all duration-300"
            style={{
              filter: isHighChaos ? 'drop-shadow(0 0 18px rgba(255, 106, 0, 0.35))' : undefined
            }}
          >
            BROWSER GAMES
          </span>{' '}
          MADE WITH AI.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 font-normal">
          A collection of browser games created with AI. Unconventional mechanics, fourth-wall breaks, and software that probably has opinions about you. Instant play, zero install.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {/* Explore Games Button */}
          <button
            onClick={() => {
              sound.playClick()
              onExploreGames()
            }}
            className="flex-shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#E65500] text-[#05070A] font-bold text-base hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#FF6A00]/25 cursor-pointer whitespace-nowrap"
          >
            <Compass className="w-5 h-5 text-[#05070A]" />
            <span>Explore Games</span>
          </button>

          {/* Simple "Do Not Click" Challenge Button */}
          <div className="relative flex items-center gap-1.5 flex-shrink-0">
            {isCompleted && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-0.5 rounded-full bg-[#FF6A00] text-[#05070A] font-mono text-[10px] font-extrabold uppercase shadow-md animate-bounce pointer-events-none">
                Zero Self-Control!
              </div>
            )}
            <button
              onClick={handleForbiddenClick}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base transition-all cursor-pointer whitespace-nowrap ${
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
                <AlertTriangle className="w-5 h-5 text-[#FF6A00]" />
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
        </div>
      </div>
    </section>
  )
}
