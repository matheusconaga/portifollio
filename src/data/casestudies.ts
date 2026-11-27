
export interface CaseStudy {
    slug: string;
    subtitle: string;
    overview: string;

    problem: {
        description: string;
        points: string[];
    };

    solution: {
        description: string;
        points: string[];
    };

    features: {
        title: string;
        description: string;
    }[];

    architecture: {
        description: string;
        decisions: string[];
    };

    results: {
        description: string;
        learnings: string[];
    };

    challenges?: {
        title: string;
        description: string;
        solution: string;
    }[];

    futureImprovements?: string[];
}

export const caseStudies: Record<"pt" | "en", CaseStudy[]> = {
    // =====================================================
    // PORTUGUÊS
    // =====================================================
    pt: [
        // ===================================================
        // PORTFOLIO ANALYTICS
        // ===================================================
        {
            slug: "portfolio-analytics",
            subtitle: "Transformando acessos em dados úteis.",
            overview:
                "Plataforma própria de web analytics desenvolvida para monitorar visitantes, sessões e interações em um portfólio de desenvolvimento.",

            problem: {
                description:
                    "A necessidade de compreender como os visitantes interagem com o portfólio, quais projetos despertam mais interesse e quais ações são realizadas durante a navegação.",
                points: [
                    "Falta de visibilidade sobre o comportamento dos visitantes.",
                    "Dificuldade para identificar projetos com maior engajamento.",
                    "Ausência de uma visão centralizada das interações.",
                ],
            },

            solution: {
                description:
                    "Desenvolvimento de uma plataforma própria de analytics, com rastreamento de eventos, processamento de sessões, dashboards e automações.",
                points: [
                    "Sistema próprio de rastreamento de visitantes e eventos.",
                    "Dashboard para visualização de métricas e interações.",
                    "Integração com n8n e Telegram para notificações automáticas.",
                ],
            },

            features: [
                {
                    title: "Rastreamento de visitantes",
                    description:
                        "Identificação de visitantes novos e recorrentes e acompanhamento de suas interações.",
                },
                {
                    title: "Monitoramento de sessões",
                    description:
                        "Registro de eventos e acompanhamento da atividade dos visitantes durante a navegação.",
                },
                {
                    title: "Dashboard analítico",
                    description:
                        "Visualização de acessos, interações, ranking de projetos e métricas de engajamento.",
                },
                {
                    title: "Notificações automatizadas",
                    description:
                        "Integração entre n8n e Telegram para envio de resumos das sessões.",
                },
            ],

            architecture: {
                description:
                    "Arquitetura distribuída com frontend hospedado no Render e backend e n8n executados em um dispositivo próprio, com acesso externo por meio do Cloudflare Tunnel.",
                decisions: [
                    "React e TypeScript para a interface do dashboard.",
                    "Node.js e Express para construção da API REST.",
                    "PostgreSQL e Prisma para persistência e acesso aos dados.",
                    "Cloudflare Tunnel para disponibilizar o backend externamente.",
                    "n8n para automação dos fluxos de notificação.",
                ],
            },

            results: {
                description:
                    "A plataforma permite acompanhar o comportamento dos visitantes e compreender melhor o desempenho dos projetos apresentados no portfólio.",
                learnings: [
                    "Modelagem de visitantes, sessões e eventos.",
                    "Desenvolvimento e integração de APIs REST.",
                    "Comunicação entre serviços independentes.",
                    "Automação de processos com n8n e Telegram.",
                    "Implementação de uma arquitetura distribuída.",
                ],
            },

            futureImprovements: [
                "Expandir os indicadores de engajamento.",
                "Melhorar a disponibilidade da infraestrutura.",
                "Adicionar novos relatórios e filtros analíticos.",
            ],
        },

        // ===================================================
        // PATRIMONIÁRIO
        // ===================================================
        {
            slug: "patrimoniario",
            subtitle: "Digitalizando a gestão e o controle patrimonial.",
            overview:
                "Sistema de gestão patrimonial desenvolvido para uma instituição, com recursos para organizar bens, acompanhar informações e facilitar o controle do inventário por meio de uma interface administrativa.",

            problem: {
                description:
                    "A necessidade de centralizar as informações dos bens patrimoniais e tornar os processos de consulta, identificação e atualização do inventário mais organizados e eficientes.",
                points: [
                    "Dificuldade para manter as informações patrimoniais organizadas e acessíveis.",
                    "Processos manuais que aumentavam o tempo de atualização e conferência dos bens.",
                    "Necessidade de facilitar a identificação dos itens e o acompanhamento do inventário.",
                    "Ausência de uma interface centralizada para administrar os registros.",
                ],
            },

            solution: {
                description:
                    "Desenvolvimento de uma aplicação web para gestão patrimonial, com painel administrativo, identificação de bens por QR Code e recursos para gerenciamento e organização dos registros.",
                points: [
                    "Interface para cadastro, consulta e gerenciamento de bens patrimoniais.",
                    "Identificação de itens por meio de QR Codes.",
                    "Painel administrativo para centralizar as operações.",
                    "Recursos de importação e exportação de dados.",
                    "Gerenciamento de imagens associadas aos registros.",
                ],
            },

            features: [
                {
                    title: "Gestão de bens patrimoniais",
                    description:
                        "Cadastro, visualização e atualização das informações dos bens em uma interface centralizada.",
                },
                {
                    title: "Identificação por QR Code",
                    description:
                        "Geração de códigos para facilitar a identificação e a consulta das informações dos itens patrimoniais.",
                },
                {
                    title: "Painel administrativo",
                    description:
                        "Interface para acompanhar e administrar os registros, facilitando as operações do sistema.",
                },
                {
                    title: "Importação e exportação",
                    description:
                        "Recursos para importar e exportar informações, facilitando a organização e a manutenção do inventário.",
                },
                {
                    title: "Gerenciamento de imagens",
                    description:
                        "Integração com Cloudinary para armazenamento e gerenciamento de imagens relacionadas aos bens.",
                },
                {
                    title: "Design System",
                    description:
                        "Componentes e padrões visuais reutilizáveis para manter a consistência da interface e facilitar sua evolução.",
                },
            ],

            architecture: {
                description:
                    "Aplicação web desenvolvida com React e TypeScript, utilizando Firebase para os serviços de backend e Cloudinary para gerenciamento de imagens. A interface foi estruturada com componentes reutilizáveis e Styled Components.",
                decisions: [
                    "React e TypeScript para construção da interface e organização da aplicação.",
                    "Firebase para integração com os serviços de backend e persistência de dados.",
                    "Cloudinary para armazenamento e gerenciamento de imagens.",
                    "Styled Components para estilização e organização dos componentes visuais.",
                    "Integração com APIs REST para comunicação entre os recursos da aplicação.",
                    "Design System para padronização e reutilização de componentes.",
                ],
            },

            results: {
                description:
                    "O sistema centralizou a gestão das informações patrimoniais e tornou os processos de identificação, consulta e atualização dos bens mais organizados. A solução contribuiu para uma redução estimada de 40% no retrabalho operacional.",
                learnings: [
                    "Desenvolvimento de aplicações voltadas a necessidades reais de uma instituição.",
                    "Modelagem e organização de informações patrimoniais.",
                    "Integração de serviços externos e APIs REST.",
                    "Implementação de identificação de itens por QR Code.",
                    "Construção de interfaces administrativas e componentes reutilizáveis.",
                    "Organização de um Design System para facilitar manutenção e evolução.",
                ],
            },

            futureImprovements: [
                "Adicionar relatórios analíticos e indicadores patrimoniais.",
                "Expandir os recursos de histórico e auditoria das movimentações.",
                "Implementar novos filtros e mecanismos de busca.",
                "Ampliar os recursos de controle e acompanhamento do inventário.",
            ],
        },

        // ===================================================
        // DOCFLOW AI
        // ===================================================
        {
            slug: "docflow-ai",
            subtitle: "Transformando documentos em conhecimento estruturado.",
            overview:
                "Plataforma de processamento inteligente de documentos que utiliza OCR, modelos de linguagem e busca vetorial para extrair, estruturar e recuperar informações de arquivos. O projeto também serve como base técnica para soluções de consulta contextual com inteligência artificial.",

            problem: {
                description:
                    "Documentos frequentemente armazenam informações importantes em formatos pouco estruturados, dificultando sua organização, recuperação e utilização em aplicações inteligentes.",
                points: [
                    "Dificuldade para extrair informações de diferentes formatos de documentos.",
                    "Necessidade de transformar conteúdo textual em dados estruturados.",
                    "Limitações de consultas tradicionais para recuperar informações contextuais.",
                    "Ausência de uma estrutura integrada para processamento, armazenamento e recuperação de conteúdo com IA.",
                ],
            },

            solution: {
                description:
                    "Desenvolvimento de uma API de processamento documental que combina extração de texto, estruturação com LLM, divisão de conteúdo em chunks, geração de embeddings e recuperação de informações por meio de uma arquitetura RAG.",
                points: [
                    "Extração de conteúdo de PDFs, DOCX e imagens com suporte a OCR.",
                    "Utilização do Gemini 2.5 Flash para interpretar e estruturar documentos.",
                    "Classificação do conteúdo em categorias específicas.",
                    "Geração de embeddings para representação vetorial dos conteúdos.",
                    "Busca semântica e consultas contextuais por meio de endpoints RAG.",
                ],
            },

            features: [
                {
                    title: "Extração de documentos",
                    description:
                        "Processamento de arquivos PDF, DOCX e imagens, com extração de texto e suporte a OCR para documentos digitalizados.",
                },
                {
                    title: "Estruturação com IA",
                    description:
                        "Utilização do Gemini 2.5 Flash para analisar o conteúdo extraído e organizá-lo em estruturas úteis para processamento posterior.",
                },
                {
                    title: "Classificação de conteúdo",
                    description:
                        "Organização do conteúdo em seis categorias: planos de aula, atividades, avaliações, BNCC, recomendações e insights.",
                },
                {
                    title: "Chunking e embeddings",
                    description:
                        "Divisão do conteúdo em unidades menores e geração de embeddings com o modelo gemini-embedding-001, permitindo representar semanticamente os documentos.",
                },
                {
                    title: "Busca semântica",
                    description:
                        "Recuperação de trechos relevantes por similaridade vetorial, utilizando PostgreSQL e pgvector.",
                },
                {
                    title: "Consultas com RAG",
                    description:
                        "Endpoints dedicados à busca e consulta contextual de informações, combinando recuperação de conteúdo e geração de respostas com IA.",
                },
            ],

            architecture: {
                description:
                    "Backend desenvolvido com Python e FastAPI, utilizando PostgreSQL com pgvector para armazenamento dos dados e embeddings. O processamento de documentos integra modelos Gemini para estruturação e representação semântica do conteúdo. A aplicação utiliza Docker e pipelines de automação para apoiar o desenvolvimento e a integração contínua.",
                decisions: [
                    "Python e FastAPI para construção da API e organização dos serviços.",
                    "PostgreSQL com Neon para persistência dos documentos e metadados.",
                    "pgvector para armazenamento e recuperação de embeddings por similaridade vetorial.",
                    "Gemini 2.5 Flash para interpretação e estruturação do conteúdo documental.",
                    "gemini-embedding-001 para geração de embeddings vetoriais de 3072 dimensões.",
                    "Estratégia de chunking para organizar o conteúdo em categorias e unidades recuperáveis.",
                    "Docker para padronização do ambiente de execução.",
                    "GitHub Actions e Jenkins para automação de etapas do fluxo de desenvolvimento.",
                ],
            },

            results: {
                description:
                    "O projeto estabelece uma estrutura reutilizável para transformar documentos em informações organizadas e pesquisáveis semanticamente. A implementação dos fluxos de processamento e recuperação cria uma base técnica para aplicações que precisam consultar conhecimento documental utilizando IA.",
                learnings: [
                    "Desenvolvimento de APIs com Python e FastAPI.",
                    "Processamento e extração de informações de documentos.",
                    "Integração de modelos de linguagem e modelos de embeddings.",
                    "Implementação de estratégias de chunking e recuperação semântica.",
                    "Utilização de PostgreSQL e pgvector para busca vetorial.",
                    "Construção de pipelines RAG para consultas contextuais.",
                    "Organização de serviços e ambientes com Docker.",
                    "Automação de processos de desenvolvimento e integração contínua.",
                ],
            },

            challenges: [
                {
                    title: "Transformação de documentos em conteúdo pesquisável",
                    description:
                        "Os arquivos de entrada possuem formatos e estruturas diferentes, tornando necessário padronizar o conteúdo antes de armazená-lo e disponibilizá-lo para consultas.",
                    solution:
                        "Implementação de etapas de extração, normalização e classificação do conteúdo, preparando os documentos para processamento posterior.",
                },
                {
                    title: "Organização do conteúdo para recuperação contextual",
                    description:
                        "Armazenar documentos inteiros dificulta a recuperação de trechos específicos e relevantes para uma pergunta.",
                    solution:
                        "Implementação de uma estratégia de chunking com categorias específicas, permitindo armazenar e recuperar partes menores e contextualizadas dos documentos.",
                },
                {
                    title: "Busca semântica em documentos",
                    description:
                        "Consultas baseadas apenas em correspondência textual podem não encontrar informações relevantes quando a pergunta utiliza termos diferentes dos documentos.",
                    solution:
                        "Geração de embeddings com gemini-embedding-001 e utilização do pgvector para recuperação de conteúdo por similaridade semântica.",
                },
                {
                    title: "Gerenciamento dos arquivos durante o processamento",
                    description:
                        "O processamento de documentos pode gerar arquivos intermediários que não precisam permanecer armazenados após a extração.",
                    solution:
                        "Utilização de arquivos temporários durante o processamento de PDFs, mantendo o conteúdo textual extraído como informação persistente.",
                },
            ],

            futureImprovements: [
                "Expandir os formatos de documentos suportados.",
                "Aprimorar a avaliação da relevância dos resultados recuperados.",
                "Adicionar mecanismos de reordenação de resultados (reranking).",
                "Implementar autenticação e controle de acesso aos documentos.",
                "Adicionar monitoramento de desempenho e métricas dos fluxos RAG.",
                "Expandir os recursos de consulta contextual e integração com aplicações externas.",
            ],
        },
    ],

    // =====================================================
    // ENGLISH
    // =====================================================
    en: [
        // ===================================================
        // PORTFOLIO ANALYTICS
        // ===================================================
        {
            slug: "portfolio-analytics",
            subtitle: "Turning traffic into meaningful insights.",
            overview:
                "A custom web analytics platform built to monitor visitors, sessions, and interactions across a developer portfolio.",

            problem: {
                description:
                    "The need to understand how visitors interact with the portfolio, which projects attract the most interest, and what actions they take while browsing.",
                points: [
                    "Limited visibility into visitor behavior.",
                    "Difficulty identifying projects with higher engagement.",
                    "No centralized view of visitor interactions.",
                ],
            },

            solution: {
                description:
                    "Development of a custom analytics platform featuring event tracking, session processing, dashboards, and automated workflows.",
                points: [
                    "Custom visitor and event tracking system.",
                    "Dashboard for visualizing metrics and interactions.",
                    "Integration with n8n and Telegram for automated notifications.",
                ],
            },

            features: [
                {
                    title: "Visitor tracking",
                    description:
                        "Identification of new and returning visitors and monitoring of their interactions.",
                },
                {
                    title: "Session monitoring",
                    description:
                        "Event recording and activity tracking throughout each browsing session.",
                },
                {
                    title: "Analytics dashboard",
                    description:
                        "Visualization of traffic, interactions, project rankings, and engagement metrics.",
                },
                {
                    title: "Automated notifications",
                    description:
                        "Integration between n8n and Telegram to deliver session summaries.",
                },
            ],

            architecture: {
                description:
                    "Distributed architecture with the frontend hosted on Render and the backend and n8n running on a self-hosted device, exposed externally through Cloudflare Tunnel.",
                decisions: [
                    "React and TypeScript for the dashboard interface.",
                    "Node.js and Express for the REST API.",
                    "PostgreSQL and Prisma for data persistence and access.",
                    "Cloudflare Tunnel to expose the backend externally.",
                    "n8n to automate notification workflows.",
                ],
            },

            results: {
                description:
                    "The platform provides visibility into visitor behavior and helps evaluate the performance of projects showcased in the portfolio.",
                learnings: [
                    "Data modeling for visitors, sessions, and events.",
                    "REST API development and integration.",
                    "Communication between independent services.",
                    "Workflow automation with n8n and Telegram.",
                    "Implementation of a distributed architecture.",
                ],
            },

            futureImprovements: [
                "Expand engagement indicators.",
                "Improve infrastructure availability.",
                "Add new reports and analytical filters.",
            ],
        },

        // ===================================================
        // PATRIMONIÁRIO
        // ===================================================
        {
            slug: "patrimoniario",
            subtitle: "Digitizing asset management and inventory control.",
            overview:
                "An asset management system developed for an institution, providing tools to organize assets, track information, and simplify inventory management through an administrative interface.",

            problem: {
                description:
                    "The need to centralize asset information and make inventory consultation, identification, and updates more organized and efficient.",
                points: [
                    "Difficulty keeping asset information organized and accessible.",
                    "Manual processes that increased the time required to update and verify assets.",
                    "The need to simplify item identification and inventory tracking.",
                    "Lack of a centralized interface for managing records.",
                ],
            },

            solution: {
                description:
                    "Development of a web application for asset management, featuring an administrative dashboard, QR Code-based asset identification, and tools for managing and organizing records.",
                points: [
                    "Interface for registering, viewing, and managing assets.",
                    "QR Code-based item identification.",
                    "Administrative dashboard to centralize operations.",
                    "Data import and export capabilities.",
                    "Image management for asset records.",
                ],
            },

            features: [
                {
                    title: "Asset management",
                    description:
                        "Registration, visualization, and updating of asset information through a centralized interface.",
                },
                {
                    title: "QR Code identification",
                    description:
                        "QR Code generation to simplify asset identification and access to item information.",
                },
                {
                    title: "Administrative dashboard",
                    description:
                        "Interface for monitoring and managing records, making system operations easier.",
                },
                {
                    title: "Data import and export",
                    description:
                        "Tools for importing and exporting information, simplifying inventory organization and maintenance.",
                },
                {
                    title: "Image management",
                    description:
                        "Cloudinary integration for storing and managing images associated with assets.",
                },
                {
                    title: "Design System",
                    description:
                        "Reusable components and visual patterns to maintain interface consistency and simplify future development.",
                },
            ],

            architecture: {
                description:
                    "A web application built with React and TypeScript, using Firebase for backend services and Cloudinary for image management. The interface was structured around reusable components and Styled Components.",
                decisions: [
                    "React and TypeScript for interface development and application structure.",
                    "Firebase for backend services and data persistence.",
                    "Cloudinary for image storage and management.",
                    "Styled Components for styling and component organization.",
                    "REST API integrations for communication between application resources.",
                    "Design System for component standardization and reusability.",
                ],
            },

            results: {
                description:
                    "The system centralized asset information and made asset identification, consultation, and updates more organized. The solution contributed to an estimated 40% reduction in operational rework.",
                learnings: [
                    "Building applications around real institutional needs.",
                    "Asset information modeling and organization.",
                    "Integration with external services and REST APIs.",
                    "Implementation of QR Code-based item identification.",
                    "Development of administrative interfaces and reusable components.",
                    "Design System organization for easier maintenance and evolution.",
                ],
            },

            futureImprovements: [
                "Add analytical reports and asset management indicators.",
                "Expand movement history and auditing capabilities.",
                "Implement additional filters and search mechanisms.",
                "Extend inventory monitoring and control features.",
            ],
        },

        // ===================================================
        // DOCFLOW AI
        // ===================================================
        {
            slug: "docflow-ai",
            subtitle: "Turning documents into structured knowledge.",
            overview:
                "An intelligent document processing platform that uses OCR, language models, and vector search to extract, structure, and retrieve information from files. The project also serves as a technical foundation for AI-powered contextual search applications.",

            problem: {
                description:
                    "Documents often contain valuable information in unstructured formats, making it difficult to organize, retrieve, and use that information in intelligent applications.",
                points: [
                    "Difficulty extracting information from different document formats.",
                    "The need to transform textual content into structured data.",
                    "Limitations of traditional queries when retrieving contextual information.",
                    "Lack of an integrated structure for AI-powered content processing, storage, and retrieval.",
                ],
            },

            solution: {
                description:
                    "Development of a document processing API combining text extraction, LLM-based structuring, content chunking, embedding generation, and information retrieval through a RAG architecture.",
                points: [
                    "Content extraction from PDFs, DOCX files, and images with OCR support.",
                    "Gemini 2.5 Flash for document interpretation and structuring.",
                    "Content classification into specific categories.",
                    "Embedding generation for vector representation of content.",
                    "Semantic search and contextual queries through RAG endpoints.",
                ],
            },

            features: [
                {
                    title: "Document extraction",
                    description:
                        "Processing of PDF, DOCX, and image files, with text extraction and OCR support for scanned documents.",
                },
                {
                    title: "AI-powered structuring",
                    description:
                        "Gemini 2.5 Flash analyzes extracted content and organizes it into structures suitable for further processing.",
                },
                {
                    title: "Content classification",
                    description:
                        "Organization of content into six categories: lesson plans, activities, assessments, BNCC, recommendations, and insights.",
                },
                {
                    title: "Chunking and embeddings",
                    description:
                        "Content segmentation into smaller units and embedding generation using gemini-embedding-001 to represent documents semantically.",
                },
                {
                    title: "Semantic search",
                    description:
                        "Retrieval of relevant content through vector similarity, using PostgreSQL and pgvector.",
                },
                {
                    title: "RAG-based queries",
                    description:
                        "Dedicated endpoints for searching and retrieving contextual information by combining content retrieval with AI-generated responses.",
                },
            ],

            architecture: {
                description:
                    "Backend developed with Python and FastAPI, using PostgreSQL with pgvector for storing documents and embeddings. Document processing integrates Gemini models for content structuring and semantic representation. The application uses Docker and automation pipelines to support development and continuous integration.",
                decisions: [
                    "Python and FastAPI for API development and service organization.",
                    "PostgreSQL with Neon for document and metadata persistence.",
                    "pgvector for storing and retrieving embeddings through vector similarity.",
                    "Gemini 2.5 Flash for document interpretation and content structuring.",
                    "gemini-embedding-001 for generating 3072-dimensional vector embeddings.",
                    "Chunking strategy to organize content into categories and retrievable units.",
                    "Docker for environment standardization.",
                    "GitHub Actions and Jenkins for automating development and integration workflows.",
                ],
            },

            results: {
                description:
                    "The project establishes a reusable structure for transforming documents into organized, semantically searchable information. Its processing and retrieval workflows provide a technical foundation for applications that need to query document-based knowledge using AI.",
                learnings: [
                    "API development with Python and FastAPI.",
                    "Document processing and information extraction.",
                    "Integration of language models and embedding models.",
                    "Implementation of chunking and semantic retrieval strategies.",
                    "Use of PostgreSQL and pgvector for vector search.",
                    "Development of RAG pipelines for contextual queries.",
                    "Service and environment organization with Docker.",
                    "Development workflow automation and continuous integration.",
                ],
            },

            challenges: [
                {
                    title: "Transforming documents into searchable content",
                    description:
                        "Input files have different formats and structures, making it necessary to standardize their content before storage and retrieval.",
                    solution:
                        "Implementation of extraction, normalization, and classification stages to prepare documents for further processing.",
                },
                {
                    title: "Organizing content for contextual retrieval",
                    description:
                        "Storing entire documents makes it harder to retrieve specific passages relevant to a particular question.",
                    solution:
                        "Implementation of a chunking strategy with specific content categories, allowing smaller and contextualized document sections to be stored and retrieved.",
                },
                {
                    title: "Semantic document search",
                    description:
                        "Queries based only on textual matching may fail to retrieve relevant information when questions use different terms from the original documents.",
                    solution:
                        "Embedding generation with gemini-embedding-001 and pgvector for semantic similarity-based content retrieval.",
                },
                {
                    title: "Managing files during processing",
                    description:
                        "Document processing may generate intermediate files that do not need to remain stored after text extraction.",
                    solution:
                        "Temporary files are used during PDF processing, while the extracted textual content is retained as persistent information.",
                },
            ],

            futureImprovements: [
                "Expand the range of supported document formats.",
                "Improve the evaluation of retrieved result relevance.",
                "Add result reranking mechanisms.",
                "Implement authentication and document access control.",
                "Add performance monitoring and metrics for RAG workflows.",
                "Expand contextual query capabilities and integrations with external applications.",
            ],
        },
    ],
};
