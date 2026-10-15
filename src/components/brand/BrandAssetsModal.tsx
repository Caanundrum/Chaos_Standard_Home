import React, { useState } from 'react'
import { BRAND_ASSETS, BRAND_PALETTE, BRAND_TYPOGRAPHY } from '../../data/brand'
import { ChaosLogo } from './ChaosLogo'
import { sound } from '../../utils/sound'
import {
  X,
  Download,
  Copy,
  Check,
  Play,
  Layers,
  Palette,
  Type,
  Code2
} from 'lucide-react'

interface BrandAssetsModalProps {
  isOpen: boolean
  onClose: () => void
  onPlaySplash: () => void
}

export const BrandAssetsModal: React.FC<BrandAssetsModalProps> = ({
  isOpen,
  onClose,
  onPlaySplash
}) => {
  const [activeTab, setActiveTab] = useState<'logos' | 'colors' | 'typography' | 'code'>('logos')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [copiedCode, setCopiedCode] = useState<boolean>(false)

  if (!isOpen) return null

  const handleCopyHex = (hex: string) => {
    sound.playClick()
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 1800)
  }

  const handleCopyCode = () => {
    sound.playClick()
    const codeSnippet = `import { ChaosLogo } from '@chaos-standard/brand'

// Available variants: 'symbol' | 'horizontal' | 'stacked' | 'small' | 'splash'
export const ChaosSplash = () => (
  <ChaosLogo variant="splash" theme="dark" interactive={true} />
)`
    navigator.clipboard.writeText(codeSnippet)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const filteredAssets = selectedCategory === 'All'
    ? BRAND_ASSETS
    : BRAND_ASSETS.filter(a => a.category === selectedCategory)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Chaos Standard Brand Assets & Design System"
    >
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#0C0E14] border border-white/15 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#11131B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <ChaosLogo variant="symbol" theme="dark" interactive={false} />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[#F8FAFC]">
                Chaos Standard Brand Identity &amp; Assets
              </h2>
              <div className="font-mono text-xs text-[#FF6A00]">
                VERSION 2.0.0 // REUSABLE PNG / JPG MASTER SUITE
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sound.playClick()
                onPlaySplash()
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF6A00]/15 border border-[#FF6A00]/30 hover:bg-[#FF6A00] hover:text-[#05070A] text-[#FF6A00] text-xs font-mono font-semibold transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Simulate Splash Screen</span>
            </button>

            <button
              onClick={() => {
                sound.playClick()
                onClose()
              }}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
              aria-label="Close Brand Assets Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center px-6 border-b border-white/10 bg-[#0E1017] gap-2 overflow-x-auto">
          <button
            onClick={() => {
              sound.playClick()
              setActiveTab('logos')
            }}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'logos'
                ? 'border-[#FF6A00] text-[#FF6A00]'
                : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Master Suite ({BRAND_ASSETS.length})</span>
          </button>

          <button
            onClick={() => {
              sound.playClick()
              setActiveTab('colors')
            }}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'colors'
                ? 'border-[#FF6A00] text-[#FF6A00]'
                : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Hazard Orange &amp; Slate Palette</span>
          </button>

          <button
            onClick={() => {
              sound.playClick()
              setActiveTab('typography')
            }}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'typography'
                ? 'border-[#94A3B8] text-[#94A3B8]'
                : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Typography Spec</span>
          </button>

          <button
            onClick={() => {
              sound.playClick()
              setActiveTab('code')
            }}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'code'
                ? 'border-[#FF6A00] text-[#FF6A00]'
                : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Integration &amp; Usage</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {/* TAB 1: LOGO FAMILY */}
          {activeTab === 'logos' && (
            <div>
              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
                {['All', 'Master', 'Symbol', 'Wordmark', 'Presentation', 'Small'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      sound.playClick()
                      setSelectedCategory(cat)
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#FF6A00] text-[#05070A]'
                        : 'bg-white/5 text-[#94A3B8] hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Asset Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAssets.map(asset => {
                  const isLightFile = asset.file.includes('light')
                  return (
                    <div
                      key={asset.id}
                      className="rounded-2xl border border-white/10 bg-[#12141C] p-5 flex flex-col justify-between hover:border-white/20 transition-all"
                    >
                      {/* Asset Preview Frame */}
                      <div
                        className={`h-48 rounded-xl flex items-center justify-center p-4 mb-4 border border-white/10 overflow-hidden ${
                          isLightFile ? 'bg-[#F8FAFC]' : 'bg-[#05070A]'
                        }`}
                      >
                        <img
                          src={asset.file}
                          alt={asset.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Asset Metadata */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-[10px] text-[#FF6A00] uppercase font-bold">
                            {asset.category} // {asset.format}
                          </span>
                          <span className="font-mono text-[10px] text-[#64748B]">
                            RATIO: {asset.aspectRatio}
                          </span>
                        </div>
                        <h4 className="font-display text-base font-bold text-[#F8FAFC] mb-1">
                          {asset.name}
                        </h4>
                        <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                          {asset.description}
                        </p>
                      </div>

                      {/* Download Button */}
                      <a
                        href={asset.file}
                        download
                        onClick={() => sound.playClick()}
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#FF6A00] hover:text-[#05070A] text-[#F8FAFC] text-xs font-mono font-bold transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Asset ({asset.format})</span>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* TAB 2: COLOR PALETTE */}
          {activeTab === 'colors' && (
            <div>
              <div className="text-sm text-[#94A3B8] mb-6 font-mono">
                Official Chaos Standard color tokens. Click any hex code to copy to clipboard.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {BRAND_PALETTE.map(c => (
                  <div
                    key={c.name}
                    onClick={() => handleCopyHex(c.hex)}
                    className="p-4 rounded-xl bg-[#12141C] border border-white/10 hover:border-white/30 cursor-pointer transition-all flex flex-col justify-between"
                  >
                    <div
                      style={{ backgroundColor: c.hex }}
                      className="w-full h-16 rounded-lg mb-3 border border-white/10 flex items-center justify-center"
                    >
                      {copiedHex === c.hex && (
                        <span className="px-2 py-1 rounded bg-black/80 text-white font-mono text-xs flex items-center gap-1 font-bold">
                          <Check className="w-3 h-3 text-[#FF6A00]" /> Copied!
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-display font-bold text-[#F8FAFC] text-sm">
                        {c.name}
                      </div>
                      <div className="font-mono text-xs text-[#FF6A00] font-bold mt-0.5">
                        {c.hex}
                      </div>
                      <div className="text-[11px] text-[#64748B] mt-1">
                        {c.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TYPOGRAPHY SPEC */}
          {activeTab === 'typography' && (
            <div className="space-y-6">
              {BRAND_TYPOGRAPHY.map(t => (
                <div key={t.role} className="p-6 rounded-2xl bg-[#12141C] border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#FF6A00] uppercase font-bold">
                      {t.role}
                    </span>
                    <span className="font-mono text-xs text-[#64748B]">
                      {t.weights}
                    </span>
                  </div>
                  <div className="font-display text-2xl font-extrabold text-[#F8FAFC] mb-2">
                    {t.name}
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5 font-mono text-sm text-[#FF6A00] mb-3">
                    {t.sample}
                  </div>
                  <div className="text-xs text-[#94A3B8]">
                    {t.notes}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: INTEGRATION & USAGE */}
          {activeTab === 'code' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#12141C] border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-display text-lg font-bold text-[#F8FAFC]">
                    Using "A Chaos Standard Game" in Future Projects
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#FF6A00] hover:text-[#05070A] text-xs font-mono text-[#F8FAFC] font-semibold transition-all cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'COPIED!' : 'COPY CODE'}</span>
                  </button>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Every future game built under the Chaos Standard banner (including Hallucinated Dungeons, Do Not Press Submit, and upcoming titles) can use the reusable high-res splash card <code className="bg-black/60 px-1.5 py-0.5 rounded text-[#FF6A00]">/brand/chaos-splash-card.png</code> or master lockup <code className="bg-black/60 px-1.5 py-0.5 rounded text-[#FF6A00]">/brand/chaos-logo-master.png</code>.
                </p>
                <pre className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-[#E2E8F0] overflow-x-auto">
{`// Example React Splash Screen Implementation:
import React, { useEffect } from 'react';

export const ChaosSplash = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[#05070A] flex items-center justify-center">
      <img 
        src="/brand/chaos-splash-card.png" 
        alt="Chaos Standard" 
        className="max-w-3xl w-full animate-fade-in"
      />
    </div>
  );
};`}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#11131B] border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#64748B]">
          <span>© 2026 CHAOS STANDARD</span>
          <button
            onClick={() => {
              sound.playClick()
              onClose()
            }}
            className="text-[#94A3B8] hover:text-[#F8FAFC] font-semibold cursor-pointer"
          >
            Close Window [Esc]
          </button>
        </div>
      </div>
    </div>
  )
}
