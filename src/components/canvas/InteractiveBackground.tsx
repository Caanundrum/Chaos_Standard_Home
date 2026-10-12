import React, { useEffect, useRef } from 'react'

interface InteractiveBackgroundProps {
  chaosLevel?: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseAlpha: number
  color: string
  type: 'dot' | 'cross' | 'ring'
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ chaosLevel = 30 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false })
  
  // Track chaos level in a mutable ref so the 60fps render loop reacts instantly without re-creating particles
  const chaosRef = useRef<number>(chaosLevel)
  useEffect(() => {
    chaosRef.current = chaosLevel
  }, [chaosLevel])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Strictly Hazard Orange, Warm Amber, and Slate Grey palette
    const colors = ['#FF6A00', '#FF8533', '#FFA040', '#94A3B8', '#64748B']
    // Balanced count: 22 to 32 particles—sparse and uncluttered, but frequent enough for links
    const particleCount = Math.min(Math.max(20, Math.floor((width * height) / 65000)), 32)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 0.6 + 0.3
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 1.8 + 1.2,
        baseAlpha: Math.random() * 0.25 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.8 ? 'cross' : Math.random() > 0.65 ? 'ring' : 'dot'
      })
    }

    let time = 0

    const render = () => {
      time += 0.015
      ctx.clearRect(0, 0, width, height)

      // Continuous dynamic scale: from 0.35x at 0% to 3.2x speed at 100%
      const currentChaos = chaosRef.current
      const speedMultiplier = 0.35 + (currentChaos / 100) * 2.8
      // Generous connection radius so nearby particles actively form constellation lines
      const connectionDist = 140 + (currentChaos / 100) * 60

      // Faint metric grid lines
      ctx.strokeStyle = `rgba(255, 106, 0, ${0.01 + (currentChaos / 100) * 0.03})`
      ctx.lineWidth = 1
      const gridSpacing = 80
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!prefersReducedMotion) {
          if (currentChaos < 10) {
            // Strict Standard: Orthogonal slow grid drift
            p.x += Math.sign(p.vx) * 0.3
            p.y += Math.sign(p.vy) * 0.3
          } else {
            // Fluid turbulence that accelerates dramatically with chaos
            const noise = Math.sin(time + i) * (currentChaos / 100) * 0.4
            p.x += (p.vx + noise) * speedMultiplier
            p.y += (p.vy + noise) * speedMultiplier
          }

          // Screen wrap
          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0

          // Mouse repulsion
          if (mouseRef.current.active) {
            const dx = p.x - mouseRef.current.x
            const dy = p.y - mouseRef.current.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            const maxDist = 180

            if (dist < maxDist && dist > 0) {
              const force = (1 - dist / maxDist) * 2.2
              p.x += (dx / dist) * force * 3
              p.y += (dy / dist) * force * 3
            }
          }
        }

        // Draw particle
        ctx.save()
        ctx.fillStyle = p.color
        ctx.strokeStyle = p.color
        ctx.globalAlpha = Math.min(0.85, p.baseAlpha * (0.8 + (currentChaos / 100) * 0.6))

        if (currentChaos > 60) {
          ctx.shadowColor = '#FF6A00'
          ctx.shadowBlur = (currentChaos - 60) * 0.25
        }

        if (p.type === 'cross') {
          const arm = p.size * 2
          ctx.beginPath()
          ctx.moveTo(p.x - arm, p.y)
          ctx.lineTo(p.x + arm, p.y)
          ctx.moveTo(p.x, p.y - arm)
          ctx.lineTo(p.x, p.y + arm)
          ctx.stroke()
        } else if (p.type === 'ring') {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2)
          ctx.stroke()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()

        // Branching connection lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDist) {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = p.color
            const alpha = (1 - dist / connectionDist) * 0.28 * (0.8 + (currentChaos / 100) * 0.5)
            ctx.globalAlpha = Math.min(0.4, Math.max(0.02, alpha))
            ctx.lineWidth = currentChaos > 60 ? 1.0 : 0.75
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, []) // Empty dependency array: Particles persist continuously without re-randomizing on slider movement!

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
