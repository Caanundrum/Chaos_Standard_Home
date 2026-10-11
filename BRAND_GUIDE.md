# CHAOS STANDARD // BRAND IDENTITY & DESIGN SYSTEM MANUAL
> **Version:** 1.0.0 (Phase 1 Baseline)  
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

## 2. THE LOGO MARK: "THE IMPOSSIBLE DELTA"

The Chaos Standard mark represents the collision of **absolute metric precision** (*"Standard"*) with **impossible optical paradox** (*"Chaos"*).

### Mark Principles
- **Simple & Iconic:** Zero background radar dials, zero degree numbers, zero tick marks. It has massive silhouette strength and is recognizable in 0.05 seconds from any distance.
- **The Impossible Delta:** A mathematically pure, non-Euclidean Penrose prism composed of three bold, interlocking geometric facets:
  - **Facet 1 (Standard Gold `#F5A623`):** Studio prestige, warmth, and deliberate craft.
  - **Facet 2 (Spectral Cyan `#00E5FF`):** Browser-native runtime energy and clarity.
  - **Facet 3 (Titanium White `#F8FAFC` / Obsidian `#0F172A`):** High-contrast structural anchor.
- **The Concept:** Standard Euclidean geometry at every individual joint that assembles into an impossible paradox—the perfect visual metaphor for games with a questionable relationship with reality.

---

## 3. THE OFFICIAL LOGO ASSET SUITE

All assets are stored in vector SVG format in `/public/brand/` and are mirrored directly to `/dist/brand/` during builds:

| Treatment | Filename | Aspect Ratio | Primary Use Case |
| :--- | :--- | :--- | :--- |
| **Primary Emblem (Dark)** | `chaos-symbol-dark.svg` | 1:1 | App icons, avatars, social media profiles, dark hero headers |
| **Primary Emblem (Light)** | `chaos-symbol-light.svg` | 1:1 | Stationery, light print editorial, whitepaper covers |
| **Horizontal Lockup (Dark)** | `chaos-logo-horizontal-dark.svg` | 4:1 | Studio website header, trailer lower thirds, press releases |
| **Horizontal Lockup (Light)** | `chaos-logo-horizontal-light.svg` | 4:1 | Inverted light site themes, business cards, official documents |
| **Stacked Lockup (Dark)** | `chaos-logo-stacked-dark.svg` | 12:13 | Promotional posters, game box art, launch billboards |
| **Stacked Lockup (Light)** | `chaos-logo-stacked-light.svg` | 12:13 | Print posters, merchandise tags, physical packaging |
| **Micro Mark (Favicon)** | `chaos-mark-small.svg` | 1:1 | 16px to 32px browser tabs, system trays, tiny UI badges |
| **"A Chaos Standard Game" Splash** | `chaos-splash-card.svg` | 16:9 | Mandatory 1080p splash screen for all game boot sequences |

---

## 4. COLOR PALETTE SYSTEM

```css
:root {
  /* Surface & Atmospheric Voids */
  --cs-void: #090A0F;        /* Primary page background, absolute contrast */
  --cs-surface: #11131B;     /* Primary container, card backgrounds */
  --cs-elevated: #171924;    /* Modals, tooltips, active states */
  --cs-border: #232736;      /* Default subtle border wire */

  /* Spectral Brand Accents */
  --cs-gold: #F5A623;        /* Standard Gold: calibration target, prestige */
  --cs-cyan: #00E5FF;        /* Spectral Cyan: browser runtime, active signals */
  --cs-crimson: #FF2A5F;     /* Anomaly Crimson: fourth-wall alerts, defiance */
  --cs-violet: #8B5CF6;      /* Arcane Violet: Hallucinated Dungeons fantasy */

  /* High-Legibility Typography */
  --cs-text-main: #F8FAFC;   /* Titanium white headings and primary text */
  --cs-text-muted: #94A3B8;  /* Technical slate secondary copy */
  --cs-text-dim: #64748B;    /* Micro-metadata and telemetry ticks */
}
```

---

## 5. TYPOGRAPHIC HIERARCHY

1. **Display & Headings:** `Space Grotesk`
   - *Weights:* 700 (Bold), 800 (Extra Bold)
   - *Tracking:* `tracking-tight` for titles; `tracking-[0.18em]` to `tracking-[0.25em]` for uppercase wordmarks.
2. **Technical Telemetry & Code:** `JetBrains Mono`
   - *Weights:* 500 (Medium), 700 (Bold)
   - *Use:* Degrees, runtime statistics, HUD metrics, terminal input/output.
3. **Fantasy Display (Hallucinated Dungeons):** `Cinzel`
   - *Weights:* 600, 700
   - *Use:* Tabletop chapter headers, AI Dungeon Master decrees, runic inscriptions.
4. **Body & Interface:** `Inter`
   - *Weights:* 400 (Regular), 500 (Medium), 600 (Semi-Bold)
   - *Use:* Clean, effortless reading across all screen densities.

---

## 6. SOUND & MOTION IDENTITY

- **Zero-Dependency Web Audio Synth:**
  Procedural audio synthesizer implemented directly in `src/utils/sound.ts`. It generates crisp UI haptic clicks, frequency sweeps, ambient chords, and harmonic reveals without external MP3 files.
- **Interactive Canvas Physics:**
  Lightweight 60fps HTML5 Canvas in `src/components/canvas/InteractiveBackground.tsx`. Renders floating telemetry crosshairs and reacts to cursor coordinates and the global "Chaos Calibrator" level. Respects `prefers-reduced-motion`.
- **The "Chaos Calibrator":**
  A live HUD slider (0% to 100%) that alters site physics, microcopy, and terminal responses in real-time.

---

## 7. FUTURE GAME SPLASH SCREEN REQUIREMENT

Every future Chaos Standard browser game (including *Hallucinated Dungeons*, *Do Not Press Submit*, and future unannounced projects) must display the official **"A Chaos Standard Game"** splash card prior to main menu entry:

```tsx
import { ChaosLogo } from './components/brand/ChaosLogo';

export const GameSplash = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <div className="fixed inset-0 bg-[#090A0F] flex items-center justify-center">
      <ChaosLogo variant="splash" theme="dark" interactive={false} />
    </div>
  );
};
```
Or render the static vector directly from `/brand/chaos-splash-card.svg`.
