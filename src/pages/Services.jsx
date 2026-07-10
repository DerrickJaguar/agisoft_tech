import PageHero from '../components/PageHero'
import Services from '../sections/Services'
import ServicesShowcase from '../sections/ServicesShowcase'
import CTASection from '../components/CTASection'
import useSEO from '../hooks/useSEO'

export default function ServicesPage() {
  useSEO({
    title: 'Our Services',
    description:
      'Explore Agisoft Technologies\' full range of services — custom software, mobile apps, cloud computing, AI, cybersecurity, UI/UX design, and more.',
  })

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Technology services built around your business"
        subtitle="Every engagement starts with your goals — then we bring the right mix of engineering, design, and strategy to deliver."
      />
      <ServicesShowcase />
      <Services />
      <CTASection
        title="Not sure which service you need?"
        subtitle="Book a free consultation and we'll help you scope the right solution for your business."
      />
    </>
  )
}
