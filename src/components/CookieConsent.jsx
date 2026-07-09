import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'agisoft-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => !localStorage.getItem(STORAGE_KEY))

  const decide = (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-charcoal/10 bg-white p-5 shadow-2xl sm:flex-row sm:items-center dark:border-white/10 dark:bg-charcoal"
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <Cookie size={20} />
          </div>
          <p className="flex-1 text-sm text-charcoal/70 dark:text-white/70">
            We use cookies to improve your experience and analyze site traffic. Read our{' '}
            <Link to="/privacy" className="font-semibold text-primary hover:text-primary-dark">
              Privacy Policy
            </Link>{' '}
            to learn more.
          </p>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => decide('rejected')}
              className="rounded-full border border-charcoal/15 px-4 py-2 font-heading text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => decide('accepted')}
              className="rounded-full bg-primary px-4 py-2 font-heading text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
