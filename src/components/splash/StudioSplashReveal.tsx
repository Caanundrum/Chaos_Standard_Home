import React, { useEffect, useState } from 'react'
import { sound } from '../../utils/sound'
import { Volume2, VolumeX, FastForward } from 'lucide-react'

interface StudioSplashRevealProps {
  onComplete: () => void
  isManualReplay?: boolean
}

type AnimationStep =
  | 'idle'       // Pitch black void
  | 'beam'       // Cathode ray streaks horizontally
  | 'blossom'    // Beam expands vertically, pulling monitor into view
  | 'stabilize'  // Monitor fully opened, raster stabilized
  | 'wordmark'   // Wordmark smoothly glides up with electric shockwave
  | 'complete'   // Master logo settled in harmony
  | 'fadeout'    // Smooth fade to site

export const StudioSplashReveal: React.FC<StudioSplashRevealProps> = ({
  onComplete,
  isManualReplay: _isManualReplay = false
}) => {
  const [step, setStep] = useState<AnimationStep>('idle')
  const [muted, setMuted] = useState<boolean>(sound.isMuted())
  const [telemetry, setTelemetry] = useState<string>('SYS.BOOT_SEQUENCE // CRT_WARMUP')

  useEffect(() => {
    // Keyboard skip (Escape, Space, Enter)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        onComplete()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    // Coordinated Continuous Timeline:
    // 1. Ignite horizontal phosphor beam
    const t1 = setTimeout(() => {
      setStep('beam')
      setTelemetry('ELECTRON_BEAM // STABILIZING HORIZONTAL SWEEP')
      sound.playGlitch()
    }, 200)

    // 2. Deflection coils open: Beam expands vertically into monitor
    const t2 = setTimeout(() => {
      setStep('blossom')
      setTelemetry('DEFLECTION_COILS // RASTER EXPANSION NOMINAL')
    }, 650)

    // 3. Monitor fully materialized
    const t3 = setTimeout(() => {
      setStep('stabilize')
      setTelemetry('BEWILDERED_AI_INTERFACE // ONLINE')
      sound.playHover()
    }, 1250)

    // 4. Wordmark glides up smoothly with electric chord
    const t4 = setTimeout(() => {
      setStep('wordmark')
      setTelemetry('CHAOS_STANDARD // COGNITIVE_DISSONANCE_NOMINAL')
      sound.playStudioReveal()
    }, 1650)

    // 5. Complete settled lockup
    const t5 = setTimeout(() => {
      setStep('complete')
      setTelemetry('CHAOS_STANDARD // CALIBRATION_COMPLETE')
    }, 2450)

    // 6. Smooth dissolve to site
    const t6 = setTimeout(() => {
      setStep('fadeout')
    }, 3850)

    // 7. Done
    const t7 = setTimeout(() => {
      onComplete()
    }, 4450)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)
      clearTimeout(t7)
    }
  }, [onComplete])

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation()
    const next = sound.toggleMute()
    setMuted(next)
    if (!next) {
      sound.playClick()
    }
  }

  const isRevealed = step !== 'idle' && step !== 'beam'
  const isWordmarkVisible = step === 'wordmark' || step === 'complete' || step === 'fadeout'

  return (
    <div
      onClick={onComplete}
      className={`fixed inset-0 z-50 bg-[#05070A] flex flex-col items-center justify-center cursor-pointer select-none transition-opacity duration-700 ${
        step === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Chaos Standard Reveal"
    >
      {/* Top Telemetry Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-[#030406]/90 backdrop-blur-md z-20 border-b border-white/5 flex items-center justify-between px-6">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#94A3B8]">
          CHAOS_STANDARD // REVEAL_SEQUENCE
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 font-mono text-[11px] text-[#94A3B8] hover:text-[#FF6A00] transition-colors"
            title="Toggle Audio"
          >
            {muted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#FF6A00]" />}
            <span>{muted ? 'MUTED' : 'AUDIO ACTIVE'}</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onComplete()
            }}
            className="flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 rounded bg-white/10 hover:bg-[#FF6A00] hover:text-[#05070A] text-[#F8FAFC] transition-all font-semibold"
          >
            <span>SKIP INTRO</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-[#030406]/90 backdrop-blur-md z-20 border-t border-white/5 flex items-center justify-between px-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#FF6A00]">
          &gt; {telemetry}
        </div>
        <div className="font-mono text-[10px] text-[#64748B]">
          PRESS [ESC] OR CLICK ANYWHERE
        </div>
      </div>

      {/* Ambient Orange Radial Backlight */}
      <div
        className={`absolute w-[720px] h-[720px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
          step === 'idle'
            ? 'opacity-0 scale-50'
            : step === 'beam'
            ? 'bg-[#FF6A00]/10 opacity-40 scale-75'
            : step === 'blossom'
            ? 'bg-[#FF6A00]/25 opacity-70 scale-95'
            : step === 'wordmark'
            ? 'bg-[#FF6A00]/35 opacity-90 scale-110'
            : 'bg-[#FF6A00]/20 opacity-80 scale-100'
        }`}
      />

      {/* The Unified Reveal Stage */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl">
        {/* Terminal Monitor Unit */}
        <div className="relative w-48 sm:w-56 flex items-center justify-center">
          {/* Monitor Graphic: Continuous reveal from the electron beam */}
          <div
            style={{
              clipPath: isRevealed ? 'inset(0% 0% 0% 0%)' : 'inset(49.2% 0% 49.2% 0%)',
              transition: 'clip-path 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease-out',
              opacity: step === 'idle' ? 0 : step === 'beam' ? 0.35 : 1
            }}
            className="w-full h-auto filter drop-shadow(0 15px 35px rgba(255,106,0,0.35))"
          >
            <img
              src="/brand/chaos-mark-symbol.png"
              alt="Chaos Standard Terminal"
              className="w-full h-auto object-contain block"
            />
          </div>

          {/* CRT Deflection Electron Beam: Streaks horizontally, then blooms open vertically */}
          <div
            style={{
              transform: step === 'idle' ? 'scaleX(0)' : 'scaleX(1)',
              opacity:
                step === 'idle'
                  ? 0
                  : step === 'beam'
                  ? 1
                  : step === 'blossom'
                  ? 0.4
                  : 0,
              height: step === 'blossom' || step === 'stabilize' || step === 'wordmark' || step === 'complete' ? '92%' : '3px',
              transition:
                step === 'beam'
                  ? 'transform 420ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease'
                  : 'height 620ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms ease-out'
            }}
            className="absolute inset-x-2 top-1/2 -translate-y-1/2 bg-[#FF6A00] pointer-events-none shadow-[0_0_25px_#FF6A00,0_0_50px_#FF6A00] rounded-lg"
          />
        </div>

        {/* Wordmark Unit: Smooth fluid slide-up directly beneath terminal */}
        <div
          style={{
            transform: isWordmarkVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.95)',
            opacity: isWordmarkVisible ? 1 : 0,
            transition: 'transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms ease-out'
          }}
          className="mt-3 w-72 sm:w-96"
        >
          <img
            src="/brand/chaos-wordmark.png"
            alt="Chaos Standard Wordmark"
            className="w-full h-auto object-contain filter drop-shadow(0 10px 25px rgba(0,0,0,0.9))"
          />
        </div>

        {/* Subtitle Telemetry Line */}
        <div
          style={{
            opacity: step === 'complete' || step === 'fadeout' ? 1 : 0,
            transition: 'opacity 600ms ease-out'
          }}
          className="mt-6 font-mono text-[11px] tracking-[0.3em] text-[#94A3B8]"
        >
          BROWSER-NATIVE EXPERIENCES
        </div>
      </div>
    </div>
  )
}
