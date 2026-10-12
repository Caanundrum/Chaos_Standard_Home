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
  const [currentPage, setCurrentPage] = useState<'home' | 'games' | 'about'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase()
      const hash = window.location.hash.toLowerCase()
      if (path === '/games' || path === '/games/' || hash === '#games' || hash === '#/games') {
        return 'games'
      }
      if (path === '/about' || path === '/about/' || hash === '#about' || hash === '#/about') {
        return 'about'
      }
    }
    return 'home'
  })

  const [showSplash, setShowSplash] = useState<boolean>(() => {
    // Only show auto-splash on very first visit in this tab session
    if (typeof window !== 'undefined') {
      const seen = sessionStorage.getItem('chaos_splash_seen')
      return !seen
    }
    return false
  })

  // Synchronize browser history (Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase()
      const hash = window.location.hash.toLowerCase()
      if (path === '/games' || path === '/games/' || hash === '#games' || hash === '#/games') {
        setCurrentPage('games')
      } else if (path === '/about' || path === '/about/' || hash === '#about' || hash === '#/about') {
        setCurrentPage('about')
      } else {
        setCurrentPage('home')
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

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

  const handleNavigate = (page: 'home' | 'games' | 'about', targetHash?: string) => {
    sound.playClick()
    setCurrentPage(page)
    const newPath = page === 'games' ? '/games' : page === 'about' ? '/about' : '/'
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath)
    }

    if (targetHash) {
      setTimeout(() => {
        const target = document.getElementById(targetHash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleTriggerAnomaly = () => {
    setChaosLevel((prev) => Math.min(100, prev + 15))
  }

  return (
    <div className="relative min-h-screen bg-[#090A0F] text-[#F8FAFC] selection:bg-[#FF6A00] selection:text-[#090A0F] flex flex-col justify-between">
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
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Studio Content */}
      <main className="relative z-10 flex flex-col flex-1">
        {currentPage === 'home' && (
          /* Viewport 1: Pure, Iconic Studio Landing */
          <HeroSection
            chaosLevel={chaosLevel}
            onExploreGames={() => handleNavigate('games')}
            onOpenBrandKit={() => setBrandKitOpen(true)}
            onTriggerAnomaly={handleTriggerAnomaly}
            onNavigateToAbout={() => handleNavigate('about')}
          />
        )}

        {currentPage === 'games' && (
          /* Dedicated Games Page View */
          <div className="pt-6 pb-12">
            <GameCatalogSection
              games={GAMES}
              onBackToHome={() => handleNavigate('home')}
            />
          </div>
        )}

        {currentPage === 'about' && (
          /* Dedicated Studio Philosophy & Manifesto Page View */
          <div className="pt-6 pb-12">
            <PhilosophySection
              onBackToHome={() => handleNavigate('home')}
              onExploreGames={() => handleNavigate('games')}
            />
          </div>
        )}
      </main>

      {/* Master Studio Footer */}
      <Footer
        onOpenBrandKit={() => setBrandKitOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onReplaySplash={handleReplaySplash}
        onNavigate={handleNavigate}
      />

      {/* Interactive Brand Assets Viewer Modal */}
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
