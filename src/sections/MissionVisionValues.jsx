import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

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
    title: 'Our Core Values',
    description:
      'Integrity, excellence, innovation, and partnership guide every line of code we write and every client relationship we build.',
  },
]

export default function MissionVisionValues() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Mission, vision, and values"
          subtitle="The principles that shape every project we take on."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-charcoal/5 bg-white p-8 text-center"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon size={26} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-charcoal">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
