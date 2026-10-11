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

  // Small 32x32 mark
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
        <rect width="32" height="32" rx="7" fill={isLight ? '#FFFFFF' : '#090A0F'} stroke={isLight ? '#CBD5E1' : '#232736'} />
        <circle cx="16" cy="16" r="13" stroke={isLight ? '#D97706' : '#F5A623'} strokeWidth="1.2" strokeOpacity="0.8" />
        <circle cx="16" cy="16" r="10" stroke={isLight ? '#0284C7' : '#00E5FF'} strokeWidth="0.8" strokeOpacity="0.5" />
        <path d="M 16 7 L 24 21 L 20 21 L 16 14 L 12 21 L 14 21 L 16 17 Z" fill={isLight ? '#D97706' : '#F5A623'} />
        <path d="M 24 21 L 8 21 L 10 18 L 20 18 L 16 11 L 18 11 Z" fill={isLight ? '#0284C7' : '#00E5FF'} />
        <path d="M 8 21 L 16 7 L 18 11 L 12 21 Z" fill={isLight ? '#0F172A' : '#334155'} />
        <circle cx="16" cy="15.5" r="1.5" fill={isLight ? '#0F172A' : '#FFFFFF'} />
      </svg>
    )
  }

  // Standalone Symbol (1:1)
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
          className="w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_25px_rgba(245,166,35,0.4)]"
          role="img"
          aria-label="Chaos Standard Symbol"
        >
          <defs>
            <radialGradient id={`symVoid-${theme}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={isLight ? '#FFFFFF' : '#1E2235'} stopOpacity={isLight ? '1' : '0.8'} />
              <stop offset="60%" stopColor={isLight ? '#F1F5F9' : '#0E1017'} stopOpacity="0.95" />
              <stop offset="100%" stopColor={isLight ? '#E2E8F0' : '#07080B'} stopOpacity="1" />
            </radialGradient>

            <linearGradient id={`symGold-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#D97706' : '#FFE072'} />
              <stop offset="50%" stopColor={isLight ? '#B45309' : '#F5A623'} />
              <stop offset="100%" stopColor={isLight ? '#92400E' : '#D97706'} />
            </linearGradient>

            <linearGradient id={`symCyan-${theme}`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#0284C7' : '#67E8F9'} />
              <stop offset="50%" stopColor={isLight ? '#0369A1' : '#00E5FF'} />
              <stop offset="100%" stopColor={isLight ? '#075985' : '#0284C7'} />
            </linearGradient>

            <linearGradient id={`symObsidian-${theme}`} x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#0F172A' : '#334155'} />
              <stop offset="50%" stopColor={isLight ? '#020617' : '#1E293B'} />
              <stop offset="100%" stopColor={isLight ? '#000000' : '#0F172A'} />
            </linearGradient>
          </defs>

          {/* Outer Base */}
          <rect
            width="512"
            height="512"
            rx="104"
            fill={`url(#symVoid-${theme})`}
            stroke={isLight ? '#CBD5E1' : '#F5A623'}
            strokeWidth="2"
            strokeOpacity={isLight ? '0.8' : '0.2'}
          />

          {/* Outer Calibration Dial: The Standard */}
          <circle cx="256" cy="256" r="216" stroke={isLight ? '#94A3B8' : '#94A3B8'} strokeWidth="1" strokeOpacity={isLight ? '0.5' : '0.25'} strokeDasharray="2 6" />
          <circle cx="256" cy="256" r="196" stroke={isLight ? '#D97706' : '#F5A623'} strokeWidth="1.5" strokeOpacity={isLight ? '0.6' : '0.4'} />
          <circle cx="256" cy="256" r="182" stroke={isLight ? '#0284C7' : '#00E5FF'} strokeWidth="1" strokeOpacity={isLight ? '0.4' : '0.25'} strokeDasharray="60 30" />

          {/* Cardinal Calibration Reticle Axes */}
          <line x1="256" y1="36" x2="256" y2="72" stroke={isLight ? '#D97706' : '#F5A623'} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="256" y1="440" x2="256" y2="476" stroke={isLight ? '#D97706' : '#F5A623'} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="36" y1="256" x2="72" y2="256" stroke={isLight ? '#0284C7' : '#00E5FF'} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="440" y1="256" x2="476" y2="256" stroke={isLight ? '#0284C7' : '#00E5FF'} strokeWidth="2.5" strokeLinecap="round" />

          {/* Degree Ticks */}
          <circle cx="256" cy="50" r="3" fill={isLight ? '#0284C7' : '#00E5FF'} />
          <circle cx="462" cy="256" r="3" fill={isLight ? '#D97706' : '#F5A623'} />
          <circle cx="256" cy="462" r="3" fill={isLight ? '#0284C7' : '#00E5FF'} />
          <circle cx="50" cy="256" r="3" fill={isLight ? '#D97706' : '#F5A623'} />

          {/* Central Impossible Geometric Chiral Delta */}
          <path
            d="M 256 100 L 386 325 L 326 325 L 256 204 L 186 325 L 216 325 L 256 256 Z"
            fill={`url(#symGold-${theme})`}
            opacity="0.95"
          />
          <path
            d="M 386 325 L 126 325 L 156 273 L 326 273 L 256 152 L 286 152 Z"
            fill={`url(#symCyan-${theme})`}
            opacity="0.92"
          />
          <path
            d="M 126 325 L 256 100 L 286 152 L 186 325 Z"
            fill={`url(#symObsidian-${theme})`}
            stroke={isLight ? '#0284C7' : '#00E5FF'}
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Overlap facets */}
          <path d="M 256 100 L 226 152 L 256 204 L 286 152 Z" fill={isLight ? '#F59E0B' : '#FFE072'} opacity="0.9" />
          <path d="M 326 273 L 386 325 L 340 348 L 296 296 Z" fill={isLight ? '#0369A1' : '#0284C7'} opacity="0.85" />
          <path d="M 126 325 L 170 348 L 216 325 L 156 273 Z" fill={isLight ? '#E11D48' : '#FF1E56'} opacity="0.9" />

          {/* Central Singularity */}
          <circle cx="256" cy="245" r="14" fill={isLight ? '#0F172A' : '#FFFFFF'} />
          <circle cx="256" cy="245" r="7" fill={isLight ? '#FFFFFF' : '#090A0F'} />
          <circle cx="256" cy="245" r="3" fill={isLight ? '#D97706' : '#00E5FF'} />

          {/* Degree Coordinates */}
          <text x="256" y="90" fill={isLight ? '#B45309' : '#F5A623'} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700" letterSpacing="2" textAnchor="middle">000°</text>
          <text x="420" y="260" fill={isLight ? '#64748B' : '#94A3B8'} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700" letterSpacing="2" textAnchor="middle">090°</text>
          <text x="256" y="430" fill={isLight ? '#64748B' : '#94A3B8'} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700" letterSpacing="2" textAnchor="middle">180°</text>
          <text x="92" y="260" fill={isLight ? '#0284C7' : '#00E5FF'} fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="700" letterSpacing="2" textAnchor="middle">270°</text>
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
        <div className="w-28 h-28 mb-5 transition-transform duration-500 group-hover:scale-105">
          <ChaosLogo variant="symbol" theme={theme} />
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.35em] text-[#00E5FF] mb-2 font-bold">
          Independent Game Studio
        </div>
        <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-[0.18em] text-[#F8FAFC]">
          CHAOS STANDARD
        </div>
        {showTagline && (
          <div className="text-xs sm:text-sm tracking-[0.12em] text-[#94A3B8] mt-2 max-w-sm uppercase font-medium">
            We take making ridiculous things extremely seriously.
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
        <div className="font-mono text-sm tracking-[0.45em] text-[#00E5FF] mb-6 uppercase font-bold">
          A
        </div>
        <div className="w-36 h-36 sm:w-44 sm:h-44 mb-8 drop-shadow-[0_0_40px_rgba(245,166,35,0.3)]">
          <ChaosLogo variant="symbol" theme="dark" />
        </div>
        <div className="font-display text-4xl sm:text-6xl font-extrabold tracking-[0.25em] text-[#F8FAFC]">
          CHAOS STANDARD
        </div>
        <div className="font-mono text-xl sm:text-2xl font-bold tracking-[0.35em] text-[#F5A623] mt-3">
          GAME
        </div>
        <div className="text-xs sm:text-sm tracking-[0.15em] text-[#64748B] mt-6 uppercase">
          We take making ridiculous things extremely seriously.
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
          <span className={`font-display text-base sm:text-lg font-extrabold tracking-[0.18em] uppercase ${isLight ? 'text-[#0F172A]' : 'text-[#F8FAFC]'}`}>
            CHAOS STANDARD
          </span>
          <span className="hidden sm:inline-block font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] font-bold">
            STUDIO
          </span>
        </div>
        {showTagline && (
          <span className="font-mono text-[10px] tracking-[0.08em] text-[#94A3B8] hidden md:block">
            INDEPENDENT GAMES // ZERO INSTALL
          </span>
        )}
      </div>
    </div>
  )
}
