import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { services, slugify } from '../data/siteData'

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
              className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative h-40 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: (i % 4) * 0.6 }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                <div className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-xl bg-white text-primary shadow-md transition-colors group-hover:bg-primary group-hover:text-white dark:bg-charcoal">
                  <service.icon size={22} />
                </div>
              </div>
              <div className="p-6 pt-9">
                <h3 className="font-heading text-lg font-semibold text-charcoal dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">
                  {service.description}
                </p>
                <p className="mt-3 font-heading text-xs font-semibold uppercase tracking-wide text-primary">
                  {service.benefit}
                </p>
                <Link
                  to={`/services/${slugify(service.title)}`}
                  className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-charcoal dark:text-white transition-colors group-hover:text-primary"
                >
                  Learn More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
