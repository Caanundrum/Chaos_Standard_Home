import React, { useEffect, useState } from 'react'
import { sound } from '../../utils/sound'
import { Volume2, VolumeX, FastForward } from 'lucide-react'

interface StudioSplashRevealProps {
  onComplete: () => void
  isManualReplay?: boolean
}

export const StudioSplashReveal: React.FC<StudioSplashRevealProps> = ({
  onComplete,
  isManualReplay: _isManualReplay = false
}) => {
  // Animation phases:
  // 1. 'degauss': Pitch black, CRT line collapses open
  // 2. 'terminal': Terminal drops in, bewildered face awakens
  // 3. 'strike': Electric lightning strikes, CHAOS slams in, STANDARD locks in
  // 4. 'settle': Full master logo illuminated
  // 5. 'fadeout': Smooth transition to site
  const [phase, setPhase] = useState<'degauss' | 'terminal' | 'strike' | 'settle' | 'fadeout'>('degauss')
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

    // Timeline Choreography
    const t1 = setTimeout(() => {
      setTelemetry('CRT_PHOSPHOR // STABILIZING')
      sound.playGlitch()
    }, 350)

    const t2 = setTimeout(() => {
      setPhase('terminal')
      setTelemetry('BEWILDERED_AI_INTERFACE // ONLINE')
      sound.playHover()
    }, 750)

    const t3 = setTimeout(() => {
      setPhase('strike')
      setTelemetry('CHAOS_STANDARD // COGNITIVE_DISSONANCE_NOMINAL')
      sound.playStudioReveal()
    }, 1500)

    const t4 = setTimeout(() => {
      setPhase('settle')
      setTelemetry('CHAOS_STANDARD // CALIBRATION_COMPLETE')
    }, 2400)

    const t5 = setTimeout(() => {
      setPhase('fadeout')
    }, 3900)

    const t6 = setTimeout(() => {
      onComplete()
    }, 4500)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)
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

  return (
    <div
      onClick={onComplete}
      className={`fixed inset-0 z-50 bg-[#05070A] flex flex-col items-center justify-center cursor-pointer select-none transition-opacity duration-700 ${
        phase === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Chaos Standard Reveal"
    >
      {/* Cinematic Letterbox Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-[#030406] z-20 border-b border-white/5 flex items-center justify-between px-6">
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

      {/* Cinematic Letterbox Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-[#030406] z-20 border-t border-white/5 flex items-center justify-between px-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#FF6A00]">
          &gt; {telemetry}
        </div>
        <div className="font-mono text-[10px] text-[#64748B]">
          PRESS [ESC] OR CLICK ANYWHERE
        </div>
      </div>

      {/* Radial Orange Backlight Pulse */}
      <div
        className={`absolute w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
          phase === 'degauss'
            ? 'bg-[#FF6A00]/5 scale-50 opacity-40'
            : phase === 'terminal'
            ? 'bg-[#FF6A00]/15 scale-90 opacity-70'
            : phase === 'strike'
            ? 'bg-[#FF6A00]/35 scale-120 opacity-100'
            : 'bg-[#FF6A00]/25 scale-100 opacity-90'
        }`}
      />

      {/* Phase 1: CRT Horizontal Degauss Line */}
      {phase === 'degauss' && (
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="w-48 sm:w-80 h-1 bg-[#FF6A00] shadow-[0_0_25px_#FF6A00] animate-pulse" />
        </div>
      )}

      {/* The Animated Logo Reveal Stage */}
      {phase !== 'degauss' && (
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl">
          {/* 1. Terminal Monitor Drops In */}
          <div
            className={`w-44 sm:w-56 transition-all duration-700 ease-out transform ${
              phase === 'terminal'
                ? 'opacity-100 scale-100 translate-y-0 animate-bounce-subtle'
                : 'opacity-100 scale-100 translate-y-0'
            }`}
          >
            <img
              src="/brand/chaos-mark-symbol.png"
              alt="Chaos Standard Terminal"
              className="w-full h-auto object-contain filter drop-shadow(0 15px 35px rgba(255,106,0,0.4))"
            />
          </div>

          {/* 2. Lightning Strikes & Exact CHAOS STANDARD Wordmark Slams In */}
          <div
            className={`mt-4 w-72 sm:w-96 transition-all duration-500 transform ${
              phase === 'terminal'
                ? 'opacity-0 translate-y-8 scale-90'
                : 'opacity-100 translate-y-0 scale-100 animate-in zoom-in-95'
            }`}
          >
            <img
              src="/brand/chaos-wordmark.png"
              alt="Chaos Standard Wordmark"
              className="w-full h-auto object-contain filter drop-shadow(0 10px 25px rgba(0,0,0,0.9))"
            />
          </div>

          {/* Status Subtitle */}
          <div
            className={`mt-6 font-mono text-xs tracking-[0.3em] text-[#94A3B8] transition-opacity duration-500 ${
              phase === 'settle' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            BROWSER-NATIVE EXPERIENCES
          </div>
        </div>
      )}
    </div>
  )
}
