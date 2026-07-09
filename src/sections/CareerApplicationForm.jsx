import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { jobOpenings } from '../data/siteData'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdvvgeb'

const positionOptions = [
  ...jobOpenings.map((job) => job.title),
  'Internship / Graduate Program',
  'General Application',
]

export default function CareerApplicationForm({ presetPosition, id = 'apply' }) {
  const [status, setStatus] = useState('idle')
  const defaultPosition = presetPosition || positionOptions[0]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id={id} className="section-padding bg-surface dark:bg-white/5">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Apply Now"
          title="Submit your application"
          subtitle="Fill in your details below and our hiring team will follow up by email to request your CV."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-charcoal/5 dark:border-white/10 bg-white dark:bg-white/5 p-8"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 size={48} className="text-primary" />
              <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal dark:text-white">
                Application received!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-charcoal/60 dark:text-white/60">
                Thanks for applying. Our hiring team will review your application and get back to
                you if there's a match.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 font-heading text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="apply-name" className="font-heading text-sm font-medium text-charcoal dark:text-white">
                  Full Name
                </label>
                <input
                  required
                  id="apply-name"
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-surface dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="apply-email" className="font-heading text-sm font-medium text-charcoal dark:text-white">
                  Email Address
                </label>
                <input
                  required
                  id="apply-email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-surface dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="apply-phone" className="font-heading text-sm font-medium text-charcoal dark:text-white">
                  Phone Number
                </label>
                <input
                  id="apply-phone"
                  name="phone"
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-surface dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="apply-position" className="font-heading text-sm font-medium text-charcoal dark:text-white">
                  Position
                </label>
                <select
                  key={defaultPosition}
                  id="apply-position"
                  name="position"
                  defaultValue={defaultPosition}
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-surface dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {positionOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="apply-message" className="font-heading text-sm font-medium text-charcoal dark:text-white">
                  Cover Letter / Message
                </label>
                <textarea
                  required
                  id="apply-message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-charcoal/10 dark:border-white/10 bg-surface dark:bg-white/5 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell us why you'd be a great fit... Feel free to include a link to your CV or LinkedIn profile."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400 sm:col-span-2">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  Something went wrong sending your application. Please try again, or email us
                  directly at info@agisofttechnologies.com.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="rounded-full bg-primary px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:w-fit"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
