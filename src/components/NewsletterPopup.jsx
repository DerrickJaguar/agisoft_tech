import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Mail, CheckCircle2 } from 'lucide-react'

const STORAGE_KEY = 'agisoft-newsletter-dismissed'

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), 15000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    localStorage.setItem(STORAGE_KEY, '1')
    setTimeout(() => setVisible(false), 1800)
  }

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white p-8 text-center shadow-2xl dark:bg-charcoal dark:border dark:border-white/10"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-charcoal/40 hover:bg-charcoal/5 dark:text-white/40 dark:hover:bg-white/10"
            >
              <X size={16} />
            </button>

            {submitted ? (
              <div className="py-4">
                <CheckCircle2 size={40} className="mx-auto text-primary" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-charcoal dark:text-white">
                  You're subscribed!
                </h3>
                <p className="mt-2 text-sm text-charcoal/60 dark:text-white/60">
                  Thanks for joining — look out for our next update.
                </p>
              </div>
            ) : (
              <>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Mail size={26} />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-charcoal dark:text-white">
                  Stay ahead of the curve
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-white/60">
                  Get occasional insights on AI, cybersecurity, and software trends — straight to
                  your inbox. No spam, ever.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                  <label htmlFor="newsletter-popup-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    required
                    id="newsletter-popup-email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-charcoal/10 bg-surface px-4 py-2.5 text-center text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:bg-white/5"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
