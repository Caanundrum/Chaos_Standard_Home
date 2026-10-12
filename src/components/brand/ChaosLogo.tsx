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
  theme: _theme = 'dark',
  className = '',
  interactive = false,
  showTagline: _showTagline = true,
  onClick
}) => {
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

  // Small micro-mark (32x32 / 40x40)
  if (variant === 'small') {
    return (
      <div
        className={`relative inline-flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden border border-[#FF6A00]/40 bg-[#080A0F] shadow-sm ${
          interactive ? 'cursor-pointer transition-transform hover:scale-110 active:scale-95' : ''
        } ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        role="img"
        aria-label="Chaos Standard Icon"
      >
        <img
          src="/brand/chaos-mark-symbol.png"
          alt="Chaos Standard"
          className="w-full h-full object-contain p-0.5"
        />
      </div>
    )
  }

  // Standalone Symbol (The Bewildered Terminal)
  if (variant === 'symbol') {
    return (
      <div
        className={`relative inline-flex items-center justify-center ${
          interactive ? 'group cursor-pointer' : ''
        } ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <div className="relative w-full h-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_35px_rgba(255,106,0,0.45)]">
          <img
            src="/brand/chaos-mark-symbol.png"
            alt="Chaos Standard Terminal"
            className="max-w-full max-h-full object-contain filter drop-shadow(0 10px 20px rgba(0,0,0,0.7))"
          />
        </div>
      </div>
    )
  }

  // Stacked Logo (Centered Terminal + Wordmark)
  if (variant === 'stacked') {
    return (
      <div
        className={`flex flex-col items-center text-center ${
          interactive ? 'group cursor-pointer' : ''
        } ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <div className="w-64 max-w-full transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_35px_rgba(255,106,0,0.35)]">
          <img
            src="/brand/chaos-logo-transparent.png"
            alt="Chaos Standard"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    )
  }

  // Splash Presentation (Widescreen Hero Presentation)
  if (variant === 'splash') {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 ${className}`}
        onClick={handleClick}
      >
        <div className="max-w-md sm:max-w-lg w-full flex flex-col items-center">
          <img
            src="/brand/chaos-logo-transparent.png"
            alt="Chaos Standard"
            className="w-full h-auto object-contain filter drop-shadow(0 20px 45px rgba(255,106,0,0.3)) animate-pulse-slow"
          />
        </div>
      </div>
    )
  }

  // Default: Horizontal Lockup (Terminal icon on left + Exact Wordmark on right)
  return (
    <div
      className={`inline-flex items-center gap-3.5 ${
        interactive ? 'group cursor-pointer' : ''
      } ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      role="banner"
      aria-label="Chaos Standard Logo"
    >
      {/* Bewildered Terminal Icon */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-3deg]">
        <img
          src="/brand/chaos-mark-symbol.png"
          alt="Chaos Standard Icon"
          className="w-full h-full object-contain filter drop-shadow(0 2px 8px rgba(255,106,0,0.35))"
        />
      </div>

      {/* Exact High-Res Wordmark (CHAOS STANDARD) */}
      <div className="h-7 sm:h-8 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
        <img
          src="/brand/chaos-wordmark.png"
          alt="Chaos Standard"
          className="h-full w-auto object-contain filter drop-shadow(0 2px 10px rgba(0,0,0,0.8))"
        />
      </div>
    </div>
  )
}
