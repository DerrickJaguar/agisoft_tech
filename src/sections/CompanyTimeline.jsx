import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { companyTimeline } from '../data/siteData'

export default function CompanyTimeline() {
  return (
    <section className="section-padding mx-auto max-w-5xl">
      <SectionHeading
        eyebrow="Our Growth"
        title="A decade of building trust through technology"
        subtitle="From a small team of developers to a full-service technology partner."
      />

      <div className="relative mt-16">
        <div className="absolute left-[15px] top-0 h-full w-px bg-charcoal/10" />
        <div className="space-y-10">
          {companyTimeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              className="relative flex gap-6 pl-10"
            >
              <div className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-primary font-heading text-xs font-bold text-white">
                {item.year.slice(2)}
              </div>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                  {item.year}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-charcoal dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
