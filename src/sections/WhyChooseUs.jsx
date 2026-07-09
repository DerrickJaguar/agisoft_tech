import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { comparisonPoints } from '../data/siteData'

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="section-padding mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Why Choose Agisoft?"
        title="A partner you can build your future on"
        subtitle="We don't just write code — we deliver measurable business outcomes with a team that stands behind its work."
      />

      <div className="mt-14 overflow-hidden rounded-2xl border border-charcoal/10 dark:border-white/10">
        <div className="hidden grid-cols-[1.2fr_1fr_1fr] bg-charcoal text-white sm:grid">
          <div className="p-5 font-heading text-sm font-semibold uppercase tracking-wide">
            What matters
          </div>
          <div className="flex items-center gap-2 border-l border-white/10 p-5 font-heading text-sm font-semibold text-primary-light">
            Agisoft Technologies
          </div>
          <div className="border-l border-white/10 p-5 font-heading text-sm font-semibold text-white/50">
            Typical Providers
          </div>
        </div>

        <div>
          {comparisonPoints.map((row, i) => (
            <motion.div
              key={row.point}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: (i % 10) * 0.04 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`grid grid-cols-1 gap-2 border-t border-charcoal/10 p-5 transition-colors dark:border-white/10 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-0 sm:p-0 ${
                hovered === i ? 'bg-primary/5 dark:bg-primary/10' : 'bg-white dark:bg-white/5'
              }`}
            >
              <div className="font-heading text-sm font-semibold text-charcoal dark:text-white sm:p-5">
                {row.point}
              </div>
              <div className="flex items-start gap-2 text-sm text-charcoal/70 dark:text-white/70 sm:border-l sm:border-charcoal/10 sm:p-5 sm:dark:border-white/10">
                <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                {row.agisoft}
              </div>
              <div className="flex items-start gap-2 text-sm text-charcoal/40 dark:text-white/40 sm:border-l sm:border-charcoal/10 sm:p-5 sm:dark:border-white/10">
                <X size={16} className="mt-0.5 shrink-0 text-charcoal/30 dark:text-white/30" />
                {row.others}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
