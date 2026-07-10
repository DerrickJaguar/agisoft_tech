import { useRef } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import CTASection from '../components/CTASection'
import useSEO, { SITE_URL } from '../hooks/useSEO'
import { services, processSteps, slugify } from '../data/siteData'

export default function ServiceDetail() {
  const { slug } = useParams()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25])

  const service = services.find((s) => slugify(s.title) === slug)
  const related = service
    ? services.filter((s) => s.title !== service.title).slice(0, 3)
    : []

  useSEO({
    title: service?.title,
    description: service?.description,
    image: service?.image,
    jsonLd: service && [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'ProfessionalService',
          name: 'Agisoft Technologies',
          url: SITE_URL,
        },
        areaServed: 'Africa',
        url: `${SITE_URL}/services/${slug}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${slug}` },
        ],
      },
    ],
  })

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-charcoal pt-36"
      >
        <motion.img
          src={service.image}
          alt={service.title}
          style={{ scale: imgScale }}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 sm:px-10 lg:px-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 font-heading text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            All Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-5 max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary-light">
                <service.icon size={22} />
              </span>
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary-light">
                {service.benefit}
              </span>
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">{service.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
              What we deliver
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal dark:text-white">
              {service.benefit}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/60 dark:text-white/60">
              {service.description} Our engineers work closely with your team from discovery
              through launch, so what we build fits how your business actually runs.
            </p>
            <ul className="mt-6 space-y-3">
              {processSteps.slice(0, 4).map((step) => (
                <li key={step.title} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <span className="font-heading text-sm font-semibold text-charcoal dark:text-white">
                      {step.title}:
                    </span>{' '}
                    <span className="text-sm text-charcoal/60 dark:text-white/60">
                      {step.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
            >
              Discuss This Service
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative h-80 overflow-hidden rounded-3xl sm:h-96"
          >
            <motion.img
              src={service.image}
              alt={service.title}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-surface dark:bg-white/5">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-2xl font-bold text-charcoal dark:text-white">
              Related services
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.title}
                  to={`/services/${slugify(r.title)}`}
                  className="group relative h-48 overflow-hidden rounded-2xl"
                >
                  <motion.img
                    src={r.image}
                    alt={r.title}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 right-4 font-heading text-sm font-semibold text-white">
                    {r.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to start with ${service.title}?`}
        subtitle="Book a free consultation and we'll help you scope the right approach for your business."
      />
    </>
  )
}
