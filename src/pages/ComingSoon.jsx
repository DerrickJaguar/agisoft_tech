import { Link } from 'react-router-dom'

export default function ComingSoon({ title }) {
  return (
    <section className="section-padding mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
      <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
        Coming Soon
      </span>
      <h1 className="mt-4 font-heading text-4xl font-bold text-charcoal sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-xl text-charcoal/60">
        We&apos;re putting the finishing touches on this page. In the meantime, reach out to our
        team directly — we&apos;d love to hear from you.
      </p>
      <Link
        to="/contact"
        className="mt-8 rounded-full bg-primary px-7 py-3 font-heading text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-colors hover:bg-primary-dark"
      >
        Contact Us
      </Link>
    </section>
  )
}
