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
        <rect width="32" height="32" rx="7" fill={isLight ? '#FFFFFF' : '#090A0F'} stroke={isLight ? '#CBD5E1' : '#232736'} strokeWidth="0.75" />
        <path d="M 16 4.5 L 27.5 24 L 22.5 24 L 16 12 L 18.2 8 Z" fill={isLight ? '#D97706' : '#F5A623'} />
        <path d="M 27.5 24 L 4.5 24 L 7 20 L 20 20 L 22.5 24 Z" fill={isLight ? '#0284C7' : '#00E5FF'} />
        <path d="M 4.5 24 L 16 4.5 L 18.2 8 L 11.5 20 L 7 20 Z" fill={isLight ? '#0F172A' : '#F8FAFC'} />
      </svg>
    )
  }

  // Standalone Symbol (512x512) - Pure, clean, bold impossible delta
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
          className="w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_30px_rgba(245,166,35,0.35)]"
          role="img"
          aria-label="Chaos Standard Symbol"
        >
          {/* Rounded Canvas Container */}
          <rect
            width="512"
            height="512"
            rx="96"
            fill={isLight ? '#FFFFFF' : '#090A0F'}
            stroke={isLight ? '#E2E8F0' : '#232736'}
            strokeWidth="2"
          />

          {/* The Impossible Delta (Clean 3-piece geometry) */}
          {/* Beam 1: Standard Gold */}
          <path
            d="M 256 41 L 443 364 L 368 364 L 256 170 L 293 105 Z"
            fill={isLight ? '#D97706' : '#F5A623'}
          />
          {/* Beam 2: Spectral Cyan */}
          <path
            d="M 443 364 L 69 364 L 106 299 L 331 299 L 368 364 Z"
            fill={isLight ? '#0284C7' : '#00E5FF'}
          />
          {/* Beam 3: Titanium White / Obsidian */}
          <path
            d="M 69 364 L 256 41 L 293 105 L 181 299 L 106 299 Z"
            fill={isLight ? '#0F172A' : '#F8FAFC'}
          />
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
        <div className="font-mono text-xs uppercase tracking-[0.35em] text-[#00E5FF] mb-2 font-bold">
          INDEPENDENT GAME STUDIO
        </div>
        <div className={`font-display text-3xl sm:text-4xl font-extrabold tracking-[0.16em] ${isLight ? 'text-[#0F172A]' : 'text-[#F8FAFC]'}`}>
          CHAOS STANDARD
        </div>
        {showTagline && (
          <div className="text-xs sm:text-sm tracking-[0.1em] text-[#94A3B8] mt-2 max-w-sm uppercase font-medium">
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
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-8 drop-shadow-[0_0_35px_rgba(245,166,35,0.3)]">
          <ChaosLogo variant="symbol" theme="dark" />
        </div>
        <div className="font-display text-4xl sm:text-6xl font-extrabold tracking-[0.22em] text-[#F8FAFC]">
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
          <span className={`font-display text-base sm:text-lg font-extrabold tracking-[0.16em] uppercase ${isLight ? 'text-[#0F172A]' : 'text-[#F8FAFC]'}`}>
            CHAOS STANDARD
          </span>
          <span className="hidden sm:inline-block font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] font-bold">
            STUDIO
          </span>
        </div>
        {showTagline && (
          <span className="font-mono text-[10px] tracking-[0.08em] text-[#94A3B8] hidden md:block">
            INDEPENDENT GAME STUDIO
          </span>
        )}
      </div>
    </div>
  )
}
