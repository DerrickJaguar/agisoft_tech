import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { technologies } from '../data/siteData'

export default function Technologies() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technologies"
          title="Built with modern, proven technology"
          subtitle="We choose the right tool for the job — always current, always production-grade."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(technologies).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-charcoal/5 bg-white p-6"
            >
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-charcoal/10 bg-surface px-3.5 py-1.5 font-heading text-sm font-medium text-charcoal/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
