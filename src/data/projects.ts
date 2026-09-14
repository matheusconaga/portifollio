import patrimoniario from "@/assets/projects/patrimoniario.webp";
import println from "@/assets/projects/println.webp";
import github_project_card from "@/assets/projects/gihub-project-cards.webp";
import docflow from "@/assets/projects/docflow-ai.webp";
import analytics from "@/assets/projects/analytics.webp";
import educassist from "@/assets/projects/educassist.webp"

export interface Project {
    slug: string;
    image: string;
    title: string;
    description: string;
    techs: string[];
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
            slug: "educassist",
            image: educassist,
            title: "EducAssist",
            description:
                "Plataforma educacional com Inteligência Artificial desenvolvida para auxiliar professores na criação de planos de aula, atividades, avaliações e outros materiais pedagógicos, reduzindo tarefas burocráticas e otimizando o tempo dedicado ao ensino.",
            techs: [
                "React",
                "FastAPI",
                "PostgreSQL",
            ],
            category: "Fullstack",
            deployUrl:
                "https://www.educassist.com.br/",
        },
        {
            slug: "portfolio-analytics",
            image: analytics,
            title: "Portfolio Analytics",
            description:
                "Plataforma fullstack própria de web analytics para monitoramento do meu portfólio, com rastreamento de visitantes, sessões, eventos e interações, dashboard com dados reais e anonimizados e automações de notificações via n8n e Telegram.",
            techs: [
                "Node.js",
                "n8n",
                "PostgreSQL",
            ],
            category: "Fullstack",
            deployUrl:
                "https://analytics-portfolio-s8pd.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/portfolio-analytics",
        },
        {
            slug: "docflow-ai",
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
                "https://docflow-ai-lj3a.onrender.com/docs",
            repoUrl:
                "https://github.com/matheusconaga/docflow-ai",
        },

        {
            slug: "github-project-cards",
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
            slug: "println",
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
            slug: "patrimoniario",
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
            slug: "educassist",
            image: educassist,
            title: "EducAssist",
            description:
                "AI-powered educational platform designed to help teachers create lesson plans, activities, assessments, and other teaching materials, reducing administrative workload and giving them more time to focus on teaching.",
            techs: [
                "React",
                "FastAPI",
                "AI/LLMs",
            ],
            category: "Fullstack",
            deployUrl:
                "https://www.educassist.com.br/",
        },
        {
            slug: "portfolio-analytics",
            image: analytics,
            title: "Portfolio Analytics",
            description:
                "Custom fullstack web analytics platform built to monitor my portfolio, featuring visitor, session, event and interaction tracking, a dashboard with real anonymized data, and automated notifications through n8n and Telegram.",
            techs: [
                "Node.js",
                "n8n",
                "PostgreSQL",
            ],
            category: "Fullstack",
            deployUrl:
                "https://analytics-portfolio-s8pd.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/portfolio-analytics",
        },
        {
            slug: "docflow-ai",
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
                "https://docflow-ai-lj3a.onrender.com/docs",
            repoUrl:
                "https://github.com/matheusconaga/docflow-ai",
        },

        {
            slug: "github-project-cards",
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
            slug: "println",
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
            slug: "patrimoniario",
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
