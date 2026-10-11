import type { BrandAsset } from '../types'

export const BRAND_ASSETS: BrandAsset[] = [
  {
    id: 'symbol-dark',
    name: 'Primary Emblem (Dark Mode)',
    description: 'The master Chaos Standard symbol: The Dimensional Outline. A tilted wireframe squircle outline with inset translucent depth, architectural struts, a top-left cyan docked chip, and an offset amber anomaly piece. Simple, memorable, and distinctive at any scale.',
    file: '/brand/chaos-symbol-dark.svg',
    category: 'Symbol',
    format: 'SVG',
    aspectRatio: '1:1'
  },
  {
    id: 'symbol-light',
    name: 'Emblem (Light Mode)',
    description: 'High-contrast inverted Dimensional Outline for light backgrounds, documentation, and bright themes.',
    file: '/brand/chaos-symbol-light.svg',
    category: 'Symbol',
    format: 'SVG',
    aspectRatio: '1:1'
  },
  {
    id: 'logo-horizontal-dark',
    name: 'Full Lockup — Horizontal (Dark)',
    description: 'The definitive horizontal lockup: the Dimensional Outline symbol paired with the wide-spaced CHAOS STANDARD wordmark.',
    file: '/brand/chaos-logo-horizontal-dark.svg',
    category: 'Horizontal',
    format: 'SVG',
    aspectRatio: '4:1'
  },
  {
    id: 'logo-horizontal-light',
    name: 'Full Lockup — Horizontal (Light)',
    description: 'Horizontal identity lockup engineered for high contrast on light backgrounds.',
    file: '/brand/chaos-logo-horizontal-light.svg',
    category: 'Horizontal',
    format: 'SVG',
    aspectRatio: '15:4'
  },
  {
    id: 'logo-stacked-dark',
    name: 'Poster Lockup — Stacked (Dark)',
    description: 'Centered vertical presentation. Ideal for game title screens, posters, preview cards, and social headers.',
    file: '/brand/chaos-logo-stacked-dark.svg',
    category: 'Stacked',
    format: 'SVG',
    aspectRatio: '6:7'
  },
  {
    id: 'logo-stacked-light',
    name: 'Poster Lockup — Stacked (Light)',
    description: 'Clean light variant of the stacked mark for documentation and light merchandising.',
    file: '/brand/chaos-logo-stacked-light.svg',
    category: 'Stacked',
    format: 'SVG',
    aspectRatio: '6:7'
  },
  {
    id: 'mark-small',
    name: 'Micro-Scale Mark (Favicon & UI Glyphs)',
    description: 'Simplified outline footprint specifically tuned for 16px to 32px display without blur.',
    file: '/brand/chaos-mark-small.svg',
    category: 'Small',
    format: 'SVG',
    aspectRatio: '1:1'
  },
  {
    id: 'splash-card',
    name: '"A Chaos Standard Game" Splash Presentation',
    description: 'Official 16:9 widescreen presentation card for game boot sequences and video openers.',
    file: '/brand/chaos-splash-card.svg',
    category: 'Presentation',
    format: 'SVG',
    aspectRatio: '16:9'
  }
]

export const BRAND_PALETTE = [
  { name: 'Obsidian Void', hex: '#07090E', role: 'Primary background, depth, absolute contrast' },
  { name: 'Carbon Surface', hex: '#11131B', role: 'Panel surface, container background, glass card core' },
  { name: 'Electric Cyan', hex: '#00E5FF', role: 'Primary signature color, docked accent, laser precision' },
  { name: 'Warning Coral', hex: '#FF7B54', role: 'Anomaly piece accent, fourth-wall breach marker' },
  { name: 'Standard Amber', hex: '#FF9F43', role: 'Interactive highlights, alert states, telemetry' },
  { name: 'Arcane Violet', hex: '#8B5CF6', role: 'Hallucinated Dungeons fantasy glow and eldritch energy' },
  { name: 'Ice Slate / White', hex: '#F8FAFC', role: 'High-contrast typography and singularity aperture center' }
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
    sample: 'Unconventional browser games created with AI.',
    weights: 'Regular (400), Medium (500)',
    notes: 'Neutral, hyper-legible geometric workhorse ensuring effortless readability.'
  }
]
