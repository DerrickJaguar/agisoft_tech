import PageHero from '../components/PageHero'
import Services from '../sections/Services'
import CTASection from '../components/CTASection'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Technology services built around your business"
        subtitle="Every engagement starts with your goals — then we bring the right mix of engineering, design, and strategy to deliver."
      />
      <Services />
      <CTASection
        title="Not sure which service you need?"
        subtitle="Book a free consultation and we'll help you scope the right solution for your business."
      />
    </>
  )
}
