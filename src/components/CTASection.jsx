import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  title = 'Ready to start your project?',
  subtitle = "Tell us what you're building and our team will get back to you within one business day.",
}) {
  return (
    <section className="section-padding mx-auto max-w-5xl">
      <div className="rounded-3xl bg-linear-to-br from-charcoal to-primary-dark px-8 py-14 text-center sm:px-16">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
