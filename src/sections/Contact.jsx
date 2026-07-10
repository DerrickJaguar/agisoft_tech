import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, MessageCircle, Clock, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/siteData'

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '+256 785 102 501', href: 'tel:+256785102501' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+256 785 102 501',
    href: 'https://wa.me/256785102501',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@agisofttechnologies.com',
    href: 'mailto:info@agisofttechnologies.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Kiwatule Road, Nambi Mall, Level 2 RM H19, Kampala',
    href: 'https://maps.google.com/?q=Nambi+Mall+Kampala',
  },
  { icon: Clock, label: 'Office Hours', value: 'Mon - Fri, 8:00 AM - 6:00 PM' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [searchParams] = useSearchParams()

  const requestedService = searchParams.get('service')
  const defaultService = services.some((s) => s.title === requestedService)
    ? requestedService
    : services[0].title

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Contact Us"
        title="Let's build something great together"
        subtitle="Tell us about your project and our team will get back to you within one business day."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <ul className="space-y-5">
            {contactDetails.map((detail) => (
              <li key={detail.label} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <detail.icon size={20} />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-charcoal dark:text-white">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-charcoal/60 dark:text-white/60 hover:text-primary"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm text-charcoal/60 dark:text-white/60">{detail.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 h-56 overflow-hidden rounded-2xl border border-charcoal/10 dark:border-white/10">
            <iframe
              title="Agisoft Technologies office location"
              src="https://www.google.com/maps?q=Nambi%20Mall%2C%20Kiwatule%20Road%2C%20Kampala&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-charcoal/5 dark:border-white/10 bg-surface dark:bg-white/5 p-8 lg:col-span-3"
        >
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
              <CheckCircle2 size={48} className="text-primary" />
              <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal dark:text-white">
                Message sent!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-charcoal/60 dark:text-white/60">
                Thanks for reaching out. A member of our team will contact you within one
                business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="font-heading text-sm font-medium text-charcoal dark:text-white">Full Name</label>
                <input
                  required
                  id="contact-name"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="font-heading text-sm font-medium text-charcoal dark:text-white">
                  Email Address
                </label>
                <input
                  required
                  id="contact-email"
                  type="email"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your Email Address"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="font-heading text-sm font-medium text-charcoal dark:text-white">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="contact-service" className="font-heading text-sm font-medium text-charcoal dark:text-white">
                  Service of Interest
                </label>
                <select
                  key={defaultService}
                  id="contact-service"
                  name="service"
                  defaultValue={defaultService}
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="font-heading text-sm font-medium text-charcoal dark:text-white">Message</label>
                <textarea
                  required
                  id="contact-message"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-primary px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-colors hover:bg-primary-dark sm:col-span-2 sm:w-fit"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
