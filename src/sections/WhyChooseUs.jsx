import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { whyChooseUs } from '../data/siteData'

export default function WhyChooseUs() {
  return (
    <section className="section-padding mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Why Choose Agisoft?"
        title="A partner you can build your future on"
        subtitle="We don't just write code — we deliver measurable business outcomes with a team that stands behind its work."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {whyChooseUs.map((point, i) => (
          <motion.div
            key={point}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: (i % 5) * 0.07 }}
            className="flex items-start gap-3 rounded-xl border border-charcoal/5 bg-surface p-5"
          >
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
            <span className="font-heading text-sm font-medium text-charcoal">{point}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
