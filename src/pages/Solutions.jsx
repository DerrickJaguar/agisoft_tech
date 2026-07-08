import PageHero from '../components/PageHero'
import FeaturedSolutions from '../sections/FeaturedSolutions'
import CTASection from '../components/CTASection'

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured Solutions"
        title="Proven platforms, ready to deploy"
        subtitle="Skip months of custom build time with production-ready solutions tailored to your operations."
      />
      <FeaturedSolutions />
      <CTASection
        title="Need a custom fit?"
        subtitle="Every solution can be tailored to your exact processes. Let's talk about what you need."
      />
    </>
  )
}
