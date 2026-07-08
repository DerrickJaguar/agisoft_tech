import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-primary/25 blur-[110px]" />
        <div className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-primary-light/15 blur-[110px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto max-w-3xl px-6 text-center sm:px-10"
      >
        {eyebrow && (
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary-light">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 text-lg leading-relaxed text-white/70">{subtitle}</p>}
      </motion.div>
    </section>
  )
}
