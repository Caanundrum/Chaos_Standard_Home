import React from 'react'
import { ChaosLogo } from '../brand/ChaosLogo'
import { sound } from '../../utils/sound'
import { ExternalLink, Sparkles, Terminal, Download, ShieldCheck } from 'lucide-react'


interface FooterProps {
  onOpenBrandKit: () => void
  onOpenTerminal: () => void
  onReplaySplash: () => void
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBrandKit,
  onOpenTerminal,
  onReplaySplash
}) => {
  return (
    <footer className="relative bg-[#06070B] border-t border-white/10 pt-20 pb-14 px-4 sm:px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Studio Brand & Motto (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <ChaosLogo variant="horizontal" theme="dark" interactive={true} />
            <p className="mt-4 text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              We take making ridiculous things extremely seriously. Independent creators of browser-native game experiences with high-fidelity visuals, unconventional mechanics, and questionable relationships with reality.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  sound.playClick()
                  onOpenBrandKit()
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#F8FAFC] transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Brand Assets</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick()
                  onReplaySplash()
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#F8FAFC] transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Replay Studio Reveal</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick()
                  onOpenTerminal()
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#00E5FF] transition-all cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>~ CLI</span>
              </button>
            </div>
          </div>

          {/* Col 2: Games (3 cols) */}
          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#F5A623] font-bold mb-4">
              Game Productions
            </div>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
              <li>
                <a
                  href="#games"
                  onClick={() => sound.playClick()}
                  className="hover:text-[#F8FAFC] transition-colors flex items-center justify-between"
                >
                  <span>Hallucinated Dungeons</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#8B5CF6]">AI RPG</span>
                </a>
              </li>
              <li>
                <a
                  href="https://donotpresssubmit--donotpresssubmit.us-central1.hosted.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="hover:text-[#00E5FF] transition-colors flex items-center justify-between group"
                >
                  <span className="group-hover:underline">Do Not Press Submit</span>
                  <ExternalLink className="w-3 h-3 text-[#00E5FF]" />
                </a>
              </li>
              <li>
                <a
                  href="#games"
                  onClick={() => sound.playClick()}
                  className="hover:text-[#F8FAFC] transition-colors flex items-center justify-between"
                >
                  <span>Project [REDACTED]</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#FF2A5F]">Classified</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio & Engineering (4 cols) */}
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#00E5FF] font-bold mb-4">
              Repository &amp; Studio Links
            </div>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
              <li>
                <a
                  href="https://github.com/Caanundrum/Chaos_Standard_Home"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="hover:text-[#F8FAFC] transition-colors flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 fill-current text-[#F8FAFC]" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="group-hover:underline">GitHub: Caanundrum/Chaos_Standard_Home</span>
                </a>
              </li>
              <li>
                <a
                  href="https://chaosstandard.com"
                  onClick={() => sound.playClick()}
                  className="hover:text-[#F8FAFC] transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                  <span>Official Domain: chaosstandard.com</span>
                </a>
              </li>
              <li className="pt-2 text-xs font-mono text-[#64748B] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
                <span>Static Hosting Target: Firebase Hosting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Chaos Standard. All rights reserved.</span>
          </div>

          <div className="text-center sm:text-right text-[11px]">
            No browsers were permanently harmed in the calibration of this website.
          </div>
        </div>
      </div>
    </footer>
  )
}
