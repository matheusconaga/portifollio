import patrimoniario from "@/assets/projects/patrimoniario.webp";
import println from "@/assets/projects/println.webp";
import portfolio from "@/assets/projects/portfolio.webp";
import github_project_card from "@/assets/projects/gihub-project-cards.webp";
import docflow from "@/assets/projects/docflow-ai.webp";

export interface Project {
    image: string; title:
    string; description:
    string; techs: string[];
    category: string;
    deployUrl?: string;
    repoUrl?: string;
    inDevelopment?: boolean;
}

interface ProjectsByLanguage {
    pt: Project[];
    en: Project[];
}

export const projects: ProjectsByLanguage = {
    pt: [
        {
            image: docflow,
            title: "DocFlow AI",
            description:
                "Plataforma backend para análise e extração de texto (OCR/Parsing) de PDFs, imagens e arquivos DOCX. Utiliza IA e RAG para viabilizar a geração futura de insights, planos de aula e atividades automatizadas.",
            techs: [
                "FastAPI",
                "Docker",
                "PostgreSQL",
            ],
            category: "Backend",
            deployUrl:
                "https://docflow-ai-lj3a.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/docflow-ai",
        },

        {
            image: github_project_card,
            title: "GitHub Project Cards",
            description:
                "Projeto open source que gera cards dinâmicos de repositórios utilizando a API oficial do GitHub. Permite criar previews visuais automáticos exibindo estrelas, forks e tecnologias utilizadas para portfólios e READMEs.",
            techs: [
                "Next.js",
                "React",
                "Open Source",
            ],
            category: "Frontend",
            deployUrl:
                "https://github-project-cards.vercel.app/preview",
            repoUrl:
                "https://github.com/matheusconaga/github-project-cards",
        },

        {
            image: portfolio,
            title: "Portifólio Profissional",
            description:
                "Portfólio feito em React, TypeScript e TailwindCSS, utilizando Framer Motion para animações fluidas, arquitetura componentizada e foco em performance, UI/UX e experiência visual moderna.",
            techs: [
                "React",
                "Tailwind",
                "StyledCo",
            ],
            category: "Frontend",
            deployUrl:
                "https://portifoliomatheuslula.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/portifollio",
        },

        {
            image: println,
            title: "PrintLn",
            description:
                "Rede social mobile fullstack com feed dinâmico, autenticação segura, posts com imagens, comentários, geolocalização e foco em performance, UX e arquitetura escalável.",
            techs: [
                "Flutter",
                "Firebase",
                "FastAPI",
            ],
            category: "Mobile",
            deployUrl:
                "https://println-social.vercel.app/",
            repoUrl:
                "https://github.com/matheusconaga/projeto-println",
        },

        {
            image: patrimoniario,
            title: "Patrimoniario",
            description:
                "Sistema web de gestão patrimonial com dashboards em tempo real, controle de ativos, QR Code, importação via Excel, relatórios em PDF e foco em performance, escalabilidade e usabilidade.",
            techs: [
                "React",
                "FastAPI",
                "PostgreSQL",
            ],
            category: "Frontend",
            deployUrl:
                "https://projeto-patrimoniario.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/projeto_patrimoniario",
        },
    ],

    en: [
        {
            image: docflow,
            title: "DocFlow AI",
            description:
                "Backend platform for text analysis and extraction (OCR/Parsing) from PDFs, images, and DOCX files. Uses AI and RAG to enable future generation of insights, lesson plans, and automated activities.",
            techs: [
                "FastAPI",
                "Docker",
                "PostgreSQL",
            ],
            category: "Backend",
            deployUrl:
                "https://docflow-ai-lj3a.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/docflow-ai",
        },

        {
            image: github_project_card,
            title: "GitHub Project Cards",
            description:
                "Open source project that generates dynamic repository cards using the official GitHub API. Allows creating automatic visual previews displaying stars, forks, and technologies used for portfolios and READMEs.",
            techs: [
                "Next.js",
                "React",
                "Open Source",
            ],
            category: "Frontend",
            deployUrl:
                "https://github-project-cards.vercel.app/preview",
            repoUrl:
                "https://github.com/matheusconaga/github-project-cards",
        },

        {
            image: portfolio,
            title: "Professional Portfolio",
            description:
                "Portfolio built with React, TypeScript, and TailwindCSS, using Framer Motion for fluid animations, component-based architecture, and focus on performance, UI/UX, and modern visual experience.",
            techs: [
                "React",
                "Tailwind",
                "StyledCo",
            ],
            category: "Frontend",
            deployUrl:
                "https://portifoliomatheuslula.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/portifollio",
        },

        {
            image: println,
            title: "PrintLn",
            description:
                "Fullstack mobile social network with dynamic feed, secure authentication, image posts, comments, geolocation, and focus on performance, UX, and scalable architecture.",
            techs: [
                "Flutter",
                "Firebase",
                "FastAPI",
            ],
            category: "Mobile",
            deployUrl:
                "https://println-social.vercel.app/",
            repoUrl:
                "https://github.com/matheusconaga/projeto-println",
        },

        {
            image: patrimoniario,
            title: "Patrimoniario",
            description:
                "Web-based asset management system with real-time dashboards, asset control, QR Code support, Excel import, PDF reports, and focus on performance, scalability, and usability.",
            techs: [
                "React",
                "FastAPI",
                "PostgreSQL",
            ],
            category: "Frontend",
            deployUrl:
                "https://projeto-patrimoniario.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/projeto_patrimoniario",
        },
    ],
};
