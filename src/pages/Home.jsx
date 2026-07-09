import useSEO from '../hooks/useSEO'
import Hero from '../sections/Hero'
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
  })

  return (
    <>
      <Hero />
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
