import React, { useState, useRef } from 'react'
import type { GameInfo } from '../../types'
import { sound } from '../../utils/sound'
import confetti from 'canvas-confetti'
import {
  ExternalLink,
  Dice5,
  AlertTriangle,
  Radio,
  Lock,
  Flame,
  Bot,
  Users,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react'

interface GameCatalogSectionProps {
  games?: GameInfo[]
  onBackToHome?: () => void
}

export const GameCatalogSection: React.FC<GameCatalogSectionProps> = ({
  games: _games,
  onBackToHome
}) => {
  // --- Game 1: Hallucinated Dungeons State ---
  const [d20Roll, setD20Roll] = useState<number | null>(18)
  const [isRolling, setIsRolling] = useState<boolean>(false)
  const [dmDialogue, setDmDialogue] = useState<string>(
    'The obsidian portcullis creaks open. The Dungeon Master sighs: "Fine, your bard convinced the gargoyle that tax evasion is a cardinal virtue. Proceed."'
  )

  const handleRollD20 = () => {
    if (isRolling) return
    setIsRolling(true)
    sound.playDungeonRoll()

    const outcomes = [
      {
        roll: 1,
        text: 'CRITICAL FAILURE (1): You attempt to pick the chest lock with a stale baguette. The bread shatters, the lock mocks your ancestry, and a nearby gelatinous cube files a noise complaint.'
      },
      {
        roll: 7,
        text: 'NATURAL 7: The tavern barkeep narrows his eyes. He will give you the secret map, but only if your paladin signs a legally binding non-disclosure agreement with a goblin.'
      },
      {
        roll: 14,
        text: 'NATURAL 14: You successfully decipher the ancient runes. They read: "Beware the dragon, but beware even more the wizard who claimed he could cast Fireball safely indoors."'
      },
      {
        roll: 20,
        text: 'CRITICAL SUCCESS (20): The Dungeon Master stares at you in disbelief. The ancient lich surrenders his phylactery in exchange for your party’s secret sourdough starter recipe.'
      }
    ]

    setTimeout(() => {
      const selected = outcomes[Math.floor(Math.random() * outcomes.length)]
      setD20Roll(selected.roll)
      setDmDialogue(selected.text)
      setIsRolling(false)
      if (selected.roll === 20) {
        sound.playSuccess()
      }
    }, 450)
  }

  // --- Game 2: Do Not Press Submit State ---
  const [submitDodges, setSubmitDodges] = useState<number>(0)
  const [submitOffset, setSubmitOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [tauntIndex, setTauntIndex] = useState<number>(0)
  const [submitClicked, setSubmitClicked] = useState<boolean>(false)
  const submitCardRef = useRef<HTMLDivElement | null>(null)

  const taunts = [
    'I explicitly said: DO NOT.',
    'Why are you hovering near me?',
    'Your cursor looks dangerously curious.',
    'Did you read the title of the game?',
    'What if this submits your browser history to your parents?',
    'Seriously. Stop chasing me.',
    'I have feelings and a 4th-wall attorney.',
    'One more step and I invoke the warranty.'
  ]

  const handleEvasiveHover = () => {
    sound.playHover()
    if (submitClicked) return

    setSubmitDodges(prev => prev + 1)
    setTauntIndex(prev => (prev + 1) % taunts.length)

    // Evasive hop within card boundary
    const rangeX = 140
    const rangeY = 40
    const newX = (Math.random() - 0.5) * rangeX
    const newY = (Math.random() - 0.5) * rangeY
    setSubmitOffset({ x: newX, y: newY })
  }

  const handleSubmitClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    sound.playBuzzer()
    setSubmitClicked(true)

    // Confetti burst for defiance
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00E5FF', '#FF2A5F', '#F5A623', '#FFFFFF']
    })

    setTimeout(() => {
      sound.playSuccess()
    }, 300)
  }

  const handleResetSubmit = () => {
    sound.playClick()
    setSubmitClicked(false)
    setSubmitOffset({ x: 0, y: 0 })
    setSubmitDodges(0)
  }

  // --- Game 3: Project [REDACTED] Frequency State ---
  const [frequency, setFrequency] = useState<number>(440)
  const getDeclassifiedSnippet = (freq: number) => {
    if (freq < 300) return 'CLUE ALPHA: Zero-friction asynchronous causal multiplayer in raw WebGL.'
    if (freq < 600) return 'CLUE BETA: An interface where the game physics bend directly to player skepticism.'
    if (freq < 850) return 'CLUE GAMMA: An absurdity coefficient calibrated specifically to dismantle standard puzzle tropes.'
    return 'CLUE OMEGA: [TRANSMISSION INTERRUPTED — CALIBRATION TOO DANGEROUS]'
  }

  return (
    <section id="games" className="relative pt-24 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Top Breadcrumb & Return to Home */}
      {onBackToHome && (
        <div className="mb-8">
          <button
            onClick={() => {
              sound.playClick()
              onBackToHome()
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#94A3B8] hover:text-[#FF6A00] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FF6A00]" />
            <span>RETURN TO STUDIO HOME</span>
          </button>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="font-mono text-xs text-[#FF6A00] uppercase tracking-[0.25em] mb-2 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
            GAMES CATALOG
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F8FAFC]">
            BROWSER-NATIVE GAMES
          </h2>
        </div>
        <p className="text-sm text-[#94A3B8] max-w-md mt-4 md:mt-0 font-normal">
          Every game is designed to boot instantly in your browser with zero downloads, uncompromised graphical fidelity, and an intentional streak of controlled absurdity.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {/* ========================================================================= */}
        {/* GAME 1: HALLUCINATED DUNGEONS */}
        {/* ========================================================================= */}
        <article className="relative rounded-3xl bg-gradient-to-b from-[#161224] via-[#0E0C17] to-[#08070E] border border-[#8B5CF6]/30 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 transition-all hover:border-[#8B5CF6]/60">
          {/* Arcane ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#C084FC] flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#F5A623]" />
                  AI Tabletop RPG
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#00E5FF] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  Alpha 3 Staging Playable
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-[#94A3B8] flex items-center gap-1">
                  <Users className="w-3 h-3 text-[#00E5FF]" />
                  Multiplayer
                </span>
              </div>

              <h3 className="font-fantasy text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-wide mb-3">
                Hallucinated Dungeons
              </h3>

              <div className="font-mono text-sm text-[#F5A623] mb-5 tracking-wide">
                Tabletop RPG Soul × Generative Fantasy Intelligence
              </div>

              <p className="text-[#94A3B8] text-base leading-relaxed mb-6 font-normal">
                An ambitious AI-driven multiplayer fantasy role-playing adventure inspired by the golden age of pen-and-paper games. The bespoke AI Dungeon Master holds world state, paints dynamic encounters, reacts to your party’s most unhinged tactical maneuvers, and guides a persistent living world without ever feeling like a generic chatbot.
              </p>

              {/* Core Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span>Living AI DM with long-term memory &amp; tactical malice</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span>Browser-native synchronous multiplayer with instant link invites</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span>Procedural cartography, dungeon secrets, and emergent lore</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span>Pure tabletop agency: invent spells, deceive mimics, negotiate</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://hd.chaosstandard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#8B5CF6]/30 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Play Alpha 3 Staging</span>
                </a>

                <button
                  onClick={handleRollD20}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-sm transition-all cursor-pointer"
                >
                  <Dice5 className={`w-4 h-4 ${isRolling ? 'animate-spin' : ''}`} />
                  <span>Roll d20 Oracle</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Card: The Hallucinated DM's Oracle (5 cols) */}
            <div className="lg:col-span-5 bg-[#090710]/90 border border-[#8B5CF6]/30 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="font-fantasy text-sm font-bold text-[#F8FAFC]">THE DUNGEON MASTER ORACLE</span>
                </div>
                <span className="font-mono text-[10px] text-[#C084FC] uppercase tracking-wider">LIVE SIMULATION</span>
              </div>

              {/* d20 Roll Visual */}
              <div className="flex items-center justify-center my-4">
                <button
                  onClick={handleRollD20}
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#2E1065] to-[#581C87] border-2 border-[#C084FC] flex flex-col items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer relative group ${
                    isRolling ? 'animate-bounce' : ''
                  }`}
                  title="Click to roll the d20"
                >
                  <span className="font-fantasy text-3xl font-extrabold text-[#F8FAFC] group-hover:text-[#F5A623] transition-colors">
                    {d20Roll ?? '?'}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C084FC] mt-0.5">
                    {isRolling ? 'ROLLING...' : 'd20 DIE'}
                  </span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F5A623] rounded-full animate-ping" />
                </button>
              </div>

              {/* Dynamic DM Narrative Dialogue Box */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 min-h-[100px] flex items-center">
                <p className="font-mono text-xs text-[#E2E8F0] leading-relaxed italic">
                  "{dmDialogue}"
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-[#64748B]">
                <span>ENCOUNTER: OBSIDIAN VAULT</span>
                <span>CLICK DIE TO RE-ROLL</span>
              </div>
            </div>
          </div>
        </article>

        {/* ========================================================================= */}
        {/* GAME 2: DO NOT PRESS SUBMIT */}
        {/* ========================================================================= */}
        <article
          ref={submitCardRef}
          className="relative rounded-3xl bg-gradient-to-b from-[#141B26] via-[#0E121B] to-[#07090E] border border-[#00E5FF]/30 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 transition-all hover:border-[#00E5FF]/60"
        >
          {/* Cyan/Crimson ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#00E5FF]/20 border border-[#00E5FF]/40 text-[#00E5FF] flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#FF2A5F]" />
                  Subversive Comedy
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FF2A5F]/15 border border-[#FF2A5F]/30 text-[#FF2A5F]">
                  Playable Dev Preview Available
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-[#94A3B8]">
                  Sentient Interface
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
                Do Not Press Submit
              </h3>

              <div className="font-mono text-sm text-[#00E5FF] mb-5 tracking-wide">
                The Antagonistic User Interface Experience
              </div>

              <p className="text-[#94A3B8] text-base leading-relaxed mb-6 font-normal">
                A deceptively innocent browser game where the interface itself becomes part of the experience. The player is confronted with simple instructions and an increasingly questionable relationship with the software. Think mischief, fourth-wall-breaking interactions, unexpected behavior, and a game that appears to have strong opinions about your life choices.
              </p>

              {/* Core Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <span>Evasive buttons and sentient dialogues that actively argue</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <span>Fourth-wall destruction: the software watches how you move</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <span>Escalating psychological contest between curiosity and obedience</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <span>Instant browser access with zero install required</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://dnps.chaosstandard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#0284C7] text-[#090A0F] font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#00E5FF]/25 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Dev Preview</span>
                </a>

                <div className="font-mono text-xs text-[#94A3B8] flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/40 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span>Preview Environment: Hosted Prototype</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Widget: The Uncooperative Submit Button (5 cols) */}
            <div className="lg:col-span-5 bg-[#090C12]/90 border border-[#00E5FF]/30 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#FF2A5F]" />
                    <span className="font-mono text-xs font-bold text-[#F8FAFC]">ANTAGONISTIC UI TEST FIELD</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#00E5FF]">PROTOTYPE WIDGET</span>
                </div>

                {/* Subtitle instructions */}
                <div className="text-xs text-[#94A3B8] font-mono mb-2">
                  Instruction: Please respect the button. Do not touch it.
                </div>

                {/* Sentient Taunt Balloon */}
                <div className="p-3 rounded-lg bg-[#111622] border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-6 min-h-[46px] flex items-center">
                  <span className="text-[#FF2A5F] mr-2 font-bold">&gt;</span>
                  {submitClicked ? 'YOU BROKE PROTOCOL. A strongly worded letter has been incinerated.' : taunts[tauntIndex]}
                </div>
              </div>

              {/* The Evasive Button Arena */}
              <div className="relative py-8 flex flex-col items-center justify-center">
                {!submitClicked ? (
                  <button
                    onMouseEnter={handleEvasiveHover}
                    onClick={handleSubmitClick}
                    style={{
                      transform: `translate(${submitOffset.x}px, ${submitOffset.y}px)`
                    }}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF2A5F] to-[#E11D48] text-white font-mono font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#FF2A5F]/30 hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer"
                  >
                    DO NOT SUBMIT
                  </button>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="font-mono text-sm font-bold text-[#00E5FF] animate-pulse">
                      INCIDENT LOGGED: YOU PRESSED IT.
                    </div>
                    <button
                      onClick={handleResetSubmit}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-[#F8FAFC] transition-colors cursor-pointer"
                    >
                      Reset Antagonism Test
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Telemetry for Submit */}
              <div className="flex items-center justify-between font-mono text-[10px] text-[#64748B] pt-3 border-t border-white/5">
                <span>DODGES EVADED: {submitDodges}</span>
                <span>STATUS: {submitClicked ? 'CRITICAL DISOBEDIENCE' : 'WATCHFUL'}</span>
              </div>
            </div>
          </div>
        </article>

        {/* ========================================================================= */}
        {/* GAME 3: PROJECT [REDACTED] — UNANNOUNCED COMING SOON */}
        {/* ========================================================================= */}
        <article className="relative rounded-3xl bg-gradient-to-b from-[#181119] via-[#0F0A10] to-[#080509] border border-[#FF2A5F]/30 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 transition-all hover:border-[#FF2A5F]/60">
          {/* Crimson ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2A5F]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FF2A5F]/20 border border-[#FF2A5F]/40 text-[#FF2A5F] flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Classified Production
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-[#94A3B8]">
                  Coming Soon
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-[#94A3B8]">
                  Web-Native Anomaly
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
                Project [REDACTED]
              </h3>

              <div className="font-mono text-sm text-[#FF2A5F] mb-5 tracking-wide">
                Next-Generation Browser Experiment
              </div>

              <p className="text-[#94A3B8] text-base leading-relaxed mb-6 font-normal">
                Chaos Standard is built on the conviction that the browser is the most expressive, immediate, and underutilized gaming platform on earth. While Hallucinated Dungeons and Do Not Press Submit continue active development, the next unconventional title is incubating with unexpected mechanics and subversive design.
              </p>

              {/* Philosophical Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF2A5F] flex-shrink-0 mt-0.5" />
                  <span>Zero installation barrier: immediate browser play</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF2A5F] flex-shrink-0 mt-0.5" />
                  <span>Uncompromising visual fidelity and original art direction</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF2A5F] flex-shrink-0 mt-0.5" />
                  <span>Unconventional game loops that challenge standard genres</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF2A5F] flex-shrink-0 mt-0.5" />
                  <span>No fake release dates, no marketing filler—pure craftsmanship</span>
                </div>
              </div>

              <div className="font-mono text-xs text-[#64748B]">
                &gt; DECLASSIFICATION TRANSMISSION IN PROGRESS...
              </div>
            </div>

            {/* Right Interactive Teaser: Encrypted Telemetry Vault (5 cols) */}
            <div className="lg:col-span-5 bg-[#0C070C]/90 border border-[#FF2A5F]/30 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#FF2A5F]" />
                  <span className="font-mono text-xs font-bold text-[#F8FAFC]">DECLASSIFIED TRANSMISSION TUNER</span>
                </div>
                <span className="font-mono text-[10px] text-[#FF2A5F]">FREQ: {frequency}Hz</span>
              </div>

              {/* Audio Waveform Simulation Bar */}
              <div className="h-16 rounded-xl bg-black/60 border border-white/10 p-2 flex items-center justify-center gap-1.5 mb-5">
                {[40, 65, 30, 85, 95, 45, 60, 35, 75, 55, 90, 40, 70, 50, 80].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      height: `${Math.min(100, (h * (frequency / 500)) % 100 + 15)}%`
                    }}
                    className="w-1.5 bg-gradient-to-t from-[#FF2A5F] to-[#F5A623] rounded-full transition-all duration-300"
                  />
                ))}
              </div>

              {/* Frequency Slider */}
              <div className="mb-5">
                <div className="flex justify-between text-xs font-mono text-[#94A3B8] mb-1.5">
                  <span>Tune Frequency:</span>
                  <span className="text-[#F5A623] font-bold">{frequency} Hz</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  value={frequency}
                  onChange={(e) => {
                    setFrequency(parseInt(e.target.value, 10))
                    sound.playHover()
                  }}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF2A5F]"
                />
              </div>

              {/* Decrypted Clue Box */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-[#FF2A5F]/20 text-xs font-mono text-[#F8FAFC] leading-relaxed">
                {getDeclassifiedSnippet(frequency)}
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-[#64748B]">
                <span>ENCRYPTED VAULT // 2025</span>
                <span>TUNING UNLOCKS SIGNALS</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Return to Studio Manifesto Banner */}
      {onBackToHome && (
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-[#FF6A00] uppercase tracking-wider font-bold mb-1">
              CHAOS STANDARD STUDIO
            </div>
            <p className="text-sm text-[#94A3B8]">
              Want to learn more about our design philosophy and how we build browser games with AI?
            </p>
          </div>
          <button
            onClick={() => {
              sound.playClick()
              onBackToHome()
            }}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 hover:border-[#FF6A00]/50"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF6A00]" />
            <span>Studio About &amp; Philosophy</span>
          </button>
        </div>
      )}
    </section>
  )
}
