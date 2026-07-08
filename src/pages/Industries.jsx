import PageHero from '../components/PageHero'
import Industries from '../sections/Industries'
import CTASection from '../components/CTASection'

export default function IndustriesPage() {
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
