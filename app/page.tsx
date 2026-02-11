import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-border" />
        </div>
        <AboutSection />
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-border" />
        </div>
        <SkillsSection />
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-border" />
        </div>
        <ProjectsSection />
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-border" />
        </div>
        <ExperienceSection />
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-border" />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
