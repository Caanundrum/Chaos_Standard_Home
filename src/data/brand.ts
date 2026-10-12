import type { BrandAsset } from '../types'

export const BRAND_ASSETS: BrandAsset[] = [
  {
    id: 'master-png',
    name: 'Master Brand Lockup (Hi-Res PNG)',
    description: 'The master identity: Bewildered Terminal mascot with slate grey CRT screen and hazard orange bezel, paired with the dual-tone cracked CHAOS and brushed STANDARD letterforms on pitch black.',
    file: '/brand/chaos-logo-master.png',
    category: 'Master',
    format: 'PNG',
    aspectRatio: '1:1'
  },
  {
    id: 'master-transparent',
    name: 'Master Lockup — Transparent (PNG)',
    description: 'High-resolution 1024x1024 master lockup with alpha transparency. Ideal for overlaying onto game titles, dark stream overlays, and custom UI.',
    file: '/brand/chaos-logo-transparent.png',
    category: 'Master',
    format: 'PNG',
    aspectRatio: '1:1'
  },
  {
    id: 'master-jpg',
    name: 'Master Brand Lockup (Hi-Res JPG)',
    description: 'Standard 1024x1024 JPEG on solid pitch-black (#05070A) background. Universally compatible for social avatars, Discord icons, and Steam / web headers.',
    file: '/brand/chaos-logo-master.jpg',
    category: 'Master',
    format: 'JPG',
    aspectRatio: '1:1'
  },
  {
    id: 'terminal-mark-png',
    name: 'Bewildered Terminal Mark (PNG)',
    description: 'The standalone terminal mascot mark: black casing, hazard orange bevel, slate CRT screen, bewildered eyes, raised eyebrow, and crooked smirk.',
    file: '/brand/chaos-mark-symbol.png',
    category: 'Symbol',
    format: 'PNG',
    aspectRatio: '1:1'
  },
  {
    id: 'terminal-mark-jpg',
    name: 'Bewildered Terminal Mark (JPG)',
    description: 'Standalone terminal mascot mark formatted as a 512x512 JPEG on black background for profile pictures and app store icons.',
    file: '/brand/chaos-mark-symbol.jpg',
    category: 'Symbol',
    format: 'JPG',
    aspectRatio: '1:1'
  },
  {
    id: 'wordmark-png',
    name: 'Wordmark Lockup (PNG)',
    description: 'The isolated typographic lockup: fractured hazard orange CHAOS with electric lightning cracks atop the rigid, sci-fi brushed slate STANDARD font.',
    file: '/brand/chaos-wordmark.png',
    category: 'Wordmark',
    format: 'PNG',
    aspectRatio: '5:2'
  },
  {
    id: 'splash-card-png',
    name: '16:9 Cinematic Splash Card (PNG)',
    description: 'Master 1920x1080 widescreen presentation card for browser boot sequences, intro animations, and YouTube/Twitch title cards.',
    file: '/brand/chaos-splash-card.png',
    category: 'Presentation',
    format: 'PNG',
    aspectRatio: '16:9'
  },
  {
    id: 'splash-card-jpg',
    name: '16:9 Cinematic Splash Card (JPG)',
    description: '1920x1080 JPEG splash card for open-graph social previews, thumbnail cards, and fast-loading web covers.',
    file: '/brand/chaos-splash-card.jpg',
    category: 'Presentation',
    format: 'JPG',
    aspectRatio: '16:9'
  },
  {
    id: 'favicon-png',
    name: 'Micro Glyph & Favicon (PNG)',
    description: 'Pixel-tuned micro symbol asset optimized for 16px to 64px browser tabs, address bars, and mobile home screen bookmarks.',
    file: '/favicon.png',
    category: 'Small',
    format: 'PNG',
    aspectRatio: '1:1'
  }
]

export const BRAND_PALETTE = [
  { name: 'Pitch Black', hex: '#05070A', role: 'Master background, CRT chassis, void contrast' },
  { name: 'Hazard Orange', hex: '#FF6A00', role: 'Primary chaos signature, monitor bezel, lightning fractures' },
  { name: 'CRT Slate Phosphor', hex: '#1E222A', role: 'Terminal CRT background screen, subtle grid scanlines' },
  { name: 'Standard Slate', hex: '#94A3B8', role: 'Uniform sci-fi block lettering, precision telemetry, secondary text' },
  { name: 'Carbon Surface', hex: '#11131B', role: 'Panel surface, container background, glass card core' }
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
