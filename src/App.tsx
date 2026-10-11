import { useState, useEffect } from 'react'
import { InteractiveBackground } from './components/canvas/InteractiveBackground'
import { Header } from './components/navigation/Header'
import { HeroSection } from './components/hero/HeroSection'
import { GameCatalogSection } from './components/games/GameCatalogSection'
import { PhilosophySection } from './components/philosophy/PhilosophySection'
import { Footer } from './components/footer/Footer'
import { BrandAssetsModal } from './components/brand/BrandAssetsModal'
import { ChaosTerminal } from './components/terminal/ChaosTerminal'
import { StudioSplashReveal } from './components/splash/StudioSplashReveal'
import { GAMES } from './data/games'
import { sound } from './utils/sound'

export function App() {
  const [chaosLevel, setChaosLevel] = useState<number>(30)
  const [brandKitOpen, setBrandKitOpen] = useState<boolean>(false)
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false)
  const [showSplash, setShowSplash] = useState<boolean>(() => {
    // Only show auto-splash on very first visit in this tab session
    if (typeof window !== 'undefined') {
      const seen = sessionStorage.getItem('chaos_splash_seen')
      return !seen
    }
    return false
  })

  // Global hotkeys: '~' opens terminal, 'Escape' closes modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault()
        sound.playClick()
        setTerminalOpen((prev) => !prev)
      } else if (e.key === 'Escape') {
        setBrandKitOpen(false)
        setTerminalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    sessionStorage.setItem('chaos_splash_seen', 'true')
  }

  const handleReplaySplash = () => {
    sound.playClick()
    setShowSplash(true)
  }

  const handleExploreGames = () => {
    const target = document.getElementById('games')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTriggerAnomaly = () => {
    setChaosLevel((prev) => Math.min(100, prev + 15))
  }

  return (
    <div className="relative min-h-screen bg-[#090A0F] text-[#F8FAFC] selection:bg-[#F5A623] selection:text-[#090A0F]">
      {/* 60fps Interactive Physics & Telemetry Canvas Background */}
      <InteractiveBackground chaosLevel={chaosLevel} />

      {/* Cinematic Studio Splash Reveal (Auto on first load or replayed on demand) */}
      {showSplash && (
        <StudioSplashReveal onComplete={handleSplashComplete} />
      )}

      {/* Persistent Navigation Header */}
      <Header
        chaosLevel={chaosLevel}
        setChaosLevel={setChaosLevel}
        onOpenBrandKit={() => setBrandKitOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onReplaySplash={handleReplaySplash}
      />

      {/* Main Studio Content */}
      <main className="relative z-10 flex flex-col">
        {/* Viewport 1: Hero Experience */}
        <HeroSection
          chaosLevel={chaosLevel}
          onExploreGames={handleExploreGames}
          onOpenBrandKit={() => setBrandKitOpen(true)}
          onTriggerAnomaly={handleTriggerAnomaly}
        />

        {/* Viewport 2: Featured Game Catalog (Hallucinated Dungeons, Do Not Press Submit, Project Redacted) */}
        <GameCatalogSection games={GAMES} />

        {/* Viewport 3: Studio Philosophy & Manifesto */}
        <PhilosophySection />
      </main>

      {/* Master Studio Footer */}
      <Footer
        onOpenBrandKit={() => setBrandKitOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onReplaySplash={handleReplaySplash}
      />

      {/* Interactive Brand Assets & SVG Suite Viewer Modal */}
      <BrandAssetsModal
        isOpen={brandKitOpen}
        onClose={() => setBrandKitOpen(false)}
        onPlaySplash={() => {
          setBrandKitOpen(false)
          handleReplaySplash()
        }}
      />

      {/* Interactive Developer CLI / Fourth-Wall Terminal Drawer */}
      <ChaosTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        chaosLevel={chaosLevel}
        setChaosLevel={setChaosLevel}
      />
    </div>
  )
}

export default App
