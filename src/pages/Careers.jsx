import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CareerApplicationForm from '../sections/CareerApplicationForm'
import { jobOpenings, internshipPrograms, careerBenefits } from '../data/siteData'

export default function Careers() {
  const [applyPosition, setApplyPosition] = useState(null)

  const handleApply = (title) => {
    setApplyPosition(title)
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career at Agisoft Technologies"
        subtitle="Join a team solving real problems for real businesses across Africa and beyond."
      />

      <section className="section-padding mx-auto max-w-7xl">
        <SectionHeading eyebrow="Current Openings" title="Open positions" center={false} />

        <div className="mt-10 divide-y divide-charcoal/10 rounded-2xl border border-charcoal/10">
          {jobOpenings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
              className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">{job.title}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-charcoal/55">
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} />
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {job.type}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleApply(job.title)}
                className="shrink-0 rounded-full bg-primary px-6 py-2.5 text-center font-heading text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Grow With Us"
            title="Internships & graduate programs"
            subtitle="Structured programs designed to launch your technology career."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {internshipPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-charcoal/5 bg-white p-7"
              >
                <h3 className="font-heading text-lg font-semibold text-charcoal">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why Join Us" title="Benefits & perks" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerBenefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="flex items-start gap-3 rounded-xl border border-charcoal/5 bg-surface p-5"
            >
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
              <span className="font-heading text-sm font-medium text-charcoal">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <CareerApplicationForm presetPosition={applyPosition} />
    </>
  )
}
