import PageHero from '../components/PageHero'
import AboutStory from '../sections/AboutStory'
import MissionVisionValues from '../sections/MissionVisionValues'
import WhyChooseUs from '../sections/WhyChooseUs'
import CompanyTimeline from '../sections/CompanyTimeline'
import useSEO from '../hooks/useSEO'

export default function About() {
  useSEO({
    title: 'About Us',
    description:
      'Learn about Agisoft Technologies — our story, mission, vision, values, and the growth that has made us a trusted technology partner across Africa.',
  })

  return (
    <>
      <PageHero
        eyebrow="About Agisoft Technologies"
        title="The technology partner behind ambitious ideas"
        subtitle="We help businesses, governments, and institutions across Africa turn bold ideas into powerful digital products."
      />
      <AboutStory />
      <MissionVisionValues />
      <WhyChooseUs />
      <CompanyTimeline />
    </>
  )
}
