import Hero from "@/widgets/hero"
import About from "@/widgets/about"
import { TechBanner } from "@/widgets/tech-banner"
import Projects from "@/widgets/projects"

import { Container } from "@/shared/ui/container"
import { Section } from "@/shared/ui/section"

export default function Homepage() {
  return (
    <>
      <Section id="home">
        <Container>
          <Hero />
        </Container>
      </Section>

      <Section id="about">
        <Container>
          <About />
        </Container>
      </Section>

      {/* FULL WIDTH */}
      <TechBanner />

      <Section id="projects">
        <Container>
          <Projects />
        </Container>
      </Section>
    </>
  )
}