import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ value, duration = 1.6 }) {
  const match = value.match(/^(\d+)(.*)$/)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(match ? '0' : value)

  useEffect(() => {
    if (!isInView || !match) return
    const target = parseInt(match[1], 10)
    const suffix = match[2]
    const start = performance.now()

    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - (1 - progress) * (1 - progress)
      setDisplay(Math.round(eased * target) + suffix)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, match, duration])

  return <span ref={ref}>{display}</span>
}
