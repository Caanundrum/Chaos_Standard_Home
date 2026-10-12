import React, { useState } from 'react'
import { ChaosLogo } from '../brand/ChaosLogo'
import { sound } from '../../utils/sound'
import { Volume2, VolumeX, Sliders, Terminal, Download, Menu, X, Sparkles } from 'lucide-react'

interface HeaderProps {
  chaosLevel: number
  setChaosLevel: (level: number) => void
  onOpenBrandKit: () => void
  onOpenTerminal: () => void
  onReplaySplash: () => void
  currentPage?: 'home' | 'games'
  onNavigate?: (page: 'home' | 'games', hash?: string) => void
}

export const Header: React.FC<HeaderProps> = ({
  chaosLevel,
  setChaosLevel,
  onOpenBrandKit,
  onOpenTerminal,
  onReplaySplash,
  currentPage = 'home',
  onNavigate
}) => {
  const [muted, setMuted] = useState<boolean>(sound.isMuted())
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [showChaosTooltip, setShowChaosTooltip] = useState<boolean>(false)

  const toggleSound = () => {
    const next = sound.toggleMute()
    setMuted(next)
    if (!next) {
      sound.playClick()
    }
  }

  const handleChaosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10)
    setChaosLevel(val)
    if (val === 100 || val === 0) {
      sound.playGlitch()
    } else if (val % 25 === 0) {
      sound.playHover()
    }
  }

  const getChaosLabel = (level: number) => {
    if (level <= 15) return 'Strict Standard'
    if (level <= 45) return 'Controlled'
    if (level <= 75) return 'Elevated Anomaly'
    return 'Delightful Chaos'
  }

  const handleNavClick = (page: 'home' | 'games', hash?: string) => {
    sound.playClick()
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(page, hash)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#090A0F]/85 backdrop-blur-xl border-b border-white/8 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Studio Identity Brand Lockup */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center group cursor-pointer focus:outline-none bg-transparent border-0 p-0 text-left"
          title="Return to Studio Home"
        >
          <ChaosLogo variant="horizontal" theme="dark" interactive={false} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
              currentPage === 'home'
                ? 'text-[#FF6A00] font-bold border-b-2 border-[#FF6A00]'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('games')}
            className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
              currentPage === 'games'
                ? 'text-[#FF6A00] font-bold border-b-2 border-[#FF6A00]'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            Games
          </button>
          <button
            onClick={() => handleNavClick('home', 'philosophy')}
            className="text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors relative py-1 hover:border-b-2 hover:border-[#FF6A00] cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => {
              sound.playClick()
              onOpenBrandKit()
            }}
            className="text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#FF6A00]" />
            <span>Brand Kit</span>
          </button>
          <button
            onClick={() => {
              sound.playClick()
              onReplaySplash()
            }}
            className="text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Replay Logo Reveal"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
            <span>Logo Reveal</span>
          </button>
        </nav>

        {/* Right HUD Controls: Sound, Chaos Slider, Terminal */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Chaos Calibrator */}
          <div
            className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11131B] border border-white/10 hover:border-white/20 transition-all"
            onMouseEnter={() => setShowChaosTooltip(true)}
            onMouseLeave={() => setShowChaosTooltip(false)}
          >
            <Sliders className={`w-3.5 h-3.5 ${chaosLevel > 60 ? 'text-[#FF2A5F] animate-spin' : 'text-[#FF6A00]'}`} />
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#64748B]">
                  Chaos Calibrator
                </span>
                <span className="font-mono text-[9px] font-bold text-[#FF6A00]">
                  {chaosLevel}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={chaosLevel}
                onChange={handleChaosChange}
                className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF6A00]"
                aria-label="Chaos Level Calibrator"
              />
            </div>

            {showChaosTooltip && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 p-2 rounded bg-[#171924] border border-[#F5A623]/30 shadow-xl z-50 text-[10px] text-[#94A3B8] font-mono pointer-events-none">
                <div className="text-[#F8FAFC] font-bold mb-0.5">Mode: {getChaosLabel(chaosLevel)}</div>
                Fine-tunes particle entropy, fourth-wall responsiveness, and visual turbulence.
              </div>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-[#11131B] border border-white/10 hover:border-[#00E5FF]/40 text-[#94A3B8] hover:text-[#00E5FF] transition-all"
            title={muted ? 'Unmute Procedural Audio' : 'Mute Audio'}
            aria-label="Toggle Sound"
          >
            {muted ? <VolumeX className="w-4 h-4 text-[#FF2A5F]" /> : <Volume2 className="w-4 h-4 text-[#00E5FF]" />}
          </button>

          {/* Dev Terminal Trigger */}
          <button
            onClick={() => {
              sound.playClick()
              onOpenTerminal()
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11131B] border border-white/10 hover:border-[#00E5FF]/50 text-xs font-mono text-[#94A3B8] hover:text-[#00E5FF] transition-all"
            title="Open Interactive Studio Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>~ CLI</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => {
            sound.playClick()
            setMobileMenuOpen(!mobileMenuOpen)
          }}
          className="lg:hidden p-2 rounded-lg bg-[#11131B] border border-white/10 text-[#F8FAFC]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E1017] border-b border-white/10 px-6 py-6 flex flex-col gap-5 animate-in slide-in-from-top">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-left text-base font-semibold ${currentPage === 'home' ? 'text-[#FF6A00]' : 'text-[#F8FAFC] hover:text-[#FF6A00]'}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('games')}
            className={`text-left text-base font-semibold ${currentPage === 'games' ? 'text-[#FF6A00]' : 'text-[#F8FAFC] hover:text-[#FF6A00]'}`}
          >
            Games Catalog
          </button>
          <button
            onClick={() => handleNavClick('home', 'philosophy')}
            className="text-left text-base font-semibold text-[#F8FAFC] hover:text-[#FF6A00]"
          >
            About Chaos Standard
          </button>
          <button
            onClick={() => {
              sound.playClick()
              setMobileMenuOpen(false)
              onOpenBrandKit()
            }}
            className="text-left text-base font-semibold text-[#F8FAFC] hover:text-[#FF6A00] flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-[#FF6A00]" />
            <span>Brand Kit</span>
          </button>
          <button
            onClick={() => {
              sound.playClick()
              setMobileMenuOpen(false)
              onReplaySplash()
            }}
            className="text-left text-base font-semibold text-[#F8FAFC] hover:text-[#00E5FF] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span>Replay Logo Reveal</span>
          </button>
          <button
            onClick={() => {
              sound.playClick()
              setMobileMenuOpen(false)
              onOpenTerminal()
            }}
            className="text-left text-base font-mono text-[#00E5FF] flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            <span>Open Dev Terminal (~ CLI)</span>
          </button>

          {/* Mobile Chaos Calibrator */}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
              <span>Chaos Calibrator</span>
              <span className="text-[#F5A623] font-bold">{chaosLevel}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={chaosLevel}
              onChange={handleChaosChange}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#F5A623]"
            />
          </div>
        </div>
      )}
    </header>
  )
}
