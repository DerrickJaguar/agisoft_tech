import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { solutions } from '../data/siteData'

export default function FeaturedSolutions() {
  return (
    <section className="section-padding mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Featured Solutions"
        title="Ready-made solutions built for your industry"
        subtitle="Proven, production-ready platforms that get you up and running fast — fully customizable to your workflows."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, i) => (
          <motion.div
            key={solution.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="flex flex-col rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-32 rounded-xl bg-gradient-to-br from-primary/15 to-primary-light/10" />
            <h3 className="mt-5 font-heading text-lg font-semibold text-charcoal">
              {solution.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{solution.description}</p>
            <ul className="mt-4 space-y-2">
              {solution.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-charcoal/70">
                  <Check size={14} className="shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/solutions"
              className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View Details
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
