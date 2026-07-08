import PageHero from '../components/PageHero'
import AboutStory from '../sections/AboutStory'
import MissionVisionValues from '../sections/MissionVisionValues'
import WhyChooseUs from '../sections/WhyChooseUs'
import CompanyTimeline from '../sections/CompanyTimeline'

export default function About() {
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
