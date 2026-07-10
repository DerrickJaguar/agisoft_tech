import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const tiles = [
  {
    type: 'video',
    src: '/videos/hero-network.mp4',
    label: 'Engineering at scale',
    span: 'sm:row-span-2',
  },
  {
    type: 'image',
    src: '/images/services/ai-solutions.jpg',
    label: 'Artificial Intelligence',
    span: '',
  },
  {
    type: 'image',
    src: '/images/services/cybersecurity.jpg',
    label: 'Cybersecurity',
    span: '',
  },
  {
    type: 'image',
    src: '/images/services/mobile-app.jpg',
    label: 'Mobile Apps',
    span: '',
  },
  {
    type: 'image',
    src: '/images/services/cloud-computing.jpg',
    label: 'Cloud Infrastructure',
    span: 'sm:row-span-2',
  },
  {
    type: 'image',
    src: '/images/services/ui-ux-design.jpg',
    label: 'UI/UX Design',
    span: '',
  },
]

export default function MotionGallery() {
  return (
    <section className="section-padding bg-surface dark:bg-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our World in Motion"
          title="Technology, brought to life"
          subtitle="A glimpse into the systems, platforms, and experiences we build every day."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-rows-2 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative min-h-[180px] overflow-hidden rounded-2xl ${tile.span}`}
            >
              {tile.type === 'video' ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={tile.src} type="video/mp4" />
                </video>
              ) : (
                <motion.img
                  src={tile.src}
                  alt={tile.label}
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
              <span className="absolute bottom-4 left-4 font-heading text-sm font-semibold text-white">
                {tile.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
