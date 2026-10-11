import React, { useState, useRef, useEffect } from 'react'
import { sound } from '../../utils/sound'
import { Terminal, X, CornerDownLeft } from 'lucide-react'



interface ChaosTerminalProps {
  isOpen: boolean
  onClose: () => void
  chaosLevel: number
  setChaosLevel: (level: number) => void
}

interface CommandLog {
  id: string
  command?: string
  response: string
  type: 'info' | 'warn' | 'success' | 'system'
}

export const ChaosTerminal: React.FC<ChaosTerminalProps> = ({
  isOpen,
  onClose,
  chaosLevel,
  setChaosLevel
}) => {
  const [input, setInput] = useState<string>('')
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      response: 'CHAOS STANDARD CLI // RUNTIME v1.0.0 (INITIALIZED)',
      type: 'system'
    },
    {
      id: 'init-2',
      response: 'Type "help" for a list of available studio commands.',
      type: 'info'
    }
  ])

  const inputRef = useRef<HTMLInputElement | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  if (!isOpen) return null

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    if (!cmd) return

    sound.playClick()
    const nextLogs: CommandLog[] = [
      ...logs,
      { id: String(Date.now()), command: input, response: '', type: 'info' }
    ]

    const parts = cmd.split(' ')
    const root = parts[0]
    const arg = parts[1]

    let response = ''
    let type: CommandLog['type'] = 'info'

    switch (root) {
      case 'help':
        response = `Available Commands:
  • help       - Show this command reference
  • status     - Query studio reality coherence & telemetry
  • games      - List active and incubating game titles
  • dungeon    - Ask the AI Dungeon Master for spontaneous advice
  • submit     - Inquire about the "Do Not Press Submit" protocol
  • chaos <N>  - Set site Chaos Calibrator level (0 to 100)
  • flip       - Temporarily tilt your perspective
  • matrix     - Decode raw studio telemetry stream
  • clear      - Clear terminal screen
  • exit       - Close this developer console`
        break

      case 'status':
        response = `STUDIO TELEMETRY:
  - Runtime: Browser-Native (Web Standards)
  - Reality Coherence: 94.2% (Degrading gracefully)
  - Fourth-Wall Integrity: 12% (Structural cracks detected)
  - Current Chaos Calibrator: ${chaosLevel}%
  - Sound Synth: Web Audio API procedural engine`
        type = 'system'
        break

      case 'games':
        response = `CATALOG INDEX:
  1. Hallucinated Dungeons   [AI Multiplayer Tabletop RPG] -> Active Dev
  2. Do Not Press Submit     [Antagonistic UI Comedy]      -> Dev Preview Live
  3. Project [REDACTED]      [Browser-Native Anomaly]       -> Classified`
        type = 'success'
        break

      case 'dungeon':
        sound.playDungeonRoll()
        response = `THE AI DUNGEON MASTER REPLIES:
"You encounter a door with three locks and a sign that says 'Occupied'. Do you attempt to pick the lock, cast Fireball, or apologize and wait outside?"`
        type = 'warn'
        break

      case 'submit':
        sound.playBuzzer()
        response = `ANTAGONISTIC UI ALERT:
We specifically instructed you not to press submit. Asking about it in the CLI counts as intent to violate protocol. Your mouse coordinates have been noted.`
        type = 'warn'
        break

      case 'chaos':
        if (arg !== undefined) {
          const num = parseInt(arg, 10)
          if (!isNaN(num) && num >= 0 && num <= 100) {
            setChaosLevel(num)
            sound.playGlitch()
            response = `Chaos Calibrator updated to ${num}%. Reality distortion field adjusted.`
            type = 'success'
          } else {
            response = 'Usage: chaos <0-100>'
            type = 'warn'
          }
        } else {
          response = `Current chaos level is ${chaosLevel}%. Set with: chaos <0-100>`
        }
        break

      case 'matrix':
        sound.playGlitch()
        response = `01000011 01001000 01000001 01001111 01010011 // STANDARD_VERIFIED
01010011 01010100 01000001 01001110 01000100 01000001 01010010 01000100
WE TAKE MAKING RIDICULOUS THINGS EXTREMELY SERIOUSLY.`
        type = 'success'
        break

      case 'flip':
        sound.playGlitch()
        document.body.style.transition = 'transform 0.5s ease'
        document.body.style.transform = 'rotate(180deg)'
        setTimeout(() => {
          document.body.style.transform = 'rotate(0deg)'
        }, 1200)
        response = 'Perspective inverted. Restoring equilibrium...'
        type = 'warn'
        break

      case 'clear':
        setLogs([])
        setInput('')
        return

      case 'exit':
      case 'quit':
        onClose()
        return

      default:
        response = `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`
        type = 'warn'
        break
    }

    nextLogs[nextLogs.length - 1].response = response
    nextLogs[nextLogs.length - 1].type = type
    setLogs(nextLogs)
    setInput('')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Chaos Standard Developer CLI"
    >
      <div className="w-full max-w-3xl h-[520px] bg-[#07090E] border border-[#00E5FF]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0F131C] border-b border-white/10">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-[#F8FAFC] font-bold">CHAOS STANDARD // DEV CONSOLE</span>
            <span className="text-[#64748B] text-[10px] hidden sm:inline">[CALIBRATION: {chaosLevel}%]</span>
          </div>

          <button
            onClick={() => {
              sound.playClick()
              onClose()
            }}
            className="p-1 rounded hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            aria-label="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#04060A]">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              {log.command && (
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <span className="text-[#00E5FF]">&gt;</span>
                  <span className="text-[#F8FAFC] font-semibold">{log.command}</span>
                </div>
              )}
              {log.response && (
                <div
                  className={`pl-4 whitespace-pre-wrap ${
                    log.type === 'warn'
                      ? 'text-[#FF2A5F]'
                      : log.type === 'success'
                      ? 'text-[#F5A623]'
                      : log.type === 'system'
                      ? 'text-[#00E5FF]'
                      : 'text-[#CBD5E1]'
                  }`}
                >
                  {log.response}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-[#0C0F17] border-t border-white/10">
          <span className="text-[#00E5FF] mr-2 font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'status', 'dungeon', 'submit', 'chaos 100'..."
            className="flex-1 bg-transparent text-[#F8FAFC] focus:outline-none placeholder:text-[#64748B]"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-white/10 hover:bg-[#00E5FF] hover:text-[#090A0F] text-[#F8FAFC] transition-colors cursor-pointer"
            title="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  )
}
