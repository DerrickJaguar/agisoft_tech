import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '../data/siteData'

const SLIDE_DURATION = 4500

export default function ServicesShowcase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % services.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  const active = services[index]

  return (
    <section className="relative h-[70vh] min-h-[420px] overflow-hidden bg-charcoal sm:h-[80vh]">
      <AnimatePresence mode="sync">
        <motion.div
          key={active.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <motion.img
            src={active.image}
            alt={active.title}
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1, ease: 'linear' }}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
      <div className="absolute inset-0 bg-charcoal/20" />

      <div className="relative flex h-full max-w-7xl flex-col justify-end mx-auto px-6 pb-14 sm:px-10 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary-light">
                <active.icon size={20} />
              </span>
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary-light">
                {active.benefit}
              </span>
            </div>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              {active.title}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {active.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex gap-2">
          {services.map((service, i) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${service.title}`}
              className="h-1.5 flex-1 max-w-10 overflow-hidden rounded-full bg-white/20"
            >
              {i === index && (
                <motion.span
                  key={active.title}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                  className="block h-full bg-primary-light"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
