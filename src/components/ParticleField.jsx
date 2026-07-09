import { useMemo } from 'react'
import { motion } from 'framer-motion'

function seededParticles(count) {
  const particles = []
  let seed = 42
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  for (let i = 0; i < count; i += 1) {
    particles.push({
      left: rand() * 100,
      top: rand() * 100,
      size: 1.5 + rand() * 2.5,
      duration: 6 + rand() * 8,
      delay: rand() * 6,
    })
  }
  return particles
}

export default function ParticleField({ count = 24, className = '' }) {
  const particles = useMemo(() => seededParticles(count), [count])

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary-light/50"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
