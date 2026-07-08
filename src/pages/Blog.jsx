import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import { blogPosts } from '../data/siteData'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on technology and innovation"
        subtitle="Practical perspectives on AI, cybersecurity, cloud, and software engineering from our team."
      />

      <section className="section-padding mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary-light/10" />
              <div className="flex flex-1 flex-col p-6">
                <span className="font-heading text-xs font-semibold uppercase tracking-wide text-primary">
                  {post.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-charcoal">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-charcoal/45">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 font-heading text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark"
                >
                  Read Article
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
