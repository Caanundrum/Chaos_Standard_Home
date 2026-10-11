import type { BrandAsset } from '../types'

export const BRAND_ASSETS: BrandAsset[] = [
  {
    id: 'symbol-dark',
    name: 'Primary Studio Emblem (Dark Mode)',
    description: 'The master Chaos Standard symbol: The Impossible Delta. A bold, three-facet impossible geometric prism representing controlled chaos and non-Euclidean design. Clean, powerful, and instantly identifiable at any scale.',
    file: '/brand/chaos-symbol-dark.svg',
    category: 'Symbol',
    format: 'SVG',
    aspectRatio: '1:1'
  },
  {
    id: 'symbol-light',
    name: 'Studio Emblem (Light Mode)',
    description: 'High-contrast inverted Impossible Delta for print, editorial layouts, light stationery, and bright background integrations.',
    file: '/brand/chaos-symbol-light.svg',
    category: 'Symbol',
    format: 'SVG',
    aspectRatio: '1:1'
  },
  {
    id: 'logo-horizontal-dark',
    name: 'Full Studio Lockup — Horizontal (Dark)',
    description: 'The definitive studio horizontal lockup: the clean Impossible Delta paired with the architectural CHAOS STANDARD wordmark.',
    file: '/brand/chaos-logo-horizontal-dark.svg',
    category: 'Horizontal',
    format: 'SVG',
    aspectRatio: '4:1'
  },
  {
    id: 'logo-horizontal-light',
    name: 'Full Studio Lockup — Horizontal (Light)',
    description: 'Horizontal studio identity lockup engineered for high contrast on light backgrounds and documentation.',
    file: '/brand/chaos-logo-horizontal-light.svg',
    category: 'Horizontal',
    format: 'SVG',
    aspectRatio: '15:4'
  },
  {
    id: 'logo-stacked-dark',
    name: 'Studio Poster Lockup — Stacked (Dark)',
    description: 'Centered vertical presentation. Ideal for game launch posters, promotional title cards, end credits, and box art.',
    file: '/brand/chaos-logo-stacked-dark.svg',
    category: 'Stacked',
    format: 'SVG',
    aspectRatio: '6:7'
  },
  {
    id: 'logo-stacked-light',
    name: 'Studio Poster Lockup — Stacked (Light)',
    description: 'Clean light variant of the stacked mark for whitepaper covers, press kits, and light merchandising.',
    file: '/brand/chaos-logo-stacked-light.svg',
    category: 'Stacked',
    format: 'SVG',
    aspectRatio: '6:7'
  },
  {
    id: 'mark-small',
    name: 'Micro-Scale Mark (Favicon & UI Glyphs)',
    description: 'Simplified geometric footprint specifically tuned for 16px to 32px display without line blur.',
    file: '/brand/chaos-mark-small.svg',
    category: 'Small',
    format: 'SVG',
    aspectRatio: '1:1'
  },
  {
    id: 'splash-card',
    name: '"A Chaos Standard Game" Splash Presentation',
    description: 'Official 16:9 widescreen presentation card required for every future game boot sequence and video trailer opener.',
    file: '/brand/chaos-splash-card.svg',
    category: 'Presentation',
    format: 'SVG',
    aspectRatio: '16:9'
  }
]

export const BRAND_PALETTE = [
  { name: 'Obsidian Void', hex: '#090A0F', role: 'Primary background, cosmic depth, absolute contrast' },
  { name: 'Carbon Surface', hex: '#11131B', role: 'Panel surface, container background, glass card core' },
  { name: 'Standard Gold', hex: '#F5A623', role: 'Studio prestige, calibration standard, primary accent' },
  { name: 'Spectral Cyan', hex: '#00E5FF', role: 'Browser-native tech, active telemetry, laser accuracy' },
  { name: 'Anomaly Crimson', hex: '#FF2A5F', role: 'Fourth-wall breaches, alerts, subversive humor accents' },
  { name: 'Arcane Violet', hex: '#8B5CF6', role: 'Hallucinated Dungeons fantasy glow and eldritch energy' },
  { name: 'Titanium White', hex: '#F8FAFC', role: 'High-contrast typography and singularity aperture center' }
]

export const BRAND_TYPOGRAPHY = [
  {
    role: 'Display & Headlines',
    name: 'Space Grotesk',
    sample: 'CHAOS STANDARD INTERACTIVE',
    weights: 'Medium (500), Bold (700), Heavy (800)',
    notes: 'Architectural geometric cuts, wide stance, authoritative and modern.'
  },
  {
    role: 'Technical & Telemetry',
    name: 'JetBrains Mono',
    sample: 'CALIBRATION: 94.2% // ANOMALY_TOLERANCE: NOMINAL',
    weights: 'Regular (400), SemiBold (600), Bold (700)',
    notes: 'Precise scientific telemetry, coordinates, code console, and metadata.'
  },
  {
    role: 'Fantasy Display (Hallucinated Dungeons)',
    name: 'Cinzel',
    sample: 'THE DUNGEON MASTER NEVER SLEEPS',
    weights: 'SemiBold (600), Bold (700)',
    notes: 'Classical inscriptional serif evoking tabletop fantasy elegance without cliché.'
  },
  {
    role: 'Body & Narrative',
    name: 'Inter',
    sample: 'We take making ridiculous things extremely seriously.',
    weights: 'Regular (400), Medium (500)',
    notes: 'Neutral, hyper-legible geometric workhorse ensuring effortless readability.'
  }
]
