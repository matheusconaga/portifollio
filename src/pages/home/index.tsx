import {
  lazy,
  Suspense,
} from "react";

import Hero from "@/widgets/hero";
import About from "@/widgets/about";

import {
  TechBanner,
} from "@/widgets/tech-banner";

import {
  Container,
} from "@/shared/ui/container";

import {
  Section,
} from "@/shared/ui/section";

import {
  AnimatedSection,
} from "@/shared/ui/animated-section";

import {
  LazySection,
} from "@/shared/ui/Lazy-Loading/lazy-section";

import {
  importContact,
  importExperience,
  importProjects,
  importTechStacks,
} from "@/shared/ui/Lazy-Loading/lazy-imports";

import {
  ProjectsSkeleton,
} from "@/shared/ui/Lazy-Loading/project-skeleton";

import {
  ContactSkeleton,
} from "@/shared/ui/Lazy-Loading/contact-skeleton";

import {
  ExperienceSkeleton,
} from "@/shared/ui/Lazy-Loading/experience-skeleton";

import {
  TechSkeleton,
} from "@/shared/ui/Lazy-Loading/tech-skeleton";

const Projects =
  lazy(importProjects);

const TechStacks =
  lazy(importTechStacks);

const Experience =
  lazy(importExperience);

const Contact =
  lazy(importContact);

export default function Homepage() {
  return (
    <>
      {/* HERO */}
      <Section
        id="home"
        className="
          relative
          flex
          items-center
        "
        trackView
      >
        <Container>
          <Hero />
        </Container>
      </Section>

      {/* ABOUT */}
      <Section
        id="about"
        trackView
      >
        <Container>
          <AnimatedSection>
            <About />
          </AnimatedSection>
        </Container>
      </Section>

      {/* TECH BANNER */}
      <AnimatedSection>
        <TechBanner />
      </AnimatedSection>

      {/* PROJECTS */}
      <Section
        id="projects"
        trackView
      >
        <Container>
          <LazySection
            fallback={
              <ProjectsSkeleton />
            }
          >
            <AnimatedSection>
              <Suspense
                fallback={
                  <ProjectsSkeleton />
                }
              >
                <Projects />
              </Suspense>
            </AnimatedSection>
          </LazySection>
        </Container>
      </Section>

      {/* TECH */}
      <Section
        id="tech"
        trackView
      >
        <Container>
          <LazySection
            fallback={
              <TechSkeleton />
            }
          >
            <AnimatedSection>
              <Suspense
                fallback={
                  <TechSkeleton />
                }
              >
                <TechStacks />
              </Suspense>
            </AnimatedSection>
          </LazySection>
        </Container>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        trackView
      >
        <Container>
          <LazySection
            fallback={
              <ExperienceSkeleton />
            }
          >
            <AnimatedSection>
              <Suspense
                fallback={
                  <ExperienceSkeleton />
                }
              >
                <Experience />
              </Suspense>
            </AnimatedSection>
          </LazySection>
        </Container>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        trackView
      >
        <Container>
          <LazySection
            fallback={
              <ContactSkeleton />
            }
          >
            <AnimatedSection>
              <Suspense
                fallback={
                  <ContactSkeleton />
                }
              >
                <Contact />
              </Suspense>
            </AnimatedSection>
          </LazySection>
        </Container>
      </Section>
    </>
  );
}