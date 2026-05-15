import { lazy, Suspense } from "react";
import Hero from "@/widgets/hero";
import About from "@/widgets/about";
import { TechBanner } from "@/widgets/tech-banner";

import { Container } from "@/shared/ui/container";
import { Section } from "@/shared/ui/section";
import { AnimatedSection } from "@/shared/ui/animated-section";
import { LazySection } from "@/shared/ui/Lazy-Loading/lazy-section";
import {
  importContact,
  importExperience,
  importProjects,
  importTechStacks,
} from "@/shared/ui/Lazy-Loading/lazy-imports";
import { ProjectsSkeleton } from "@/shared/ui/Lazy-Loading/project-skeleton";
import { ContactSkeleton } from "@/shared/ui/Lazy-Loading/contact-skeleton";
import { ExperienceSkeleton } from "@/shared/ui/Lazy-Loading/experience-skeleton";
import { TechSkeleton } from "@/shared/ui/Lazy-Loading/tech-skeleton";

const Projects = lazy(importProjects);
const TechStacks = lazy(importTechStacks);
const Experience = lazy(importExperience);
const Contact = lazy(importContact);

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

      {/* PROJECTS */}
      <Section id="projects">
        <Container>
          <LazySection fallback={<ProjectsSkeleton />}>
            <Suspense fallback={<ProjectsSkeleton />}>
              <AnimatedSection>
                <Projects />
              </AnimatedSection>
            </Suspense>
          </LazySection>
        </Container>
      </Section>

      {/* TECH */}
      <Section id="tech">
        <Container>
          <LazySection fallback={<TechSkeleton />}>
            <Suspense fallback={<TechSkeleton />}>
              <AnimatedSection>
                <TechStacks />
              </AnimatedSection>
            </Suspense>
          </LazySection>
        </Container>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <Container>
          <LazySection fallback={<ExperienceSkeleton />}>
            <Suspense fallback={<ExperienceSkeleton />}>
              <AnimatedSection>
                <Experience />
              </AnimatedSection>
            </Suspense>
          </LazySection>
        </Container>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <Container>
          <LazySection fallback={<ContactSkeleton />}>
            <Suspense fallback={<ContactSkeleton />}>
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