import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const projects = [
  {
    title: 'Regional Bank Digital Platform',
    industry: 'Financial Services',
    stack: 'React · Node.js · PostgreSQL',
  },
  {
    title: 'National School Network Rollout',
    industry: 'Education',
    stack: 'Flutter · Laravel · MySQL',
  },
  {
    title: 'Agro-Supply Chain Tracker',
    industry: 'Agriculture',
    stack: 'Next.js · Python · AWS',
  },
]

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
            className="group overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-charcoal to-primary-dark">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 font-heading text-xs font-semibold text-white backdrop-blur-sm">
                {project.industry}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold text-charcoal">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/50">{project.stack}</p>
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
