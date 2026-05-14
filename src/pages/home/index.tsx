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
import { LazySection } from "@/shared/ui/lazy-section";

export default function Homepage() {
  return (
    <>
      <Section id="home" className="relative flex items-center">
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


      <Section id="projects">
        <Container>
          <LazySection>
            <Suspense fallback={<Loading />}>
              <AnimatedSection>
                <Projects />
              </AnimatedSection>
            </Suspense>
          </LazySection>
        </Container>
      </Section>

      <Section id="tech">
        <Container>
          <LazySection>
            <Suspense fallback={<Loading />}>
              <AnimatedSection>
                <TechStacks />
              </AnimatedSection>
            </Suspense>
          </LazySection>
        </Container>
      </Section>

      <Section id="experience">
        <Container>
          <LazySection>
            <Suspense fallback={<Loading />}>
              <AnimatedSection>
                <Experience />
              </AnimatedSection>
            </Suspense>
          </LazySection>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <LazySection>
            <Suspense fallback={<Loading />}>
              <AnimatedSection>
                <Contact />
              </AnimatedSection>
            </Suspense>
          </LazySection>
        </Container>
      </Section>
    </>
  );
}
