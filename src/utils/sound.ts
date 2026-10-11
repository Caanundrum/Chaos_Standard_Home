// Procedural Web Audio API sound generator for Chaos Standard
// Zero external asset dependencies, instant loading, 100% offline

class SoundController {
  private ctx: AudioContext | null = null
  private muted: boolean = false

  constructor() {
    // AudioContext will be initialized on first user gesture to comply with browser autoplay policies
  }

  private getContext(): AudioContext | null {
    if (this.muted) return null
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
    return this.ctx
  }

  public isMuted(): boolean {
    return this.muted
  }

  public toggleMute(): boolean {
    this.muted = !this.muted
    return this.muted
  }

  public setMuted(muted: boolean): void {
    this.muted = muted
  }

  // Crisp subtle micro-chirp for hover states
  public playHover(): void {
    const ctx = this.getContext()
    if (!ctx) return

    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      const now = ctx.currentTime
      osc.frequency.setValueAtTime(880, now)
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.04)

      gain.gain.setValueAtTime(0.03, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.04)
    } catch {
      // AudioContext failsafe
    }
  }

  // Tactile mechanical switch click for buttons
  public playClick(): void {
    const ctx = this.getContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(440, now)
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.06)

      gain.gain.setValueAtTime(0.08, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.06)
    } catch {
      // Failsafe
    }
  }

  // Cinematic studio chord reveal (A Chaos Standard Game splash)
  public playStudioReveal(): void {
    const ctx = this.getContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const chord = [110, 220, 277.18, 329.63, 440, 554.37] // A Major / E resonant harmonic series

      // Sub-bass rumble
      const subOsc = ctx.createOscillator()
      const subGain = ctx.createGain()
      subOsc.type = 'sine'
      subOsc.frequency.setValueAtTime(55, now)
      subOsc.frequency.exponentialRampToValueAtTime(40, now + 1.8)
      subGain.gain.setValueAtTime(0.18, now)
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0)
      subOsc.connect(subGain)
      subGain.connect(ctx.destination)
      subOsc.start(now)
      subOsc.stop(now + 2.0)

      // Harmonic chime stack
      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        const delay = idx * 0.04

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle'
        osc.frequency.setValueAtTime(freq, now + delay)

        gain.gain.setValueAtTime(0, now)
        gain.gain.setValueAtTime(0.04, now + delay)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 2.2)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(now + delay)
        osc.stop(now + delay + 2.3)
      })
    } catch {
      // Failsafe
    }
  }

  // Glitch sound for chaos calibration or fourth-wall anomalies
  public playGlitch(): void {
    const ctx = this.getContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(180, now)
      osc.frequency.linearRampToValueAtTime(2400, now + 0.04)
      osc.frequency.setValueAtTime(320, now + 0.05)
      osc.frequency.linearRampToValueAtTime(120, now + 0.1)

      gain.gain.setValueAtTime(0.06, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.1)
    } catch {
      // Failsafe
    }
  }

  // Dice roll / stone rumble for Hallucinated Dungeons
  public playDungeonRoll(): void {
    const ctx = this.getContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const times = [0, 0.05, 0.1, 0.16, 0.23, 0.32]
      times.forEach((t, i) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        const freq = 180 + Math.random() * 220 + (i === times.length - 1 ? 150 : 0)
        osc.frequency.setValueAtTime(freq, now + t)

        gain.gain.setValueAtTime(0.05, now + t)
        gain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.06)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(now + t)
        osc.stop(now + t + 0.07)
      })
    } catch {
      // Failsafe
    }
  }

  // Humorous alert buzzer for Do Not Press Submit
  public playBuzzer(): void {
    const ctx = this.getContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(140, now)
      osc.frequency.setValueAtTime(130, now + 0.08)

      gain.gain.setValueAtTime(0.09, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.22)
    } catch {
      // Failsafe
    }
  }

  // Cheerful chime
  public playSuccess(): void {
    const ctx = this.getContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const notes = [523.25, 659.25, 783.99, 1046.5] // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        const delay = idx * 0.07

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now + delay)

        gain.gain.setValueAtTime(0.05, now + delay)
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.4)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(now + delay)
        osc.stop(now + delay + 0.45)
      })
    } catch {
      // Failsafe
    }
  }
}

export const sound = new SoundController()
