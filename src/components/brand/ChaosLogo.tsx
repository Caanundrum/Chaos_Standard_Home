import React from 'react'
import { sound } from '../../utils/sound'

interface ChaosLogoProps {
  variant?: 'symbol' | 'horizontal' | 'stacked' | 'small' | 'splash'
  theme?: 'dark' | 'light'
  className?: string
  interactive?: boolean
  showTagline?: boolean
  onClick?: () => void
}

export const ChaosLogo: React.FC<ChaosLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  interactive = false,
  showTagline = true,
  onClick
}) => {
  const isLight = theme === 'light'

  const handleMouseEnter = () => {
    if (interactive) {
      sound.playHover()
    }
  }

  const handleClick = () => {
    if (interactive) {
      sound.playClick()
    }
    if (onClick) {
      onClick()
    }
  }

  // Small 32x32 mark (High readability, zero clutter)
  if (variant === 'small') {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className={`w-8 h-8 ${interactive ? 'cursor-pointer transition-transform hover:scale-105' : ''} ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        role="img"
        aria-label="Chaos Standard Small Mark"
      >
        <rect width="32" height="32" rx="7" fill={isLight ? '#FFFFFF' : '#07090E'} stroke={isLight ? '#CBD5E1' : '#161C26'} strokeWidth="0.75" />
        <g transform="rotate(-15, 16, 16)">
          <rect
            x="8"
            y="8"
            width="16"
            height="16"
            rx="5"
            stroke={isLight ? '#0891B2' : '#6EE7FF'}
            strokeWidth="1.2"
            fill={isLight ? '#0891B2' : '#6EE7FF'}
            fillOpacity="0.12"
          />
          <rect x="10" y="8.5" width="2.5" height="2.5" rx="0.5" fill={isLight ? '#0891B2' : '#6EE7FF'} />
          <g transform="translate(20, 20) rotate(25)">
            <rect x="-1" y="-2.5" width="2" height="5" rx="0.8" fill={isLight ? '#D97706' : '#FF9F43'} />
          </g>
        </g>
      </svg>
    )
  }

  // Standalone Symbol (512x512) - Dimensional Outline with Depth
  if (variant === 'symbol') {
    return (
      <div
        className={`relative inline-flex items-center justify-center ${interactive ? 'group cursor-pointer' : ''} ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <svg
          viewBox="0 0 512 512"
          fill="none"
          className="w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_30px_rgba(110,231,255,0.35)]"
          role="img"
          aria-label="Chaos Standard Symbol"
        >
          {/* Base Container */}
          <rect
            width="512"
            height="512"
            rx="96"
            fill={isLight ? '#FFFFFF' : '#07090E'}
            stroke={isLight ? '#E2E8F0' : '#161C26'}
            strokeWidth="2"
          />

          {/* Outer Faint Alignment Rings */}
          <circle cx="256" cy="256" r="195" stroke={isLight ? '#0891B2' : '#6EE7FF'} strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="6 10" />
          <circle cx="256" cy="256" r="172" stroke={isLight ? '#0891B2' : '#6EE7FF'} strokeOpacity="0.2" strokeWidth="1" />

          {/* Tilted Dimensional Wireframe Squircle */}
          <g transform="rotate(-15, 256, 256)">
            {/* Outer Wireframe */}
            <rect
              x="146"
              y="146"
              width="220"
              height="220"
              rx="62"
              stroke={isLight ? '#0891B2' : '#6EE7FF'}
              strokeWidth="5"
              fill="none"
            />

            {/* Inset Depth Core with Translucent Fill */}
            <rect
              x="181"
              y="181"
              width="150"
              height="150"
              rx="42"
              fill={isLight ? '#0891B2' : '#6EE7FF'}
              fillOpacity={isLight ? '0.08' : '0.12'}
              stroke={isLight ? '#0891B2' : '#6EE7FF'}
              strokeWidth="2.5"
              strokeOpacity="0.6"
            />

            {/* Dimensional Corner Struts */}
            <line x1="172" y1="172" x2="198" y2="198" stroke={isLight ? '#0891B2' : '#6EE7FF'} strokeWidth="2" strokeOpacity="0.5" />
            <line x1="340" y1="172" x2="314" y2="198" stroke={isLight ? '#0891B2' : '#6EE7FF'} strokeWidth="2" strokeOpacity="0.5" />
            <line x1="172" y1="340" x2="198" y2="314" stroke={isLight ? '#0891B2' : '#6EE7FF'} strokeWidth="2" strokeOpacity="0.5" />
            <line x1="340" y1="340" x2="314" y2="314" stroke={isLight ? '#0891B2' : '#6EE7FF'} strokeWidth="2" strokeOpacity="0.5" />

            {/* Docked Piece 1: Top-Left Cyan Chip */}
            <rect
              x="165"
              y="148"
              width="24"
              height="24"
              rx="6"
              fill={isLight ? '#0891B2' : '#6EE7FF'}
            />

            {/* Docked Piece 2: Bottom-Right Warning Bar (The Controlled Anomaly) */}
            <g transform="translate(322, 318) rotate(25)">
              <rect
                x="-11"
                y="-30"
                width="22"
                height="60"
                rx="7"
                fill={isLight ? '#D97706' : '#FF9F43'}
                stroke={isLight ? '#FFFFFF' : '#07090E'}
                strokeWidth="2"
              />
            </g>
          </g>
        </svg>
      </div>
    )
  }

  // Stacked Logo (Centered Symbol + Stacked Wordmark)
  if (variant === 'stacked') {
    return (
      <div
        className={`flex flex-col items-center text-center ${interactive ? 'group cursor-pointer' : ''} ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <div className="w-24 h-24 mb-5 transition-transform duration-300 group-hover:scale-105">
          <ChaosLogo variant="symbol" theme={theme} />
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.35em] text-[#6EE7FF] mb-2 font-bold">
          BROWSER GAMES × AI
        </div>
        <div className={`font-display text-3xl sm:text-4xl font-extrabold tracking-[0.18em] ${isLight ? 'text-[#0F172A]' : 'text-[#F8FAFC]'}`}>
          CHAOS STANDARD
        </div>
        {showTagline && (
          <div className="text-xs sm:text-sm tracking-[0.1em] text-[#94A3B8] mt-2 max-w-sm uppercase font-medium">
            Unconventional browser experiments made with AI.
          </div>
        )}
      </div>
    )
  }

  // Splash Screen Format (A Chaos Standard Game)
  if (variant === 'splash') {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <div className="font-mono text-sm tracking-[0.45em] text-[#6EE7FF] mb-6 uppercase font-bold">
          A
        </div>
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-8 drop-shadow-[0_0_35px_rgba(110,231,255,0.35)]">
          <ChaosLogo variant="symbol" theme="dark" />
        </div>
        <div className="font-display text-4xl sm:text-6xl font-extrabold tracking-[0.24em] text-[#F8FAFC]">
          CHAOS STANDARD
        </div>
        <div className="font-mono text-lg sm:text-xl font-bold tracking-[0.3em] text-[#6EE7FF] mt-3">
          GAME
        </div>
        <div className="text-xs sm:text-sm tracking-[0.15em] text-[#94A3B8] mt-6 uppercase">
          Unconventional browser games made with AI.
        </div>
      </div>
    )
  }

  // Default: Horizontal Lockup
  return (
    <div
      className={`inline-flex items-center gap-3 sm:gap-4 select-none ${interactive ? 'group cursor-pointer' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        <ChaosLogo variant="symbol" theme={theme} />
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-2">
          <span className={`font-display text-base sm:text-lg font-extrabold tracking-[0.16em] uppercase ${isLight ? 'text-[#0F172A]' : 'text-[#F8FAFC]'}`}>
            CHAOS STANDARD
          </span>
          <span className="hidden sm:inline-block font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#6EE7FF]/10 border border-[#6EE7FF]/30 text-[#6EE7FF] font-bold">
            AI GAMES
          </span>
        </div>
        {showTagline && (
          <span className="font-mono text-[10px] tracking-[0.08em] text-[#94A3B8] hidden md:block">
            BROWSER EXPERIMENTS
          </span>
        )}
      </div>
    </div>
  )
}
