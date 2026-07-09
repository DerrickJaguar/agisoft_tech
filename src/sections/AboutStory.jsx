import { motion } from 'framer-motion'

export default function AboutStory() {
  return (
    <section className="section-padding mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
          Our Story
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal dark:text-white sm:text-4xl">
          Built to solve real business problems
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/65 dark:text-white/65"
      >
        <p>
          Agisoft Technologies began with a simple observation: too many organizations across
          Africa were held back not by ambition, but by software that didn&apos;t fit the way
          they actually worked. We set out to change that — building custom, reliable, and
          affordable technology solutions for businesses, governments, NGOs, and institutions.
        </p>
        <p>
          Today, we&apos;re a full-service software development company delivering everything
          from custom enterprise systems and mobile applications to AI, cloud infrastructure,
          and cybersecurity — trusted by clients across healthcare, education, finance,
          agriculture, and beyond.
        </p>
        <p>
          What hasn&apos;t changed is our approach: understand the business problem first,
          engineer a solution that fits, and stand behind it long after launch.
        </p>
      </motion.div>
    </section>
  )
}
