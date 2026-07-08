import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      {eyebrow && (
        <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-charcoal/60">{subtitle}</p>}
    </motion.div>
  )
}
