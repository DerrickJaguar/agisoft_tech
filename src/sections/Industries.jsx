import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { industries } from '../data/siteData'

export default function Industries() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted across every sector"
          subtitle="We build domain-aware software for organizations solving real problems in the real world."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-8 text-center transition-colors hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-primary-light transition-colors group-hover:bg-primary group-hover:text-white">
                <industry.icon size={22} />
              </div>
              <span className="font-heading text-sm font-medium text-white/80">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
