
import { useCallback, useState } from "react";

import { FilterTabs } from "@/shared/ui/filter-tabs";
import { EmptyProjectCard } from "@/shared/ui/empty-project-card";

import ProjectView from "@/shared/ui/project-view";
import ProjectDetails from "@/shared/ui/project-details";

import { projects } from "@/data/projects";
import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

export default function Products() {
    const { i18n, t } = useAppTranslation();

    const currentLanguage = i18n.language.startsWith("pt")
        ? "pt"
        : "en";

    const currentProjects = projects[currentLanguage];

    const filters = [
        {
            label: currentLanguage === "pt" ? "Todos" : "All",
            value: "all",
        },
        {
            label: currentLanguage === "pt" ? "Estudos de caso" : "Case Studies",
            value: "case-study",
        },
        {
            label: "Fullstack",
            value: "fullstack",
        },
        {
            label: "Frontend",
            value: "frontend",
        },
        {
            label: "Mobile",
            value: "mobile",
        },
        {
            label: "Backend",
            value: "backend",
        },
    ];

    const [activeFilter, setActiveFilter] = useState("all");

    // INDEX OF THE SELECTED PROJECT
    const [selectedProjectIndex, setSelectedProjectIndex] =
        useState<number | null>(null);

    // FILTER PROJECTS
    const filteredProjects = currentProjects.filter((project) => {
        if (activeFilter === "all") {
            return true;
        }

        if (activeFilter === "case-study") {
            return Boolean(project.caseStudyUrl);
        }

        return project.category.toLowerCase() === activeFilter;
    });

    // CURRENT PROJECT
    const selectedProject =
        selectedProjectIndex !== null
            ? filteredProjects[selectedProjectIndex] ?? null
            : null;

    // OPEN PROJECT DETAILS
    const handleOpenDetails = useCallback((projectSlug: string) => {
        const index = filteredProjects.findIndex(
            (project) => project.slug === projectSlug
        );

        if (index !== -1) {
            setSelectedProjectIndex(index);
        }
    }, [filteredProjects]);

    // CLOSE PROJECT DETAILS
    const handleCloseDetails = useCallback(() => {
        setSelectedProjectIndex(null);
    }, []);

    // PREVIOUS PROJECT
    const handlePreviousProject = useCallback(() => {
        setSelectedProjectIndex((current) => {
            if (current === null || filteredProjects.length <= 1) {
                return current;
            }

            return (
                current - 1 + filteredProjects.length
            ) % filteredProjects.length;
        });
    }, [filteredProjects.length]);

    // NEXT PROJECT
    const handleNextProject = useCallback(() => {
        setSelectedProjectIndex((current) => {
            if (current === null || filteredProjects.length <= 1) {
                return current;
            }

            return (current + 1) % filteredProjects.length;
        });
    }, [filteredProjects.length]);

    // CHANGE FILTER AND CLOSE MODAL
    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        setSelectedProjectIndex(null);
    };

    return (
        <div
            className="
                flex
                justify-center
                items-start

                w-full
                max-w-[1200px]

                gap-8

                mx-auto
                py-10
            "
        >
            <div className="flex flex-col gap-8 w-full">

                {/* BACKGROUND GLOW */}
                <div
                    className="
                        absolute
                        top-[-120px]

                        w-[300px]
                        h-[300px]

                        sm:w-full
                        sm:h-[200px]

                        bg-glass-blue

                        blur-[120px]

                        pointer-events-none
                        z-0
                    "
                />

                {/* HEADER */}
                <div
                    className="
                        relative
                        z-10

                        flex
                        flex-col

                        lg:flex-row
                        lg:items-end

                        justify-between

                        gap-6
                    "
                >
                    {/* TITLES */}
                    <div className="flex flex-col text-white gap-2">
                        <span className="text-lg sm:text-2xl text-gray">
                            {t("projects.subtitle")}
                        </span>

                        <span
                            className="
                                text-primary

                                text-4xl
                                lg:text-5xl

                                font-bold
                                leading-tight
                            "
                        >
                            {t("projects.title")}
                        </span>
                    </div>

                    {/* FILTERS */}
                    <div
                        className="
                            w-full
                            md:w-auto
                            md:self-end
                            lg:self-auto
                        "
                    >
                        <FilterTabs
                            items={filters}
                            active={activeFilter}
                            onChange={handleFilterChange}
                        />
                    </div>
                </div>

                {/* PROJECTS */}
                <div
                    className="
                        grid

                        grid-cols-1
                        sm:grid-cols-2
                        xl:grid-cols-3

                        gap-6
                        lg:gap-6
                    "
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <ProjectView
                                key={project.slug}
                                project={project}
                                onViewDetails={() =>
                                    handleOpenDetails(project.slug)
                                }
                            />
                        ))
                    ) : (
                        <EmptyProjectCard
                            category={activeFilter}
                        />
                    )}
                </div>
            </div>

            {/* SINGLE PROJECT DETAILS MODAL */}
            {selectedProject && selectedProjectIndex !== null && (
                <ProjectDetails
                    project={selectedProject}
                    isOpen={true}
                    onClose={handleCloseDetails}

                    currentIndex={selectedProjectIndex + 1}
                    totalProjects={filteredProjects.length}

                    onPrevious={handlePreviousProject}
                    onNext={handleNextProject}
                />
            )}
        </div>
    );
}
