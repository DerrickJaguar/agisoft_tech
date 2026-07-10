import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower organizations across Africa and beyond with innovative, reliable software that drives real business growth.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted technology partner for businesses, governments, and institutions building the digital future.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'Integrity, excellence, innovation, and partnership guide every line of code we write and every client relationship we build.',
  },
]

export default function AboutTeaser() {
  return (
    <section className="section-padding mx-auto max-w-7xl">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            About Agisoft Technologies
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal dark:text-white sm:text-4xl">
            Engineering trust, one solution at a time
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/60 dark:text-white/60">
            Founded to help organizations navigate digital transformation, Agisoft Technologies
            has grown into a trusted partner for businesses, governments, NGOs, and institutions
            across Africa. We combine deep technical expertise with a genuine understanding of
            local and global business challenges to deliver software that works.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Learn more about us
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 rounded-2xl border border-charcoal/5 dark:border-white/10 bg-surface dark:bg-white/5 p-6"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <pillar.icon size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-charcoal dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
