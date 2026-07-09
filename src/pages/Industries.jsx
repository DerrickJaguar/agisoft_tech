import PageHero from '../components/PageHero'
import Industries from '../sections/Industries'
import CTASection from '../components/CTASection'
import useSEO from '../hooks/useSEO'

export default function IndustriesPage() {
  useSEO({
    title: 'Industries We Serve',
    description:
      'Agisoft Technologies builds domain-aware software for Healthcare, Education, Government, Financial Services, NGOs, Agriculture, Retail, and more.',
  })

  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Domain expertise across every sector"
        subtitle="We build software that speaks the language of your industry — from healthcare compliance to agricultural supply chains."
      />
      <Industries />
      <CTASection
        title="Don't see your industry?"
        subtitle="We've delivered custom solutions across dozens of sectors. Tell us about your business."
      />
    </>
  )
}
