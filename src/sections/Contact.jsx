import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, MessageCircle, Clock, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '+256 785 102 010', href: 'tel:+256785102010' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+256 785 102 010',
    href: 'https://wa.me/256785102010',
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
                  <p className="font-heading text-sm font-semibold text-charcoal">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-charcoal/60 hover:text-primary"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm text-charcoal/60">{detail.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 h-56 overflow-hidden rounded-2xl border border-charcoal/10">
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
          className="rounded-2xl border border-charcoal/5 bg-surface p-8 lg:col-span-3"
        >
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
              <CheckCircle2 size={48} className="text-primary" />
              <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">
                Message sent!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-charcoal/60">
                Thanks for reaching out. A member of our team will contact you within one
                business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="font-heading text-sm font-medium text-charcoal">Full Name</label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="font-heading text-sm font-medium text-charcoal">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="Your Email Address"
                />
              </div>
              <div>
                <label className="font-heading text-sm font-medium text-charcoal">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="font-heading text-sm font-medium text-charcoal">
                  Service of Interest
                </label>
                <select className="mt-2 w-full rounded-lg border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none">
                  <option>Custom Software Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud & Infrastructure</option>
                  <option>Cybersecurity</option>
                  <option>AI & Machine Learning</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="font-heading text-sm font-medium text-charcoal">Message</label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
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
