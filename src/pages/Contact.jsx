import PageHero from '../components/PageHero'
import Contact from '../sections/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="We'd love to hear about your project"
        subtitle="Reach out via phone, WhatsApp, email, or the form below — our team responds within one business day."
      />
      <Contact />
    </>
  )
}
