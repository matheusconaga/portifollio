export interface Experience {
  title: string;
  subtitle?: string;
  category: "experiences" | "formation" | "certifications";
  description: string;
  season: string;
  enterprise: string;
  freelancer: boolean;
}

interface ExperiencesByLanguage {
  pt: Experience[];
  en: Experience[];
}

export const experiences: ExperiencesByLanguage = {
  pt: [
    /* =========================
       EXPERIÊNCIAS
    ========================== */

    {
      title:
        "Desenvolvedor Frontend / Mobile / Fullstack",

      category: "experiences",

      description:
        "Atuei no desenvolvimento fullstack de aplicações web e mobile, APIs e integrações entre sistemas, com foco em performance, escalabilidade e automação de processos. Também participei de decisões técnicas e melhorias de arquitetura.",

      season: "Ago 2024 - Presente",

      enterprise:
        "RGM Tecnologia Inteligência e Processos",

      freelancer: false,
    },

    {
      title:
        "Desenvolvedor Frontend / Fullstack",

      category: "experiences",

      description:
        "Desenvolvi um sistema web de gestão patrimonial com React, incluindo dashboard administrativo, CRUD completo, integração com APIs e rastreamento por QR Code. Também implementei automações com Excel, reduzindo tarefas manuais em até 40%, além de realizar o deploy em produção.",

      season: "Out 2025 - Dez 2025",

      enterprise:
        "Centro Espírita Caridade e Fé",

      freelancer: true,
    },

    {
      title:
        "Desenvolvedor Frontend / Mobile",

      category: "experiences",

      description:
        "Desenvolvi um aplicativo mobile para estudos do ENEM utilizando Flutter e Dart, com funcionalidades de acesso a videoaulas, resumos e questões de provas anteriores. O app foi projetado para ser leve e intuitivo, visando uma experiência de usuário fluida e eficiente.",

      season: "Mar 2023 - Ago 2024",

      enterprise:
        "IFPI - Instituto Federal do Piauí",

      freelancer: true,
    },

    /* =========================
       FORMAÇÃO
    ========================== */

    {
      title:
        "Curso Superior em Tecnologia (CST)",

      subtitle:
        "Análise e Desenvolvimento de Sistemas",

      category: "formation",

      description:
        "No curso aprendi fundamentos de programação, engenharia de software, programação web, programação móvel, prototipação, banco de dados, APIs e outras competências essenciais para a formação de desenvolvedor fullstack.",

      season: "Mar 2022 - Fev 2025",

      enterprise:
        "IFPI - Instituto Federal do Piauí",

      freelancer: false,
    },

    {
      title: "Curso Técnico",

      subtitle: "Administração",

      category: "formation",

      description:
        "No curso técnico aprendi sobre gestão, finanças, marketing, recursos humanos, logística, empreendedorismo e processos administrativos, desenvolvendo uma visão estratégica de negócios e organização empresarial.",

      season: "Mar 2018 - Abr 2021",

      enterprise:
        "IFMA - Instituto Federal do Maranhão",

      freelancer: false,
    },

    /* =========================
       CERTIFICAÇÕES
    ========================== */

    {
      title:
        "Automação com N8N e Agentes de Inteligência Artificial",

      category: "certifications",

      description:
        "Formação focada em automações inteligentes utilizando N8N, agentes de IA, integrações entre APIs, workflows automatizados e aplicações modernas de inteligência artificial.",

      season: "2026",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title:
        "Formação Inteligência Artificial: Do Zero ao Avançado",

      category: "certifications",

      description:
        "Capacitação completa em fundamentos de IA, machine learning, modelos generativos, aplicações práticas e construção de soluções inteligentes modernas.",

      season: "2026",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "User Experience (UX)",

      category: "certifications",

      description:
        "Curso voltado para experiência do usuário, design de interfaces, usabilidade, prototipação e construção de produtos digitais focados em acessibilidade e interação.",

      season: "2025",

      enterprise: "FIAP",

      freelancer: false,
    },

    {
      title: "JavaScript e TypeScript",

      category: "certifications",

      description:
        "Capacitação avançada em JavaScript moderno e TypeScript, incluindo tipagem, orientação a objetos, APIs, assincronismo e aplicações escaláveis.",

      season: "2025",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "React Native",

      category: "certifications",

      description:
        "Desenvolvimento de aplicações mobile cross-platform utilizando React Native, componentes reutilizáveis, navegação e integração com APIs.",

      season: "2024",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "Flutter",

      category: "certifications",

      description:
        "Desenvolvimento mobile com Flutter e Dart, criação de interfaces modernas, gerenciamento de estado e construção de aplicações multiplataforma.",

      season: "2024",

      enterprise: "Udemy",

      freelancer: false,
    },
  ],

  en: [
    /* =========================
       EXPERIENCES
    ========================== */

    {
      title:
        "Frontend / Mobile / Fullstack Developer",

      category: "experiences",

      description:
        "Worked on the fullstack development of web and mobile applications, APIs, and system integrations, focusing on performance, scalability, and process automation. Also participated in technical decisions and architecture improvements.",

      season: "Aug 2024 - Present",

      enterprise:
        "RGM Tecnologia Inteligência e Processos",

      freelancer: false,
    },

    {
      title:
        "Frontend / Fullstack Developer",

      category: "experiences",

      description:
        "Developed a web-based asset management system using React, including an administrative dashboard, full CRUD operations, API integrations, and QR Code tracking. Also implemented Excel automations, reducing manual tasks by up to 40%, in addition to deploying the system to production.",

      season: "Oct 2025 - Dec 2025",

      enterprise:
        "Centro Espírita Caridade e Fé",

      freelancer: true,
    },

    {
      title:
        "Frontend / Mobile Developer",

      category: "experiences",

      description:
        "Developed a mobile application for ENEM studies using Flutter and Dart, featuring access to video lessons, summaries, and previous exam questions. The app was designed to be lightweight and intuitive, providing a smooth and efficient user experience.",

      season: "Mar 2023 - Aug 2024",

      enterprise:
        "IFPI - Federal Institute of Piauí",

      freelancer: true,
    },

    /* =========================
       EDUCATION
    ========================== */

    {
      title:
        "Higher Education Technology Degree",

      subtitle:
        "Systems Analysis and Development",

      category: "formation",

      description:
        "During the course, I learned programming fundamentals, software engineering, web development, mobile development, prototyping, databases, APIs, and other essential skills for becoming a fullstack developer.",

      season: "Mar 2022 - Feb 2025",

      enterprise:
        "IFPI - Federal Institute of Piauí",

      freelancer: false,
    },

    {
      title: "Technical Course",

      subtitle: "Business Administration",

      category: "formation",

      description:
        "In the technical course, I learned about management, finance, marketing, human resources, logistics, entrepreneurship, and administrative processes, developing a strategic business and organizational mindset.",

      season: "Mar 2018 - Apr 2021",

      enterprise:
        "IFMA - Federal Institute of Maranhão",

      freelancer: false,
    },

    /* =========================
       CERTIFICATIONS
    ========================== */

    {
      title:
        "Automation with N8N and Artificial Intelligence Agents",

      category: "certifications",

      description:
        "Training focused on intelligent automations using N8N, AI agents, API integrations, automated workflows, and modern artificial intelligence applications.",

      season: "2026",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title:
        "Artificial Intelligence Training: From Beginner to Advanced",

      category: "certifications",

      description:
        "Comprehensive training in AI fundamentals, machine learning, generative models, practical applications, and building modern intelligent solutions.",

      season: "2026",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "User Experience (UX)",

      category: "certifications",

      description:
        "Course focused on user experience, interface design, usability, prototyping, and building digital products focused on accessibility and interaction.",

      season: "2025",

      enterprise: "FIAP",

      freelancer: false,
    },

    {
      title: "JavaScript and TypeScript",

      category: "certifications",

      description:
        "Advanced training in modern JavaScript and TypeScript, including typing, object-oriented programming, APIs, asynchronous programming, and scalable applications.",

      season: "2025",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "React Native",

      category: "certifications",

      description:
        "Development of cross-platform mobile applications using React Native, reusable components, navigation, and API integrations.",

      season: "2024",

      enterprise: "Udemy",

      freelancer: false,
    },

    {
      title: "Flutter",

      category: "certifications",

      description:
        "Mobile development with Flutter and Dart, creating modern interfaces, state management, and building multiplatform applications.",

      season: "2024",

      enterprise: "Udemy",

      freelancer: false,
    },
  ],
};
