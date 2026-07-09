import PageHero from '../components/PageHero'
import Contact from '../sections/Contact'
import useSEO from '../hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Contact Us',
    description:
      'Get in touch with Agisoft Technologies — phone, WhatsApp, email, or our contact form. We respond within one business day.',
  })

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
