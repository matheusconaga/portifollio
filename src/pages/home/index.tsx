import { lazy, Suspense } from "react";

import Hero from "@/widgets/hero";
import About from "@/widgets/about";
import { TechBanner } from "@/widgets/tech-banner";

const Projects = lazy(() => import("@/widgets/projects"));
const TechStacks = lazy(() => import("@/widgets/tech-stacks"));
const Experience = lazy(() => import("@/widgets/experience"));
const Contact = lazy(() => import("@/widgets/contact"));

import { Container } from "@/shared/ui/container";
import { Section } from "@/shared/ui/section";

import { AnimatedSection } from "@/shared/ui/animated-section";
import { Loading } from "@/shared/ui/loading";

export default function Homepage() {
  return (
    <>
      <Section
        id="home"
        className="
    relative
    flex
    items-center
  "
      >
        <Container>
          <AnimatedSection>
            <Hero />
          </AnimatedSection>
        </Container>
      </Section>

      <Section id="about">
        <Container>
          <AnimatedSection>
            <About />
          </AnimatedSection>
        </Container>
      </Section>

      <AnimatedSection>
        <TechBanner />
      </AnimatedSection>

      {/* Lazy Loaded */}
      <Section id="projects">
        <Container>
          <Suspense fallback={<Loading />}>
            <AnimatedSection>
              <Projects />
            </AnimatedSection>
          </Suspense>
        </Container>
      </Section>

      <Section id="tech">
        <Container>
          <Suspense fallback={<Loading />}>
            <AnimatedSection>
              <TechStacks />
            </AnimatedSection>
          </Suspense>
        </Container>
      </Section>

      <Section id="experience">
        <Container>
          <Suspense fallback={<Loading />}>
            <AnimatedSection>
              <Experience />
            </AnimatedSection>
          </Suspense>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <Suspense fallback={<Loading />}>
            <AnimatedSection>
              <Contact />
            </AnimatedSection>
          </Suspense>
        </Container>
      </Section>
    </>
  );
}
