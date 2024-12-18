import AboutMe from "@/components/aboutSection/AboutMe"
import Contact from "@/components/contact/contact"
import Experience from "@/components/experience/Experience"
import HeroSection from "@/components/heroSection/heroSection"
import SkillAndTools from "@/components/skill/SkillAndTools"

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutMe />
        <Experience />
        <SkillAndTools />
        <Contact />
      </main>
    </>
  )
}
