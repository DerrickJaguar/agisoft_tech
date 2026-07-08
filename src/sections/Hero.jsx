import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, Cloud, ShieldCheck, Sparkles } from 'lucide-react'

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Technical Support' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full bg-primary-light/20 blur-[110px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden="true">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-primary-light">
            <Sparkles size={14} /> Trusted Technology Partner
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Innovative Software Solutions for a{' '}
            <span className="text-gradient">Digital Future</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Agisoft Technologies helps businesses transform ideas into powerful digital products
            through custom software development, mobile applications, cloud technologies,
            artificial intelligence, cybersecurity, and IT consulting.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
            >
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <CalendarCheck size={16} />
              Book Free Consultation
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <dt className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-white/60">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative hidden h-[420px] lg:block"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-4 top-6 w-64 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 text-primary-light">
              <Cloud size={18} />
              <span className="font-heading text-sm font-semibold text-white">Cloud Uptime</span>
            </div>
            <div className="mt-4 font-heading text-3xl font-bold text-white">99.98%</div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[99%] rounded-full bg-primary-light" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute right-2 top-40 w-72 rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-xs text-white/70 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary-light/70" />
            </div>
            <pre className="mt-3 whitespace-pre-wrap leading-relaxed">
{`function deploy(app) {
  return cloud
    .secure(app)
    .scale('auto')
    .ship();
}`}
            </pre>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-2 left-16 w-60 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 text-primary-light">
              <ShieldCheck size={18} />
              <span className="font-heading text-sm font-semibold text-white">
                Threats Blocked
              </span>
            </div>
            <div className="mt-4 font-heading text-3xl font-bold text-white">2,481</div>
            <p className="mt-2 text-xs text-white/50">This month, across monitored systems</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
