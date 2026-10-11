import React, { useEffect, useState } from 'react'
import { sound } from '../../utils/sound'
import { ChaosLogo } from '../brand/ChaosLogo'
import { Volume2, VolumeX, FastForward } from 'lucide-react'

interface StudioSplashRevealProps {
  onComplete: () => void
  isManualReplay?: boolean
}

export const StudioSplashReveal: React.FC<StudioSplashRevealProps> = ({
  onComplete,
  isManualReplay: _isManualReplay = false
}) => {
  const [phase, setPhase] = useState<'calibrating' | 'ignite' | 'reveal' | 'fadeout'>('calibrating')
  const [muted, setMuted] = useState<boolean>(sound.isMuted())
  const [telemetry, setTelemetry] = useState<string>('INIT_CALIBRATION_STANDARD')

  useEffect(() => {
    // Escape key skips intro
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        onComplete()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    // Telemetry steps
    const t1 = setTimeout(() => {
      setTelemetry('QUANTUM_TOLERANCE // CHECK')
      sound.playHover()
    }, 400)

    const t2 = setTimeout(() => {
      setTelemetry('ANOMALY_VECTOR // STABILIZED')
      setPhase('ignite')
      sound.playStudioReveal()
    }, 1000)

    const t3 = setTimeout(() => {
      setTelemetry('CHAOS_STANDARD // CALIBRATED')
      setPhase('reveal')
    }, 1800)

    const t4 = setTimeout(() => {
      setPhase('fadeout')
    }, 3800)

    const t5 = setTimeout(() => {
      onComplete()
    }, 4400)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
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
      className={`fixed inset-0 z-50 bg-[#040508] flex flex-col items-center justify-center cursor-pointer select-none transition-opacity duration-700 ${
        phase === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Chaos Standard Studio Reveal"
    >
      {/* Cinematic letterbox borders */}
      <div className="absolute top-0 left-0 right-0 h-10 sm:h-16 bg-[#000000] z-20 border-b border-white/5 flex items-center justify-between px-6">
        <div className="font-mono text-[10px] tracking-[0.25em] text-[#64748B]">
          SYS.STUDIO_REVEAL // CS-OS-2025
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 font-mono text-[11px] text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
            title="Toggle Audio"
          >
            {muted ? <VolumeX className="w-3.5 h-3.5 text-[#FF2A5F]" /> : <Volume2 className="w-3.5 h-3.5 text-[#00E5FF]" />}
            <span>{muted ? 'MUTED' : 'AUDIO ACTIVE'}</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onComplete()
            }}
            className="flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 rounded bg-white/10 hover:bg-[#F5A623] hover:text-[#090A0F] text-[#F8FAFC] transition-all font-semibold"
          >
            <span>SKIP INTRO</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-16 bg-[#000000] z-20 border-t border-white/5 flex items-center justify-between px-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#F5A623]">
          &gt; {telemetry}
        </div>
        <div className="font-mono text-[10px] text-[#64748B]">
          PRESS [ESC] OR CLICK TO ADVANCE
        </div>
      </div>

      {/* Radial Backlight */}
      <div
        className={`absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-1000 ${
          phase === 'calibrating'
            ? 'bg-[#00E5FF]/10 scale-50'
            : phase === 'ignite'
            ? 'bg-[#F5A623]/25 scale-110'
            : 'bg-[#F5A623]/35 scale-125'
        }`}
      />

      {/* Animated Presentation Card */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl">
        <div
          className={`transition-all duration-700 transform ${
            phase === 'calibrating'
              ? 'opacity-0 scale-75'
              : 'opacity-100 scale-100'
          }`}
        >
          <ChaosLogo variant="splash" theme="dark" />
        </div>

        {/* Status Line */}
        <div
          className={`mt-6 font-mono text-xs tracking-[0.25em] text-[#00E5FF] transition-opacity duration-500 ${
            phase === 'reveal' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          CALIBRATED TO MAXIMUM RIDICULOUS FIDELITY
        </div>
      </div>
    </div>
  )
}
