# CHAOS STANDARD // BRAND IDENTITY & DESIGN SYSTEM MANUAL
> **Version:** 2.0.0 (Master Symmetrical Suite)  
> **Studio Tagline:** *"We take making ridiculous things extremely seriously."*  
> **Official Website:** [https://chaosstandard.com](https://chaosstandard.com)  
> **Repository:** [https://github.com/Caanundrum/Chaos_Standard_Home](https://github.com/Caanundrum/Chaos_Standard_Home)

---

## 1. STUDIO ESSENCE & PHILOSOPHY

Chaos Standard is an independent game studio pioneering browser-native gaming. We build games with museum-grade artistic fidelity, unconventional mechanics, strong player agency, and an intentional streak of controlled chaos.

### The 70/30 Aesthetic Ratio
- **70% Prestige Gaming Studio:** A24 Films meets CERN particle laboratory meets boutique indie atelier. Architectural typography, precision calibration reticles, intentional lighting, deep obsidian atmospheric depth, and tactile haptic audio.
- **30% Controlled Anomaly & 4th-Wall Breaking:** The interface is subtly sentient. Buttons evade impulsive cursors, telemetry reports questionable reality coherence, and the software acknowledges the human behind the glass.
- **The Core Rule:** *Never sacrifice usability for a joke.* The player can always navigate, read, and explore with effortless clarity.

---

## 2. THE LOGO MARK: "THE BEWILDERED TERMINAL"

The Chaos Standard brand identity centers on **The Bewildered Terminal (Chaos Monitor)**: an anthropomorphic retro-futuristic CRT computer monitor that has witnessed too much procedural reality distortion.

```
       ┌──────────────────────────────┐
       │   ┌──────────────────────┐   │
       │   │  (•)          (o)    │   │  <-- Expressive CRT phosphor face
       │   │           ⌢          │   │      (Slate Grey #1E222A)
       │   └──────────────────────┘   │
       └──────────────┬┬──────────────┘  <-- Clean Symmetrical Chassis & Stand
                      ││
       ╔══════════════╧╧══════════════╗
       ║   C  H  A  O  S              ║  <-- Fractured Hazard Orange (#FF6A00)
       ║      S T A N D A R D         ║  <-- Precision Brushed Slate (#94A3B8)
       ╚══════════════════════════════╝
```

### Anatomical & Structural Principles
1. **Frontal Symmetrical Silhouette:** Pure frontal CRT monitor casing. All rear 3D chassis protrusions have been cleanly eliminated for a balanced, timeless silhouette that scales effortlessly down to a favicon.
2. **Clutter-Free Stand Coupling:** The monitor stand transitions directly into the typography with natural visual breathing room (zero intermediary horizontal bars).
3. **Zero-White Phosphor Display:** The monitor screen is rendered in dark CRT Slate Phosphor (`#1E222A`), entirely free of harsh white elements. Asymmetrical pupils, raised eyebrow, and crooked smirk are drawn with clean phosphor linework.
4. **Dual Typographic Contrast:**
   - **`CHAOS`**: Aggressive, custom-fractured letterforms in vivid Hazard Orange (`#FF6A00`) torn by electric lightning energy.
   - **`STANDARD`**: Grounded, precision-spaced sci-fi block capitals in Standard Slate (`#94A3B8`).

---

## 3. THE OFFICIAL LOGO ASSET SUITE

All master assets are stored in `/public/brand/` and are mirrored directly to `/dist/brand/` during builds:

| Asset Treatment | Filename | Ratio / Dimensions | Primary Use Case |
| :--- | :--- | :--- | :--- |
| **Master Lockup (Hi-Res PNG)** | `chaos-logo-master.png` | 1:1 (1024×1024) | Primary studio lockup on pitch-black background; web headers, store pages, press kits. |
| **Master Lockup (Transparent PNG)** | `chaos-logo-transparent.png` | 1:1 (1024×1024) | High-res cutout with alpha transparency; game title overlays, dark UI, box art, stream graphics. |
| **Master Lockup (JPG)** | `chaos-logo-master.jpg` | 1:1 (1024×1024) | Universal JPEG format for Discord icons, social avatars, and web covers. |
| **Bewildered Terminal Mark (PNG)** | `chaos-mark-symbol.png` | 1:1 (512×512) | Standalone mascot symbol (monitor chassis + face) on transparent background. |
| **Bewildered Terminal Mark (JPG)** | `chaos-mark-symbol.jpg` | 1:1 (512×512) | Standalone mascot symbol on solid black background for app icons and square badges. |
| **Wordmark Lockup (PNG)** | `chaos-wordmark.png` | 5:2 | Isolated typographic lockup (`CHAOS STANDARD`) with transparent background. |
| **16:9 Cinematic Splash Card (PNG)** | `chaos-splash-card.png` | 16:9 (1920×1080) | Master 1080p widescreen presentation card for boot sequences, video title cards, and trailers. |
| **16:9 Cinematic Splash Card (JPG)** | `chaos-splash-card.jpg` | 16:9 (1920×1080) | Open-Graph social card and fast-loading web preview. |
| **Micro Glyph & Favicon** | `/favicon.png` | 1:1 (64×64) | Pixel-tuned micro glyph optimized for 16px to 64px browser tabs and home screen bookmarks. |

---

## 4. COLOR PALETTE SYSTEM

```css
:root {
  /* Surface & Atmospheric Voids */
  --cs-pitch-black: #05070A;       /* Master canvas background, CRT chassis, void contrast */
  --cs-surface-carbon: #11131B;    /* Card containers, terminal backgrounds, glass layers */
  --cs-surface-elevated: #171924;  /* Modals, tooltips, active states */
  --cs-border-subtle: #232736;     /* Default wire borders */

  /* Core Studio Brand Accents */
  --cs-hazard-orange: #FF6A00;     /* Primary brand accent: monitor bevel, lightning cracks, CTA */
  --cs-warm-amber: #FFA040;        /* Secondary accent: particle glow, hover highlights */
  --cs-slate-phosphor: #1E222A;    /* CRT screen surface, terminal scanline background */
  --cs-slate-standard: #94A3B8;    /* Precision typography, brushed STANDARD lettering, metadata */
  --cs-slate-dim: #64748B;         /* Technical tick marks, secondary telemetry */

  /* Game Universe Accents */
  --cs-cyan: #00E5FF;              /* "Do Not Press Submit" UI accent */
  --cs-crimson: #FF2A5F;           /* "Do Not Press Submit" anomaly warning */
  --cs-violet: #8B5CF6;            /* "Hallucinated Dungeons" arcane fantasy */
  --cs-gold: #F5A623;              /* "Hallucinated Dungeons" tabletop prestige */
}
```

---

## 5. TYPOGRAPHIC HIERARCHY

1. **Display & Headings:** `Space Grotesk`
   - *Weights:* 500 (Medium), 700 (Bold), 800 (Extra Bold)
   - *Tracking:* `tracking-tight` for titles; `tracking-[0.18em]` to `tracking-[0.25em]` for uppercase wordmarks.
2. **Technical Telemetry & Code:** `JetBrains Mono`
   - *Weights:* 400 (Regular), 500 (Medium), 700 (Bold)
   - *Use:* Degrees, runtime statistics, HUD metrics, terminal input/output.
3. **Fantasy Display (Hallucinated Dungeons):** `Cinzel`
   - *Weights:* 600, 700, 800
   - *Use:* Tabletop chapter headers, AI Dungeon Master decrees, runic inscriptions.
4. **Body & Interface:** `Inter`
   - *Weights:* 400 (Regular), 500 (Medium), 600 (Semi-Bold)
   - *Use:* Clean, effortless reading across all screen densities.

---

## 6. SOUND & MOTION IDENTITY

- **Continuous CRT Splash Reveal:**
  The studio reveal sequence (`StudioSplashReveal.tsx`) mimics a CRT electron beam unzipping vertically across the screen via dynamic `clip-path`, unveiling the mascot and wordmark in a fluid spring motion paired with procedural synth chimes.
- **Dynamic Constellation Background:**
  Lightweight HTML5 Canvas in `InteractiveBackground.tsx`. Renders ambient hazard orange, warm amber, and slate grey particles connected by dynamic constellation filaments that expand with entropy level.
- **The "Chaos Calibrator":**
  A live HUD slider (0% to 100%) that alters particle drift velocity (from 0.35x up to 3.2x), background turbulence, grid illumination, and terminal telemetry in real time.
- **Zero-Dependency Web Audio Synth:**
  Procedural audio synthesizer implemented directly in `src/utils/sound.ts`. Generates crisp UI haptic clicks, frequency sweeps, ambient chords, and harmonic reveals without external audio files.

---

## 7. GAME SPLASH SCREEN REQUIREMENT

Every future Chaos Standard browser game (including *Hallucinated Dungeons*, *Do Not Press Submit*, and future unannounced projects) must display the official **"A Chaos Standard Game"** splash card prior to main menu entry:

```tsx
import { ChaosLogo } from './components/brand/ChaosLogo';

export const GameSplash = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <div className="fixed inset-0 bg-[#05070A] flex items-center justify-center">
      <ChaosLogo variant="splash" theme="dark" interactive={false} />
    </div>
  );
};
```
Or render the static 16:9 1080p asset directly from `/brand/chaos-splash-card.png`.

---

## 8. LICENSE & USAGE

© 2026 Chaos Standard. All brand marks, assets, character designs, and logos are proprietary intellectual property of Chaos Standard.
