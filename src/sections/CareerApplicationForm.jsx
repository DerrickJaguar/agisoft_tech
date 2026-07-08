import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Paperclip } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { jobOpenings } from '../data/siteData'

const positionOptions = [
  ...jobOpenings.map((job) => job.title),
  'Internship / Graduate Program',
  'General Application',
]

export default function CareerApplicationForm({ presetPosition, id = 'apply' }) {
  const [submitted, setSubmitted] = useState(false)
  const defaultPosition = presetPosition || positionOptions[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')
    const position = formData.get('position')

    const subject = `Job Application - ${position}`
    const body = [
      `Position: ${position}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'N/A'}`,
      '',
      'Cover Letter / Message:',
      message,
      '',
      '---',
      'Please remember to attach your CV/resume to this email before sending.',
    ].join('\n')

    window.location.href = `mailto:info@agisofttechnologies.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
  }

  return (
    <section id={id} className="section-padding bg-surface">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Apply Now"
          title="Submit your application"
          subtitle="Fill in your details and we'll open a pre-filled email to our hiring team — just attach your CV before sending."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-charcoal/5 bg-white p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 size={48} className="text-primary" />
              <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">
                Almost done!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-charcoal/60">
                We've opened your email client with your application pre-filled. Please attach
                your CV/resume and hit send to complete your application.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 font-heading text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="font-heading text-sm font-medium text-charcoal">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 bg-surface px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="font-heading text-sm font-medium text-charcoal">
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 bg-surface px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="font-heading text-sm font-medium text-charcoal">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-charcoal/10 bg-surface px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="font-heading text-sm font-medium text-charcoal">
                  Position
                </label>
                <select
                  key={defaultPosition}
                  name="position"
                  defaultValue={defaultPosition}
                  className="mt-2 w-full rounded-lg border border-charcoal/10 bg-surface px-4 py-3 text-sm focus:border-primary focus:outline-none"
                >
                  {positionOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="font-heading text-sm font-medium text-charcoal">
                  Cover Letter / Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-charcoal/10 bg-surface px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="Tell us why you'd be a great fit..."
                />
              </div>

              <p className="flex items-start gap-2 text-xs text-charcoal/50 sm:col-span-2">
                <Paperclip size={14} className="mt-0.5 shrink-0" />
                Submitting opens your email client with these details pre-filled — please attach
                your CV/resume before sending.
              </p>

              <button
                type="submit"
                className="rounded-full bg-primary px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-colors hover:bg-primary-dark sm:col-span-2 sm:w-fit"
              >
                Continue to Email
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
