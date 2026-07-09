import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { processSteps } from '../data/siteData'

export default function Process() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Development Process"
          title="How we bring your product to life"
          subtitle="A proven, transparent process that keeps you informed at every stage."
        />

        <div className="relative mt-16">
          <div className="absolute left-[15px] top-0 hidden h-full w-px bg-white/10 sm:block lg:left-1/2" />
          <div className="space-y-10 lg:space-y-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`relative flex items-start gap-6 sm:pl-10 lg:w-1/2 lg:pl-0 ${
                  i % 2 === 0 ? 'lg:pr-14' : 'lg:ml-auto lg:pl-14'
                }`}
              >
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-white sm:absolute sm:left-0 sm:top-0">
                  {i + 1}
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-heading text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
