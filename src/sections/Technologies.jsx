import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiLaravel,
  SiPython,
  SiDotnet,
  SiPhp,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGooglecloud,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiKubernetes,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa6'
import { TbBrandAzure, TbDatabase } from 'react-icons/tb'
import SectionHeading from '../components/SectionHeading'
import { technologies } from '../data/siteData'

const techIcons = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  Angular: SiAngular,
  Vue: SiVuedotjs,
  'Node.js': SiNodedotjs,
  Laravel: SiLaravel,
  Python: SiPython,
  Java: FaJava,
  '.NET': SiDotnet,
  PHP: SiPhp,
  Flutter: SiFlutter,
  'React Native': SiReact,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  'SQL Server': TbDatabase,
  AWS: FaAws,
  'Microsoft Azure': TbBrandAzure,
  'Google Cloud': SiGooglecloud,
  Docker: SiDocker,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  Jenkins: SiJenkins,
  Kubernetes: SiKubernetes,
}

export default function Technologies() {
  return (
    <section className="section-padding bg-surface dark:bg-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technologies"
          title="Built with modern, proven technology"
          subtitle="We choose the right tool for the job — always current, always production-grade."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(technologies).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-charcoal/5 bg-white p-6 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {items.map((item, j) => {
                  const Icon = techIcons[item]
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.35, delay: j * 0.05 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="group flex items-center gap-2 rounded-full border border-charcoal/10 bg-surface px-3.5 py-1.5 transition-colors hover:border-primary/40 hover:bg-primary/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-primary/10"
                    >
                      {Icon && (
                        <Icon
                          size={16}
                          className="shrink-0 text-charcoal/70 transition-colors group-hover:text-primary dark:text-white/70"
                        />
                      )}
                      <span className="font-heading text-sm font-medium text-charcoal/80 dark:text-white/80">
                        {item}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
