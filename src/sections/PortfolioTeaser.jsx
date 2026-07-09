import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { portfolioProjects } from '../data/siteData'

const projects = portfolioProjects.slice(0, 3)

export default function PortfolioTeaser() {
  return (
    <section className="section-padding mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Portfolio"
        title="Work that speaks for itself"
        subtitle="A glimpse into the platforms we've engineered for clients across industries."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group overflow-hidden rounded-2xl border border-charcoal/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 font-heading text-xs font-semibold text-white backdrop-blur-sm">
                {project.industry}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold text-charcoal dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/50 dark:text-white/50">{project.technologies.join(' · ')}</p>
              <Link
                to="/portfolio"
                className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Case Study
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3 font-heading text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
        >
          View Full Portfolio
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
