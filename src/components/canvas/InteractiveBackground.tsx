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

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Generate calibration particles
    const particleCount = Math.min(Math.floor((width * height) / 22000), 75)
    const colors = ['#F5A623', '#00E5FF', '#94A3B8', '#8B5CF6']
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1.2,
        baseAlpha: Math.random() * 0.35 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.8 ? 'cross' : Math.random() > 0.65 ? 'ring' : 'dot'
      })
    }

    let time = 0

    const render = () => {
      time += 0.01
      ctx.clearRect(0, 0, width, height)

      const chaosMultiplier = 0.5 + (chaosLevel / 100) * 1.5

      // Draw faint metric grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)'
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
          // Chaos level influence: at 0 it's rigid/orthogonal, at 100 it has higher turbulence
          if (chaosLevel < 15) {
            // Strict Standard: Orthogonal slow drift
            p.x += Math.sign(p.vx) * 0.2
            p.y += Math.sign(p.vy) * 0.2
          } else {
            p.x += p.vx * chaosMultiplier
            p.y += p.vy * chaosMultiplier
          }

          // Screen wrap
          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0

          // Mouse interaction (repulsion & focal field)
          if (mouseRef.current.active) {
            const dx = p.x - mouseRef.current.x
            const dy = p.y - mouseRef.current.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            const maxDist = 180

            if (dist < maxDist && dist > 0) {
              const force = (1 - dist / maxDist) * 1.5
              p.x += (dx / dist) * force * 3
              p.y += (dy / dist) * force * 3
            }
          }
        }

        // Draw particle
        ctx.save()
        ctx.fillStyle = p.color
        ctx.strokeStyle = p.color
        ctx.globalAlpha = p.baseAlpha

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

        // Subtle connection lines between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = p.color
            ctx.globalAlpha = (1 - dist / 110) * 0.12 * (chaosMultiplier > 1 ? 1.4 : 1)
            ctx.lineWidth = 0.75
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
  }, [chaosLevel])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  )
}
