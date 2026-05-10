import Hero from "@/widgets/hero";
import About from "@/widgets/about";
import { TechBanner } from "@/widgets/tech-banner";
import Projects from "@/widgets/projects";

import { Container } from "@/shared/ui/container";
import { Section } from "@/shared/ui/section";
import TechStacks from "@/widgets/tech-stacks";
import Experience from "@/widgets/experience";
import Contact from "@/widgets/contact";

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

      <Section id="tech">
        <Container>
          <TechStacks />
        </Container>
      </Section>

      <Section id="experience">
        <Container>
          <Experience />
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <Contact />
        </Container>
      </Section>
    </>
  );
}
