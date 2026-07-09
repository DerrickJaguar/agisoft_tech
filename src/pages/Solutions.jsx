import PageHero from '../components/PageHero'
import FeaturedSolutions from '../sections/FeaturedSolutions'
import CTASection from '../components/CTASection'
import useSEO from '../hooks/useSEO'

export default function SolutionsPage() {
  useSEO({
    title: 'Featured Solutions',
    description:
      'Ready-made, production-ready platforms from Agisoft Technologies — School Management, HR, Payroll, Accounting, Inventory, POS, Hotel, and SACCO systems.',
  })

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
