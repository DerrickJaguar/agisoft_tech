import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/siteData'

export default function Services() {
  return (
    <section className="section-padding bg-surface dark:bg-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Services"
          title="Full-spectrum technology services"
          subtitle="From custom software to cloud infrastructure, we deliver end-to-end solutions engineered for scale."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <service.icon size={22} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-charcoal dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">
                {service.description}
              </p>
              <p className="mt-3 font-heading text-xs font-semibold uppercase tracking-wide text-primary">
                {service.benefit}
              </p>
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-charcoal dark:text-white transition-colors group-hover:text-primary"
              >
                Learn More
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
