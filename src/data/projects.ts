
import patrimoniario from "@/assets/projects/patrimoniario.webp";
import println from "@/assets/projects/println.webp";
import github_project_card from "@/assets/projects/gihub-project-cards.webp";
import docflow from "@/assets/projects/docflow-ai.webp";
import analytics from "@/assets/projects/analytics.webp";
import educassist from "@/assets/projects/educassist.webp";

export interface ProjectMetric {
    value: string;
    label: string;
}

export interface Project {
    slug: string;
    image: string;
    title: string;
    description: string;
    techs: string[];
    category: string;

    deployUrl?: string;
    repoUrl?: string;
    caseStudyUrl?: string;

    inDevelopment?: boolean;

    highlights?: string[];
    metrics?: ProjectMetric[];
}

interface ProjectsByLanguage {
    pt: Project[];
    en: Project[];
}

export const projects: ProjectsByLanguage = {
    pt: [
        // EDUCASSIST
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

            highlights: [
                "Auxílio na criação de planos de aula, atividades e avaliações.",
                "Geração de materiais pedagógicos com recursos de Inteligência Artificial.",
                "Desenvolvimento Full Stack com React e FastAPI.",
                "Persistência e gerenciamento de dados com PostgreSQL.",
                "Solução voltada à redução de tarefas burocráticas e otimização do tempo dos professores.",
            ],
        },

        // PORTFOLIO ANALYTICS
        {
            slug: "portfolio-analytics",
            image: analytics,
            title: "Portfolio Analytics",
            description:
                "Plataforma full stack própria de web analytics para monitoramento do portfólio, com rastreamento de visitantes, sessões e interações, identificação de visitantes recorrentes e análise de engajamento. Conta com dashboards responsivos, dados públicos anonimizados, endpoints privados e automações de notificações via n8n e Telegram.",
            techs: [
                "Node.js",
                "TypeScript",
                "React",
                "Express",
                "PostgreSQL",
                "Prisma",
                "Recharts",
                "n8n",
            ],
            category: "Fullstack",
            deployUrl:
                "https://analytics-portfolio-s8pd.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/portfolio-analytics",
            caseStudyUrl:
                "/projects/portfolio-analytics",

            highlights: [
                "Sistema próprio de rastreamento de visitantes, sessões e eventos, sem depender integralmente de plataformas externas de analytics.",
                "Monitoramento de 10 tipos de eventos, incluindo visualizações de páginas e seções, acessos ao GitHub, demonstrações, downloads de currículo e interações de contato.",
                "Identificação de visitantes novos e recorrentes, acompanhamento de atividade por sessão e cálculo de métricas de engajamento.",
                "Dashboard responsivo com timeline de acessos, ranking de projetos, interações e indicadores de navegação.",
                "Separação entre API pública, com dados agregados e anonimizados, e endpoints privados protegidos por autenticação.",
                "Integração com n8n e Telegram para envio automático de resumos das sessões, incluindo páginas visitadas e interações realizadas.",
                "Estratégia de inicialização paralela dos serviços para contornar cold starts do Render sem bloquear o carregamento dos dados do dashboard.",
            ],

            metrics: [
                {
                    value: "10",
                    label: "Tipos de eventos rastreados",
                },
                {
                    value: "3",
                    label: "Entidades principais do banco",
                },
                {
                    value: "4",
                    label: "Períodos de análise",
                },
            ],
        },

        // DOCFLOW AI
        {
            slug: "docflow-ai",
            image: docflow,
            title: "DocFlow AI",
            description:
                "Plataforma backend de processamento inteligente de documentos educacionais que transforma arquivos PDF, DOCX e imagens em conhecimento estruturado e pesquisável. Combina OCR, LLMs, chunking semântico, embeddings vetoriais e RAG para extrair informações pedagógicas, realizar buscas por similaridade e gerar respostas contextualizadas com base nos documentos processados.",
            techs: [
                "Python",
                "FastAPI",
                "PostgreSQL",
                "SQLAlchemy",
                "pgvector",
                "Google Gemini",
                "PyMuPDF",
                "Tesseract OCR",
                "python-docx",
                "Pillow",
                "Pytest",
                "Docker",
                "GitHub Actions",
                "Jenkins",
            ],
            category: "Backend",
            deployUrl:
                "https://docflow-ai-lj3a.onrender.com/docs",
            repoUrl:
                "https://github.com/matheusconaga/docflow-ai",
            caseStudyUrl:
                "/projects/docflow-ai",

            highlights: [
                "Pipeline automatizado de ingestão e processamento de documentos PDF, DOCX e imagens, com extração de texto, parsing e OCR via Tesseract.",
                "Estruturação de informações pedagógicas utilizando Gemini 2.5 Flash, com identificação de disciplinas, níveis educacionais, habilidades, metodologias e avaliações.",
                "Seis estratégias especializadas de chunking semântico: planos de aula, atividades, avaliações, habilidades BNCC, recomendações e insights.",
                "Geração de embeddings de 3072 dimensões com gemini-embedding-001 e armazenamento vetorial no PostgreSQL com pgvector.",
                "Busca semântica utilizando similaridade por cosseno, com recuperação de trechos relevantes e filtragem por categoria pedagógica.",
                "Pipeline RAG que combina conteúdo recuperado com Gemini para gerar respostas contextualizadas e apresentar as fontes utilizadas.",
                "Arquitetura backend em camadas, com FastAPI, serviços especializados, SQLAlchemy ORM e persistência relacional e vetorial.",
                "Testes automatizados unitários, de integração e rotas da API, além de pipelines CI/CD com GitHub Actions e Jenkins.",
            ],

            metrics: [
                {
                    value: "90%",
                    label: "Cobertura de código",
                },
                {
                    value: "31",
                    label: "Testes aprovados",
                },
                {
                    value: "542",
                    label: "Statements analisados",
                },
            ],
        },

        // GITHUB PROJECT CARDS
        {
            slug: "github-project-cards",
            image: github_project_card,
            title: "GitHub Project Cards",
            description:
                "Ferramenta open source para geração de cards SVG personalizáveis de repositórios GitHub, com pré-visualização em tempo real e integração simplificada por Markdown. Permite configurar temas, imagens, tecnologias, idioma e indicadores de estrelas e forks, criando apresentações visuais para READMEs, portfólios e perfis de desenvolvedores.",
            techs: [
                "Next.js",
                "React",
                "TypeScript",
                "Satori",
                "Vercel",
            ],
            category: "Frontend",
            deployUrl:
                "https://github-project-cards.vercel.app/preview",
            repoUrl:
                "https://github.com/matheusconaga/github-project-cards",

            highlights: [
                "Geração dinâmica de cards SVG personalizados a partir de repositórios GitHub.",
                "Construtor interativo com pré-visualização em tempo real das personalizações.",
                "Quatro temas visuais disponíveis: Dark, Light, GitHub e Dracula.",
                "Suporte aos idiomas Português (PT-BR) e Inglês.",
                "Sete parâmetros de personalização, incluindo repositório, tema, idioma, imagem, tecnologias e indicadores de estrelas e forks.",
                "Geração de Markdown pronto para copiar e integrar em READMEs, portfólios, perfis e páginas de documentação.",
                "Projeto open source com licença MIT e suporte à contribuição da comunidade.",
            ],

            metrics: [
                {
                    value: "4",
                    label: "Temas visuais",
                },
                {
                    value: "2",
                    label: "Idiomas disponíveis",
                },
                {
                    value: "7",
                    label: "Parâmetros de personalização",
                },
            ],
        },

        // PRINTLN
        {
            slug: "println",
            image: println,
            title: "PrintLn",
            description:
                "Rede social mobile full stack desenvolvida com Flutter e FastAPI, com feed de publicações, autenticação de usuários, criação e gerenciamento de posts e comentários, compartilhamento de imagens e geolocalização. Integra Firebase Authentication, PostgreSQL e Cloudinary para autenticação, persistência de dados e armazenamento de imagens, oferecendo uma experiência mobile com gerenciamento reativo de estado, perfis personalizados e modo escuro.",
            techs: [
                "Flutter",
                "Firebase",
                "FastAPI",
                "Dart",
                "Python",
                "MobX",
                "Dio",
                "Geolocator",
                "PostgreSQL",
                "Cloudinary",
                "JWT",
            ],
            category: "Mobile",
            deployUrl:
                "https://println-social.vercel.app/",
            repoUrl:
                "https://github.com/matheusconaga/projeto-println",

            highlights: [
                "Aplicativo de rede social mobile com feed de publicações e gerenciamento de conteúdo.",
                "Cadastro e autenticação de usuários com integração a serviços Firebase e backend próprio.",
                "Operações CRUD para publicações e comentários, permitindo criar, visualizar, editar e excluir conteúdo.",
                "Publicação de imagens utilizando a câmera do dispositivo ou a galeria, com armazenamento via Cloudinary.",
                "Integração com geolocalização para identificação de cidade e estado, com suporte a ambientes Web e Mobile.",
                "Gerenciamento de estado reativo utilizando MobX e comunicação com a API por meio do Dio.",
                "Funcionalidade para salvar publicações e personalizar o perfil com nome de usuário e foto.",
                "Modo escuro integrado e interface mobile-first.",
                "Arquitetura desacoplada com aplicativo Flutter, API REST em FastAPI e PostgreSQL para persistência de dados.",
            ],
        },

        // PATRIMONIÁRIO
        {
            slug: "patrimoniario",
            image: patrimoniario,
            title: "Patrimoniário",
            description:
                "Sistema web de gestão patrimonial desenvolvido com React e TypeScript para centralizar o cadastro, acompanhamento e controle de ativos. Oferece dashboards em tempo real, filtros avançados, geração de etiquetas com QR Code, importação em lote via Excel e exportação de relatórios em PDF, utilizando Firebase para autenticação e persistência de dados e Cloudinary para armazenamento de imagens.",
            techs: [
                "React",
                "TypeScript",
                "Firebase",
                "Styled Components",
                "Vite",
                "Firebase Authentication",
                "Firestore",
                "Cloudinary",
                "QR Code",
                "XLSX",
                "PDF Generation",
            ],
            category: "Frontend",
            deployUrl:
                "https://projeto-patrimoniario.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/projeto_patrimoniario",
            caseStudyUrl:
                "/projects/patrimoniario",

            highlights: [
                "Sistema completo de gerenciamento de ativos com operações de cadastro, consulta, edição e exclusão (CRUD).",
                "Dashboard administrativo com visualização e acompanhamento de dados patrimoniais em tempo real.",
                "Busca inteligente e filtros avançados para facilitar a localização e organização dos ativos.",
                "Gerenciamento dinâmico de categorias e modelos patrimoniais.",
                "Geração de etiquetas com QR Code para identificação e rastreamento dos ativos.",
                "Importação e exportação de dados em lote por meio de planilhas Excel.",
                "Geração e exportação de relatórios em PDF.",
                "Autenticação de usuários com Firebase Authentication e persistência em tempo real com Cloud Firestore.",
                "Integração com Cloudinary para armazenamento e gerenciamento de imagens dos ativos.",
                "Interface SPA responsiva, otimizada para desktop e dispositivos móveis.",
            ],
        },
    ],

    en: [
        // EDUCASSIST
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

            highlights: [
                "Support for creating lesson plans, activities and assessments.",
                "AI-assisted generation of educational materials.",
                "Full Stack development with React and FastAPI.",
                "Data persistence and management with PostgreSQL.",
                "Designed to reduce administrative tasks and optimize teachers' time.",
            ],
        },

        // PORTFOLIO ANALYTICS
        {
            slug: "portfolio-analytics",
            image: analytics,
            title: "Portfolio Analytics",
            description:
                "Custom full-stack web analytics platform built to monitor portfolio activity through visitor, session and interaction tracking, returning visitor identification and engagement analysis. Features responsive dashboards, anonymized public data, private API endpoints, and automated notifications through n8n and Telegram.",
            techs: [
                "Node.js",
                "TypeScript",
                "React",
                "Express",
                "PostgreSQL",
                "Prisma",
                "Recharts",
                "n8n",
            ],
            category: "Fullstack",
            deployUrl:
                "https://analytics-portfolio-s8pd.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/portfolio-analytics",
            caseStudyUrl:
                "/en/projects/portfolio-analytics",

            highlights: [
                "Custom visitor, session and event tracking system, without relying entirely on third-party analytics platforms.",
                "Monitoring of 10 event types, including page and section views, GitHub access, project demos, resume downloads and contact interactions.",
                "Identification of new and returning visitors, session activity monitoring and engagement metrics.",
                "Responsive dashboard featuring traffic timelines, project rankings, interactions and navigation indicators.",
                "Separation between a public API exposing aggregated and anonymized data and private endpoints protected by authentication.",
                "Integration with n8n and Telegram for automated session summaries, including visited pages and user interactions.",
                "Parallel service initialization strategy to handle Render cold starts without blocking dashboard data retrieval.",
            ],

            metrics: [
                {
                    value: "10",
                    label: "Tracked event types",
                },
                {
                    value: "3",
                    label: "Core database entities",
                },
                {
                    value: "4",
                    label: "Analytics time ranges",
                },
            ],
        },

        // DOCFLOW AI
        {
            slug: "docflow-ai",
            image: docflow,
            title: "DocFlow AI",
            description:
                "Backend platform for intelligent educational document processing, transforming PDF, DOCX and image files into structured and searchable knowledge. Combines OCR, LLMs, semantic chunking, vector embeddings and RAG to extract pedagogical information, perform similarity searches and generate contextual answers grounded in processed documents.",
            techs: [
                "Python",
                "FastAPI",
                "PostgreSQL",
                "SQLAlchemy",
                "pgvector",
                "Google Gemini",
                "PyMuPDF",
                "Tesseract OCR",
                "python-docx",
                "Pillow",
                "Pytest",
                "Docker",
                "GitHub Actions",
                "Jenkins",
            ],
            category: "Backend",
            deployUrl:
                "https://docflow-ai-lj3a.onrender.com/docs",
            repoUrl:
                "https://github.com/matheusconaga/docflow-ai",
            caseStudyUrl:
                "/en/projects/docflow-ai",

            highlights: [
                "Automated ingestion and processing pipeline for PDF, DOCX and image files, featuring text extraction, parsing and Tesseract OCR.",
                "AI-powered structuring with Gemini 2.5 Flash to identify subjects, educational levels, skills, methodologies and assessments.",
                "Six specialized semantic chunking strategies: lesson plans, activities, assessments, BNCC skills, recommendations and insights.",
                "Generation of 3072-dimensional embeddings using gemini-embedding-001, with vector storage in PostgreSQL through pgvector.",
                "Semantic search using cosine similarity, with relevant chunk retrieval and filtering by pedagogical category.",
                "RAG pipeline combining retrieved content with Gemini to generate contextual answers and provide their sources.",
                "Layered backend architecture using FastAPI, specialized services, SQLAlchemy ORM, and relational and vector persistence.",
                "Automated unit, integration and API route tests, alongside CI/CD pipelines using GitHub Actions and Jenkins.",
            ],

            metrics: [
                {
                    value: "90%",
                    label: "Code coverage",
                },
                {
                    value: "31",
                    label: "Passing tests",
                },
                {
                    value: "542",
                    label: "Statements analyzed",
                },
            ],
        },

        // GITHUB PROJECT CARDS
        {
            slug: "github-project-cards",
            image: github_project_card,
            title: "GitHub Project Cards",
            description:
                "Open-source tool for generating customizable SVG cards for GitHub repositories, featuring real-time previews and easy Markdown integration. Supports configurable themes, images, technologies, languages, and star and fork indicators, creating visual showcases for READMEs, portfolios, and developer profiles.",
            techs: [
                "Next.js",
                "React",
                "TypeScript",
                "Satori",
                "Vercel",
            ],
            category: "Frontend",
            deployUrl:
                "https://github-project-cards.vercel.app/preview",
            repoUrl:
                "https://github.com/matheusconaga/github-project-cards",

            highlights: [
                "Dynamic generation of customized SVG cards from GitHub repositories.",
                "Interactive builder with real-time previews of card customizations.",
                "Four available visual themes: Dark, Light, GitHub and Dracula.",
                "Support for Portuguese (PT-BR) and English.",
                "Seven customization parameters, including repository, theme, language, image, technologies, and star and fork indicators.",
                "Generation of ready-to-copy Markdown for integration into READMEs, portfolios, profiles and documentation pages.",
                "Open-source project under the MIT License, with community contribution support.",
            ],

            metrics: [
                {
                    value: "4",
                    label: "Visual themes",
                },
                {
                    value: "2",
                    label: "Supported languages",
                },
                {
                    value: "7",
                    label: "Customization parameters",
                },
            ],
        },

        // PRINTLN
        {
            slug: "println",
            image: println,
            title: "PrintLn",
            description:
                "Full-stack mobile social network built with Flutter and FastAPI, featuring a publication feed, user authentication, post and comment management, image sharing and geolocation. Integrates Firebase Authentication, PostgreSQL and Cloudinary for authentication, data persistence and image storage, providing a mobile experience with reactive state management, customizable profiles and built-in dark mode.",
            techs: [
                "Flutter",
                "Firebase",
                "FastAPI",
                "Dart",
                "Python",
                "MobX",
                "Dio",
                "Geolocator",
                "PostgreSQL",
                "Cloudinary",
                "JWT",
            ],
            category: "Mobile",
            deployUrl:
                "https://println-social.vercel.app/",
            repoUrl:
                "https://github.com/matheusconaga/projeto-println",

            highlights: [
                "Mobile social networking application featuring a publication feed and content management.",
                "User registration and authentication integrated with Firebase services and a custom backend.",
                "CRUD operations for posts and comments, allowing users to create, view, edit and delete content.",
                "Image publishing through the device camera or gallery, with Cloudinary storage integration.",
                "Geolocation integration for city and state identification, supporting both Web and Mobile environments.",
                "Reactive state management using MobX and API communication through Dio.",
                "Post-saving functionality and customizable user profiles with username and profile picture updates.",
                "Built-in dark mode and mobile-first interface.",
                "Decoupled architecture featuring a Flutter application, FastAPI REST API and PostgreSQL data persistence.",
            ],
        },

        // PATRIMONIÁRIO
        {
            slug: "patrimoniario",
            image: patrimoniario,
            title: "Patrimoniario",
            description:
                "Web-based asset management system built with React and TypeScript to centralize asset registration, monitoring and control. Features real-time dashboards, advanced filtering, QR Code label generation, bulk Excel import and PDF report export, using Firebase for authentication and data persistence and Cloudinary for image storage.",
            techs: [
                "React",
                "TypeScript",
                "Firebase",
                "Styled Components",
                "Vite",
                "Firebase Authentication",
                "Firestore",
                "Cloudinary",
                "QR Code",
                "XLSX",
                "PDF Generation",
            ],
            category: "Frontend",
            deployUrl:
                "https://projeto-patrimoniario.onrender.com/",
            repoUrl:
                "https://github.com/matheusconaga/projeto_patrimoniario",
            caseStudyUrl:
                "/en/projects/patrimoniario",

            highlights: [
                "Complete asset management system with create, read, update and delete (CRUD) operations.",
                "Administrative dashboard for real-time visualization and monitoring of asset data.",
                "Smart search and advanced filters to simplify asset discovery and organization.",
                "Dynamic management of asset categories and models.",
                "QR Code label generation for asset identification and tracking.",
                "Bulk data import and export through Excel spreadsheets.",
                "PDF report generation and export.",
                "User authentication with Firebase Authentication and real-time data persistence using Cloud Firestore.",
                "Cloudinary integration for asset image storage and management.",
                "Responsive SPA interface optimized for desktop and mobile devices.",
            ],
        },
    ],
};
