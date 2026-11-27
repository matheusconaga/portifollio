import {
  useEffect,
  useMemo,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { Link, useParams } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Rocket,
  Lightbulb,
  Target,
  Layers3,
  CheckCircle2,
  Wrench,
  Code2,
  BookOpen,
} from "lucide-react";

import { projects } from "@/data/projects";
import { caseStudies } from "@/data/casestudies";
import { useAppTranslation } from "@/shared/hooks/useAppTranslation";
import { Button } from "@/shared/ui/button";
import { useState } from "react";

// Animações
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Tipos dos componentes internos
type SectionHeadingProps = {
  icon: ElementType;
  title: string;
  description?: string;
};

type CardProps = {
  children: ReactNode;
  className?: string;
};

// Título das seções
function SectionHeading({
  icon: Icon,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
          <Icon className="w-5 h-5 text-primary" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>

      {description && (
        <p className="text-gray text-sm md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

// Card reutilizável
function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-glass-light p-5 md:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

// Ícones das funcionalidades
function FeatureIcon({ index }: { index: number }) {
  const icons = [CheckCircle2, Rocket, Target, Lightbulb];
  const Icon = icons[index % icons.length];

  return <Icon className="w-5 h-5 text-primary shrink-0" />;
}

export default function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useAppTranslation();

  const currentLanguage = i18n.language.startsWith("pt") ? "pt" : "en";

  const homePath = currentLanguage === "en" ? "/en" : "/";
  const projectsPath = currentLanguage === "en" ? "/en#projects" : "/#projects";

  // Busca os dados do projeto
  const project = useMemo(
    () => projects[currentLanguage]?.find((item) => item.slug === slug),
    [currentLanguage, slug],
  );

  // Busca o estudo de caso
  const caseStudy = useMemo(
    () => caseStudies[currentLanguage]?.find((item) => item.slug === slug),
    [currentLanguage, slug],
  );

  // Navegação suave entre seções
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarOffset = 150;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarOffset,
      behavior: "smooth",
    });
  };

  // Estado de projeto não encontrado
  if (!project || !caseStudy) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          {t("caseStudy.notFound.title")}
        </h1>

        <p className="text-gray mb-8">{t("caseStudy.notFound.description")}</p>

        <Link
          to={projectsPath}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-background font-semibold hover:opacity-90 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("caseStudy.backToProjects")}
        </Link>
      </main>
    );
  }

  // Verifica se existem seções opcionais
  const hasChallenges = Boolean(caseStudy.challenges?.length);

  const hasFutureImprovements = Boolean(caseStudy.futureImprovements?.length);

  // Itens da navegação
  const navigationItems = [
    {
      id: "overview",
      label: t("caseStudy.navigation.overview"),
    },
    {
      id: "problem",
      label: t("caseStudy.navigation.problem"),
    },
    {
      id: "solution",
      label: t("caseStudy.navigation.solution"),
    },
    {
      id: "features",
      label: t("caseStudy.navigation.features"),
    },
    {
      id: "architecture",
      label: t("caseStudy.navigation.architecture"),
    },
    {
      id: "results",
      label: t("caseStudy.navigation.results"),
    },
    {
      id: "learnings",
      label: t("caseStudy.navigation.learnings"),
    },
    ...(hasChallenges
      ? [
          {
            id: "challenges",
            label: t("caseStudy.navigation.challenges"),
          },
        ]
      : []),
    ...(hasFutureImprovements
      ? [
          {
            id: "future",
            label: t("caseStudy.navigation.future"),
          },
        ]
      : []),
  ];

  const [activeSection, setActiveSection] = useState(
    navigationItems[0]?.id ?? "",
  );

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 160;

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        setActiveSection(navigationItems[navigationItems.length - 1].id);
        return;
      }

      let currentSection = navigationItems[0]?.id ?? "";

      for (const item of navigationItems) {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [navigationItems]);

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const activeNavRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const container = navContainerRef.current;
    const activeItem = activeNavRef.current;

    if (!container || !activeItem) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    const itemCenter =
      itemRect.left -
      containerRect.left +
      container.scrollLeft +
      itemRect.width / 2;

    const targetScroll = itemCenter - container.clientWidth / 2;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  }, [activeSection]);

  return (
    <main className="min-h-screen bg-background text-white">
      {/* Navbar principal */}

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-8 h-[68px] grid grid-cols-3 items-center gap-2">
          {/* Esquerda */}
          <div className="flex justify-start min-w-0">
            <Link
              to={projectsPath}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm md:text-base text-gray hover:text-primary transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span className="hidden min-[360px]:inline">
                {t("caseStudy.backToProjects")}
              </span>
            </Link>
          </div>

          {/* Centro */}
          <div className="flex justify-center min-w-0">
            <h1
              title={project.title}
              className="text-sm sm:text-base md:text-xl font-bold text-center truncate max-w-full"
            >
              {project.title}
            </h1>
          </div>

          {/* Direita */}
          <div className="flex justify-end min-w-0">
            <Link
              to={homePath}
              aria-label="Home"
              className="flex items-center gap-1.5"
            >
              <img
                src="/logo_matheus.webp"
                alt="Matheus Lula"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              />
              <span className="hidden sm:inline font-bold text-primary-light text-sm md:text-xl whitespace-nowrap">
                Matheus Lula
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="pt-[68px]">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Título e descrição */}
            <motion.div variants={itemVariants} className="order-1">
              <span className="inline-flex items-center gap-2 text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />

                {t("caseStudy.projectLabel")}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                {project.title}
              </h1>

              <p className="text-gray text-base md:text-lg leading-relaxed max-w-2xl">
                {caseStudy.subtitle}
              </p>
            </motion.div>

            {/* Imagem do projeto */}
            {project.image && (
              <motion.div
                variants={itemVariants}
                className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-glass-dark shadow-2xl shadow-primary/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none z-10" />

                  <img
                    src={project.image}
                    alt={`Visualização do projeto ${project.title}`}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </motion.div>
            )}

            {/* Tecnologias e links */}
            <motion.div
              variants={itemVariants}
              className="order-3 lg:col-start-1 lg:row-start-2"
            >
              <div className="flex flex-wrap gap-2 mb-7 justify-center lg:justify-start">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs md:text-sm bg-primary/10 border border-primary/20 text-primary-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 justify-center lg:justify-start">
                {project.deployUrl && (
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary-xl" className="py-3">
                      <ExternalLink className="w-4 h-4" />
                      {t("project.deploy")}
                    </Button>
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-xl" className="py-3">
                      <Github className="w-4 h-4" />
                      {t("project.repository")}
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Navegação das seções */}
        <nav className="sticky top-[68px] z-40 border-y border-white/10 bg-background/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-3 md:px-8">
            <div
              ref={navContainerRef}
              className="flex items-center gap-6 overflow-x-auto overflow-y-hidden whitespace-nowrap py-4 scrollbar-hide touch-pan-x scroll-smooth"
            >
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    ref={isActive ? activeNavRef : null}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative inline-flex shrink-0 flex-col items-center text-sm transition-colors duration-300 hover:cursor-pointer ${
                      isActive
                        ? "font-bold text-primary"
                        : "font-medium text-gray hover:text-primary"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <motion.span
                        layoutId="case-study-active-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Seções do estudo de caso */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 space-y-16 md:space-y-24">
          {/* Visão geral */}
          <motion.section
            id="overview"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="scroll-mt-32"
          >
            <SectionHeading
              icon={BookOpen}
              title={t("caseStudy.sections.overview")}
            />

            <Card>
              <p className="text-gray leading-relaxed whitespace-pre-line">
                {caseStudy.overview}
              </p>
            </Card>
          </motion.section>

          {/* Problema */}
          <motion.section
            id="problem"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="scroll-mt-32"
          >
            <SectionHeading
              icon={Target}
              title={t("caseStudy.sections.problem")}
            />

            <Card>
              <p className="text-gray leading-relaxed mb-5">
                {caseStudy.problem.description}
              </p>

              <ul className="space-y-3">
                {caseStudy.problem.points.map((point, index) => (
                  <li key={index} className="flex gap-3 text-gray">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.section>

          {/* Solução */}
          <motion.section
            id="solution"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="scroll-mt-32"
          >
            <SectionHeading
              icon={Lightbulb}
              title={t("caseStudy.sections.solution")}
            />

            <Card>
              <p className="text-gray leading-relaxed mb-5">
                {caseStudy.solution.description}
              </p>

              <ul className="space-y-3">
                {caseStudy.solution.points.map((point, index) => (
                  <li key={index} className="flex gap-3 text-gray">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.section>

          {/* Funcionalidades */}
          <motion.section
            id="features"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="scroll-mt-32"
          >
            <SectionHeading
              icon={CheckCircle2}
              title={t("caseStudy.sections.features")}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.features.map((feature, index) => (
                <Card key={index} className="flex gap-4">
                  <FeatureIcon index={index} />

                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-gray text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Arquitetura */}
          <motion.section
            id="architecture"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="scroll-mt-32"
          >
            <SectionHeading
              icon={Layers3}
              title={t("caseStudy.sections.architecture")}
            />

            <Card>
              <p className="text-gray leading-relaxed mb-6">
                {caseStudy.architecture.description}
              </p>

              <div className="space-y-4">
                {caseStudy.architecture.decisions.map((decision, index) => (
                  <div key={index} className="flex gap-3">
                    <Code2 className="w-5 h-5 text-primary shrink-0" />

                    <p className="text-gray leading-relaxed">{decision}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Resultados */}
          <motion.section
            id="results"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="scroll-mt-32"
          >
            <SectionHeading
              icon={Rocket}
              title={t("caseStudy.sections.results")}
            />

            <Card>
              <p className="text-gray leading-relaxed">
                {caseStudy.results.description}
              </p>
            </Card>
          </motion.section>

          {/* Aprendizados */}
          <motion.section
            id="learnings"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="scroll-mt-32"
          >
            <SectionHeading
              icon={Lightbulb}
              title={t("caseStudy.sections.learnings")}
            />

            <Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.learnings.map((learning, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />

                    <p className="text-gray text-sm leading-relaxed">
                      {learning}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Desafios técnicos */}
          {hasChallenges && (
            <motion.section
              id="challenges"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="scroll-mt-32"
            >
              <SectionHeading
                icon={Wrench}
                title={t("caseStudy.sections.challenges")}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.challenges?.map((challenge, index) => (
                  <Card key={index}>
                    <h3 className="text-white font-semibold mb-3">
                      {challenge.title}
                    </h3>

                    <p className="text-gray text-sm leading-relaxed mb-4">
                      {challenge.description}
                    </p>

                    <div className="border-t border-white/10 pt-4">
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                        {t("caseStudy.sections.challengeSolution")}
                      </span>

                      <p className="text-gray text-sm leading-relaxed mt-2">
                        {challenge.solution}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.section>
          )}

          {/* Melhorias futuras */}
          {hasFutureImprovements && (
            <motion.section
              id="future"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="scroll-mt-32"
            >
              <SectionHeading
                icon={Code2}
                title={t("caseStudy.sections.future")}
              />

              <Card>
                <ul className="space-y-4">
                  {caseStudy.futureImprovements?.map((improvement, index) => (
                    <li key={index} className="flex gap-3">
                      <Rocket className="w-5 h-5 text-primary shrink-0" />

                      <p className="text-gray leading-relaxed">{improvement}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.section>
          )}
        </div>

        {/* Rodapé */}
        <footer className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray text-sm">{t("caseStudy.footer")}</p>

            <Link
              to={projectsPath}
              className="inline-flex items-center gap-2 text-sm md:text-base text-gray hover:text-primary active:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />

              <span>{t("caseStudy.backToProjects")}</span>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
