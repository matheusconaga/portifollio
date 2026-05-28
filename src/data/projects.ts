import patrimoniario from "@/assets/projects/patrimoniario.webp"
import println from "@/assets/projects/println.webp"
import portfolio from "@/assets/projects/portfolio.webp"
import github_project_card from "@/assets/projects/gihub-project-cards.webp"
import docflow from "@/assets/projects/docflow-ai.webp"

export const projects = [
    {
        image: docflow,
        title: "DocFlow AI",
        inDevelopment: true,
        description: `
Plataforma backend para análise e extração de texto (OCR/Parsing) de PDFs, imagens e arquivos DOCX. Utiliza IA e RAG para viabilizar a geração futura de insights, planos de aula e atividades automatizadas.
`,
        techs: [
            "FastAPI",
            "Docker",
            "PostgreSQL",
        ],
        category: "Backend",
        deployUrl: "https://docflow-ai-lj3a.onrender.com/",
        repoUrl: "https://github.com/matheusconaga/docflow-ai",
    },
    {
        image: github_project_card,
        title: "GitHub Project Cards",
        description: `
Projeto open source que gera cards dinâmicos de repositórios utilizando a API oficial do GitHub. Permite criar previews visuais automáticos exibindo estrelas, forks e tecnologias utilizadas para portfólios e READMEs.
`,
        techs: [
            "Next.js",
            "React",
            "Open Source",
        ],
        category: "Frontend",
        deployUrl: "https://github-project-cards.vercel.app/preview",
        repoUrl: "https://github.com/matheusconaga/github-project-cards",
    },
    {
        image: portfolio,
        title: "Portifólio Profissional",
        description: `
Portfólio moderno e responsivo desenvolvido com React, TypeScript e TailwindCSS, utilizando Framer Motion para animações fluidas, arquitetura componentizada e foco em performance, UI/UX e experiência visual moderna.
`,
        techs: [
            "React",
            "Tailwind",
            "StyledCo",
        ],
        category: "Frontend",
        deployUrl: "https://portifoliomatheuslula.onrender.com/",
        repoUrl: "https://github.com/matheusconaga/portifollio",
    },
    {
        image: println,
        title: "PrintLn",
        description: `
Rede social mobile fullstack com feed dinâmico, autenticação segura, posts com imagens, comentários, geolocalização e foco em performance, UX e arquitetura escalável.
`,
        techs: [
            "Flutter",
            "Firebase",
            "FastAPI",
        ],
        category: "Mobile",
        deployUrl: "https://println-social.vercel.app/",
        repoUrl: "https://github.com/matheusconaga/projeto-println",
    },
    {
        image: patrimoniario,
        title: "Patrimoniário",
        description: `
Sistema web de gestão patrimonial com dashboards em tempo real, controle de ativos, QR Code, importação via Excel, relatórios em PDF e foco em performance, escalabilidade e usabilidade.
`,
        techs: [
            "React",
            "FastAPI",
            "PostgreSQL",
        ],
        category: "Frontend",
        deployUrl: "https://projeto-patrimoniario.onrender.com/",
        repoUrl: "https://github.com/matheusconaga/projeto_patrimoniario",
    },
]