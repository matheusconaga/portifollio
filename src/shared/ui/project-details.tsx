import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import {
  X,
  Github,
  ExternalLink,
  FileText,
  CheckCircle2,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import type { Project } from "@/data/projects";

interface ProjectDetailsProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;

  currentIndex: number;
  totalProjects: number;

  onPrevious: () => void;
  onNext: () => void;
}

export default function ProjectDetails({
  project,
  isOpen,
  onClose,
  currentIndex,
  totalProjects,
  onPrevious,
  onNext,
}: ProjectDetailsProps) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isEntering, setIsEntering] = useState(false);

  const {
    title,
    image,
    description,
    techs,
    deployUrl,
    repoUrl,
    caseStudyUrl,
    highlights = [],
    metrics = [],
  } = project;

  // OPEN EXTERNAL LINKS
  const handleOpenExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const modalScrollRef = useRef<HTMLElement | null>(null);

  const [direction, setDirection] = useState<"next" | "previous">("next");

  const [isClosing, setIsClosing] = useState(false);

  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setIsEntering(false);

    const frame = requestAnimationFrame(() => {
      setIsEntering(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  //   FUNCTION FOR NAVIGATING TO CASE STUDY PAGE
  const handleOpenCaseStudy = () => {
    if (!caseStudyUrl) return;

    sessionStorage.setItem("portfolio-scroll-position", String(window.scrollY));

    onClose();
    navigate(caseStudyUrl);
  };

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
  };

  const handleNext = () => {
    if (isClosing) return;
    setDirection("next");
    onNext();
  };

  const handlePrevious = () => {
    if (isClosing) return;
    setDirection("previous");
    onPrevious();
  };

  // RESET CLOSE STATE WHEN THE MODAL OPENS
  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    modalScrollRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [project.slug, isOpen]);

  // KEYBOARD NAVIGATION + SCROLL LOCK
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (!isClosing) {
          setIsClosing(true);
        }
        return;
      }

      if (isClosing) return;

      if (event.key === "Escape") {
        if (showCaseStudyModal) {
          setShowCaseStudyModal(false);
          return;
        }

        if (!isClosing) {
          setIsClosing(true);
        }

        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setDirection("previous");
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setDirection("next");
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isClosing, onPrevious, onNext]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <motion.div
      className="
    fixed inset-0 z-[9999]
    flex items-center justify-center
    p-3 sm:p-6
  "
      onClick={handleClose}
    >
      {/* BACKDROP */}
      <motion.div
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        initial={false}
        animate={{
          opacity: isClosing ? 0 : isEntering ? 1 : 0,
        }}
        transition={{
          duration: isClosing ? 0.22 : 0.3,
          ease: "easeOut",
        }}
      />

      {/* MODAL */}
      <motion.section
        ref={modalScrollRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.slug}-title`}
        onClick={(event) => event.stopPropagation()}
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 18,
        }}
        animate={{
          opacity: isClosing ? 0 : isEntering ? 1 : 0,
          scale: isClosing ? 0.98 : isEntering ? 1 : 0.96,
          y: isClosing ? 8 : isEntering ? 0 : 18,
        }}
        transition={{
          duration: isClosing ? 0.22 : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={() => {
          if (isClosing) {
            onClose();
          }
        }}
        className="
    relative z-10
    w-full max-w-6xl
    max-h-[92vh]
    overflow-y-auto
    rounded-2xl
    border border-primary/25
    bg-primary-foreground
    shadow-2xl shadow-black/50
  "
      >
        {/* STICKY HEADER + NAVIGATION */}
        <div className="sticky top-0 z-30">
          {/* HEADER */}
          <header
            className="
            flex
            items-center
            justify-between

            px-4
            sm:px-6

            py-3

            border-b
            border-white/10

            bg-background/95
            backdrop-blur-xl
        "
          >
            {/* LEFT: LABEL */}
            <div className="flex items-center gap-3">
              <Badge variant="glass" className="text-primary">
                {t("project.viewProject")}
              </Badge>
            </div>

            {/* CLOSE */}
            <Button
              variant="ghost"
              onClick={handleClose}
              aria-label="Fechar detalhes"
              title="Fechar"
              leftIcon={<X size={19} />}
              className="
                !h-9
                !w-9
                !p-0
                !rounded-lg

                !transform-none
                hover:!translate-y-0
                active:!translate-y-0

                hover:bg-glass-light
                hover:cursor-pointer
                hover:text-red

                active:bg-glass-light
                active:text-red
            "
            />
          </header>

          {/* TOP NAVIGATION */}
          {totalProjects > 1 && (
            <nav
              aria-label="Navegação entre projetos"
              className="
                flex
                items-center
                justify-between

                px-4
                sm:px-6

                py-2

                border-b
                border-white/10

                bg-glass-light
                backdrop-blur-xl
            "
            >
              {/* PREVIOUS */}
              <Button
                variant="ghost"
                onClick={handlePrevious}
                leftIcon={<ChevronLeft size={18} />}
                className="
                    !px-2
                    !py-2

                    !transform-none
                    hover:cursor-pointer
                    hover:text-primary
                    active:text-primary
                "
              >
                {t("button.back")}
              </Button>

              {/* POSITION INDICATORS */}
              <div className="flex flex-col items-center gap-1">
                <span
                  className="
                        text-xs
                        text-gray
                        tabular-nums
                    "
                  aria-live="polite"
                >
                  {String(currentIndex).padStart(2, "0")}
                  {" / "}
                  {String(totalProjects).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalProjects }, (_, index) => (
                    <span
                      key={index}
                      className={`
                                    h-1.5
                                    rounded-full
                                    transition-all
                                    duration-300

                                    ${
                                      index === currentIndex - 1
                                        ? "w-5 bg-primary"
                                        : "w-1.5 bg-white/20"
                                    }
                                `}
                    />
                  ))}
                </div>
              </div>

              {/* NEXT */}
              <Button
                variant="ghost"
                onClick={handleNext}
                rightIcon={<ChevronRight size={18} />}
                className="
                    !px-2
                    !py-2

                    !transform-none
                    hover:cursor-pointer
                    hover:text-primary
                    active:text-primary
                "
              >
                {t("button.next")}
              </Button>
            </nav>
          )}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={project.slug}
            initial={{
              opacity: 0,
              x: direction === "next" ? 22 : -22,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: direction === "next" ? -14 : 14,
            }}
            transition={{
              duration: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
                            grid grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-[0.85fr_1.15fr]

                            gap-5 lg:gap-7

                            p-4 sm:p-6
                        "
          >
            {/* LEFT: PROJECT PREVIEW */}
            <div
              className={`
                                flex flex-col gap-4

                                md:col-start-1
                                md:row-start-1

                                ${
                                  highlights.length > 0
                                    ? "lg:row-span-3"
                                    : "lg:row-span-2"
                                }
                            `}
            >
              {/* IMAGE */}
              <div
                className="
                                    relative
                                    overflow-hidden

                                    rounded-xl

                                    border border-primary/20

                                    bg-glass-dark
                                "
              >
                <img
                  src={image}
                  alt={`Preview do projeto ${title}`}
                  className="
                                        w-full

                                        aspect-[16/10]
                                        max-h-[280px]
                                        object-cover

                                        transition-transform
                                        duration-500

                                        hover:scale-105
                                    "
                />
              </div>

              {/* METRICS */}
              {metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="
                                                flex flex-col
                                                items-center
                                                justify-center

                                                gap-1

                                                rounded-xl

                                                border border-white/10
                                                bg-white/[0.03]

                                                p-3
                                            "
                    >
                      <span
                        className="
                                                    text-xl sm:text-2xl
                                                    font-bold
                                                    text-primary
                                                "
                      >
                        {metric.value}
                      </span>

                      <span
                        className="
                                                    text-[10px] sm:text-xs
                                                    text-gray
                                                    text-center
                                                "
                      >
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: PROJECT INFORMATION */}
            <div
              className="
                                flex flex-col gap-4

                                md:col-start-2
                                md:row-start-1
                            "
            >
              {/* TITLE + DESCRIPTION */}
              <div className="space-y-2">
                <span
                  className="
                                        text-xs
                                        font-semibold
                                        tracking-widest
                                        text-primary
                                    "
                >
                  {t("project.overview")}
                </span>

                <h2
                  id={`project-${project.slug}-title`}
                  className="
                                        text-2xl sm:text-3xl
                                        font-bold
                                        text-white
                                    "
                >
                  {title}
                </h2>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge key={tech} variant="glass" className="text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p
                  className="
                                        text-sm sm:text-base
                                        leading-relaxed
                                        text-gray
                                    "
                >
                  {description}
                </p>
              </div>
            </div>

            {/* HIGHLIGHTS */}
            {highlights.length > 0 && (
              <div
                className="
                                    space-y-3

                                    md:col-span-2
                                    md:row-start-2

                                    lg:col-span-1
                                    lg:col-start-2
                                    lg:row-start-2
                                "
              >
                <h3
                  className="
                                        text-base sm:text-lg
                                        font-semibold
                                        text-white
                                    "
                >
                  {t("project.highlights")}
                </h3>

                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="
                                                flex items-start
                                                gap-2

                                                text-sm
                                                leading-relaxed
                                                text-gray
                                            "
                    >
                      <CheckCircle2
                        size={17}
                        className="
                                                    mt-0.5
                                                    shrink-0
                                                    text-primary
                                                "
                      />

                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ACTIONS */}
            <div
              className={`
                                flex
                                flex-col
                                sm:flex-row
                                flex-wrap

                                w-full
                                gap-3
                                mt-2

                                md:col-span-2

                                lg:col-span-1
                                lg:col-start-2

                                ${
                                  highlights.length > 0
                                    ? "md:row-start-3 lg:row-start-3"
                                    : "md:row-start-2 lg:row-start-2"
                                }
                            `}
            >
              {/* DEPLOY */}
              {deployUrl && (
                <Button
                  variant="primary"
                  onClick={() => handleOpenExternal(deployUrl)}
                  leftIcon={<Eye size={17} />}
                  rightIcon={<ExternalLink size={14} />}
                  className="w-full sm:w-auto"
                >
                  {t("project.deploy")}
                </Button>
              )}

              {/* GITHUB */}
              {repoUrl && (
                <Button
                  variant="outline"
                  onClick={() => handleOpenExternal(repoUrl)}
                  leftIcon={<Github size={17} />}
                  rightIcon={<ExternalLink size={14} />}
                  className="w-full sm:w-auto"
                >
                  {t("project.repository")}
                </Button>
              )}

              {/* CASE STUDY */}
              {caseStudyUrl && (
                <Button
                  variant="outline"
                  onClick={handleOpenCaseStudy}
                  leftIcon={<FileText size={17} />}
                  className="w-full sm:w-auto"
                >
                  {t("project.caseStudy")}
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>
    </motion.div>,
    document.body,
  );
}
