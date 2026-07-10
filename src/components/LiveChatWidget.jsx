import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X, Mail, MessageSquareText, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-72 overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-2xl dark:border-white/10 dark:bg-charcoal"
          >
            <div className="flex items-center justify-between bg-primary px-4 py-3">
              <div>
                <p className="font-heading text-sm font-semibold text-white">
                  Chat with Agisoft
                </p>
                <p className="text-xs text-white/80">Typically replies within the hour</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white/90 hover:bg-white/10"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-4">
              <p className="rounded-xl rounded-tl-none bg-surface px-3.5 py-2.5 text-sm text-charcoal/80 dark:bg-white/5 dark:text-white/80">
                👋 Hi there! How can we help you today? Pick an option below to get started.
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="https://wa.me/256785102501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-charcoal/10 px-3.5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-primary/40 hover:bg-primary/5 dark:border-white/10 dark:text-white dark:hover:bg-primary/10"
                >
                  <MessageSquareText size={18} className="shrink-0 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:info@agisofttechnologies.com"
                  className="flex items-center gap-3 rounded-xl border border-charcoal/10 px-3.5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-primary/40 hover:bg-primary/5 dark:border-white/10 dark:text-white dark:hover:bg-primary/10"
                >
                  <Mail size={18} className="shrink-0 text-primary" />
                  Send us an email
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 rounded-xl bg-primary/10 px-3.5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                >
                  Visit contact page
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open live chat'}
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  )
}
