import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import useSEO from '../hooks/useSEO'
import { portfolioProjects } from '../data/siteData'

export default function Portfolio() {
  useSEO({
    title: 'Portfolio',
    description:
      'Real projects, real business impact — explore case studies of platforms Agisoft Technologies has built across banking, education, agriculture, healthcare, and retail.',
  })

  const industries = useMemo(
    () => ['All', ...new Set(portfolioProjects.map((p) => p.industry))],
    [],
  )
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? portfolioProjects : portfolioProjects.filter((p) => p.industry === filter)

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Real projects, real business impact"
        subtitle="A closer look at how we've helped organizations solve real challenges through technology."
      />

      <section className="section-padding mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-2">
          {industries.map((industry) => (
            <button
              key={industry}
              type="button"
              onClick={() => setFilter(industry)}
              className={`rounded-full px-5 py-2 font-heading text-sm font-semibold transition-colors ${
                filter === industry
                  ? 'bg-primary text-white'
                  : 'bg-surface dark:bg-white/5 text-charcoal/60 dark:text-white/60 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filtered.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="overflow-hidden rounded-2xl border border-charcoal/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-6 rounded-full bg-white/10 px-3 py-1 font-heading text-xs font-semibold text-white backdrop-blur-sm">
                  {project.industry}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
                  {project.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-surface dark:bg-white/5 px-3 py-1 text-xs font-medium text-charcoal/70 dark:text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="font-heading text-xs font-semibold uppercase tracking-wide text-primary">
                      Challenge
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">
                      {project.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-heading text-xs font-semibold uppercase tracking-wide text-primary">
                      Solution
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">
                      {project.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-heading text-xs font-semibold uppercase tracking-wide text-primary">
                      Business Impact
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">
                      {project.impact}
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
