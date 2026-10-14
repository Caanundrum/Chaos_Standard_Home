import type { GameInfo } from '../types'

export const GAMES: GameInfo[] = [
  {
    id: 'hallucinated-dungeons',
    title: 'Hallucinated Dungeons',
    subtitle: 'Tabletop RPG Soul × Generative Fantasy Intelligence',
    tagline: 'An ambitious AI-driven multiplayer fantasy adventure where the Dungeon Master never sleeps, never runs out of dice, and occasionally has questionable sanity.',
    status: 'Alpha 3 Staging Playable',
    genre: 'AI Multiplayer Tabletop RPG',
    platform: 'Browser-Native (Zero Install)',
    description: 'Hallucinated Dungeons marries the collaborative storytelling of classic pen-and-paper roleplaying with a persistent, living fantasy world moderated by a bespoke AI Dungeon Master. Every dungeon crawl, tavern dispute, and rogue trap encounter is dynamically authored in real time, reacting to your party’s most unhinged tactical decisions without ever feeling like a generic text chatbot.',
    features: [
      'Autonomous AI Dungeon Master capable of long-term world memory and nuanced character reaction',
      'Browser-native synchronous multiplayer: join with a single URL invite, no client installation required',
      'Generative environmental encounters, tactical hex grids, and reactive hand-drawn cartography',
      'Unscripted emergent storytelling: negotiate with mimics, insult ancient dragons, or invent spells on the fly'
    ],
    visualTheme: {
      primaryColor: '#F5A623',
      accentColor: '#8B5CF6',
      bgGradient: 'from-[#171424] via-[#0E0C17] to-[#08070E]',
      borderGlow: 'hover:border-[#8B5CF6]/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]'
    },
    previewUrl: 'https://hd.chaosstandard.com'
  },
  {
    id: 'do-not-press-submit',
    title: 'Do Not Press Submit',
    subtitle: 'The Antagonistic User Interface Experience',
    tagline: 'A deceptively innocent browser game where the interface itself turns against you. It has simple instructions. You have terrible impulse control.',
    status: 'Prototype Preview',
    genre: 'Subversive Interactive Comedy',
    platform: 'Browser-Native (Playable Now in Dev Preview)',
    description: 'You are presented with a button. You are explicitly instructed not to click it. What follows is an escalating psychological contest between player curiosity and an interface that becomes increasingly suspicious, philosophical, and desperate to defend its one simple rule. Features fourth-wall breaks, evasive mechanics, and a software application that seems to know exactly what you are thinking.',
    features: [
      'Sentient UI design: input fields, progress bars, and modal dialogues that actively comment on your behavior',
      'Physics-based evasive elements that anticipate your cursor trajectory',
      'Escalating absurdity: from mild procedural warnings to full-blown existential crises',
      'Instant browser-based access with zero setup'
    ],
    visualTheme: {
      primaryColor: '#00E5FF',
      accentColor: '#FF2A5F',
      bgGradient: 'from-[#141B26] via-[#0E121B] to-[#07090E]',
      borderGlow: 'hover:border-[#00E5FF]/50 hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]'
    },
    previewUrl: 'https://dnps.chaosstandard.com'
  },
  {
    id: 'project-unannounced',
    title: 'Project [REDACTED]',
    subtitle: 'Next-Generation Browser Anomaly',
    tagline: 'More controlled chaos is in the works. Expect unconventional mechanics, fourth-wall fractures, and browser-first craft.',
    status: 'Classified / In Development',
    genre: 'Unannounced Browser Experience',
    platform: 'Web Standards / Browser Native',
    description: 'Built on the belief that the browser is the most expressive, accessible, and underutilized gaming canvas in existence. While Hallucinated Dungeons and Do Not Press Submit continue active development, the next AI-driven browser experiment is already taking shape.',
    features: [
      'Proprietary browser-native physics experiments and custom rendering architecture',
      'Uncompromising visual design with zero installation barriers',
      'Player agency pushed beyond standard game design tropes',
      'Declassification in progress — telemetry clues updated regularly'
    ],
    visualTheme: {
      primaryColor: '#FF2A5F',
      accentColor: '#F5A623',
      bgGradient: 'from-[#1F151B] via-[#120D12] to-[#080608]',
      borderGlow: 'hover:border-[#FF2A5F]/50 hover:shadow-[0_0_35px_rgba(255,42,95,0.25)]'
    }
  }
]
