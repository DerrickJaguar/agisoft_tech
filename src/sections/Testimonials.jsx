import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/siteData'

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[index]

  return (
    <section className="section-padding mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by teams who demand results"
        subtitle="Don't just take our word for it — hear from the clients we've partnered with."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <Quote size={48} className="mx-auto text-primary/20" />

        <div className="relative mt-4 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-5 text-xl font-medium leading-relaxed text-charcoal dark:text-white">
                “{current.quote}”
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 font-heading text-sm font-semibold text-primary">
                  {getInitials(current.name)}
                </div>
                <div className="text-left">
                  <p className="font-heading text-base font-semibold text-charcoal dark:text-white">
                    {current.name}
                  </p>
                  <p className="text-sm text-charcoal/50 dark:text-white/50">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 dark:border-white/10 text-charcoal dark:text-white transition-colors hover:bg-primary hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-primary' : 'w-2 bg-charcoal/15'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 dark:border-white/10 text-charcoal dark:text-white transition-colors hover:bg-primary hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
