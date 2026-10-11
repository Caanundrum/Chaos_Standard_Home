export interface GameInfo {
  id: string
  title: string
  subtitle: string
  tagline: string
  status: 'In Active Development' | 'Prototype Preview' | 'Classified / In Development'
  genre: string
  platform: string
  description: string
  features: string[]
  visualTheme: {
    primaryColor: string
    accentColor: string
    bgGradient: string
    borderGlow: string
  }
  previewUrl?: string
  repoUrl?: string
}

export interface BrandAsset {
  id: string
  name: string
  description: string
  file: string
  category: 'Symbol' | 'Horizontal' | 'Stacked' | 'Small' | 'Presentation'
  format: 'SVG'
  aspectRatio: string
}

export type ChaosLevel = number // 0 to 100
