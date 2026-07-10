import useSEO, { SITE_URL } from '../hooks/useSEO'
import { faqs } from '../data/siteData'
import Hero from '../sections/Hero'
import MotionGallery from '../sections/MotionGallery'
import AboutTeaser from '../sections/AboutTeaser'
import Services from '../sections/Services'
import FeaturedSolutions from '../sections/FeaturedSolutions'
import Industries from '../sections/Industries'
import WhyChooseUs from '../sections/WhyChooseUs'
import Technologies from '../sections/Technologies'
import PortfolioTeaser from '../sections/PortfolioTeaser'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import Contact from '../sections/Contact'

export default function Home() {
  useSEO({
    title: 'Innovative Software Solutions for a Digital Future',
    description:
      'Agisoft Technologies delivers custom software, mobile apps, cloud, AI, and cybersecurity solutions for businesses, governments, and enterprises across Africa and beyond.',
    path: '/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Agisoft Technologies',
        url: SITE_URL,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  })

  return (
    <>
      <Hero />
      <MotionGallery />
      <AboutTeaser />
      <Services />
      <FeaturedSolutions />
      <Industries />
      <WhyChooseUs />
      <Technologies />
      <PortfolioTeaser />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
