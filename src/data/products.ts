
export interface Product {
    slug: string;
    logo: string;
    wallpaper: string;
    imageFeatured: string;
    title: string;
    description: string;
    techs: string[];
    deployUrl?: string;
    instaUrl?: string;
    status: "Destaque" | "Em Desenvolvimento" | "Concluído";
}

interface ProductsByLanguage {
    pt: Product[];
    en: Product[];
}

const productsByLanguage: ProductsByLanguage = {
    pt: [
        {
            slug: "educassist",
            logo: "",
            wallpaper: "",
            imageFeatured: "",
            title: "EducAssist",
            description: "Assistente inteligente para professores que economiza tempo como planejamento, atividades, avaliações e personalização de aulas com apoio de IA.",
            techs: ["Edtech", "IA", "MVP"],
            deployUrl: "https://www.educassist.com.br/",
            instaUrl: "https://www.instagram.com/educassistbr/",
            status: "Destaque"
        },
        {
            slug: "agronova",
            logo: "",
            wallpaper: "",
            imageFeatured: "",
            title: "AgroNova",
            description: "Plataforma de agricultura de precisão com monitoramento em tempo real e análise de dados para maximizar a produtividade.",
            techs: ["AgTech", "IA", "WhatsApp Business API"],
            deployUrl: "",
            instaUrl: "",
            status: "Em Desenvolvimento"
        },
        {
            slug:"martha",
            logo: "",
            wallpaper: "",
            imageFeatured: "",
            title: "Martha Bem-Estar",
            description: "Plataforma de gestão de produtos e vendas pensada para empreendedora pessoal para organizar e escalar seu negócio.",
            techs: ["E-commerce"],
            deployUrl: "",
            instaUrl: "",
            status: "Em Desenvolvimento"
        }
    ],
    en: [
        {
            slug: "educassist",
            logo: "",
            wallpaper: "",
            imageFeatured: "",
            title: "EducAssist",
            description: "Intelligent assistant for teachers that saves time on planning, activities, assessments and personalized lessons with AI support.",
            techs: ["Edtech", "AI", "MVP"],
            deployUrl: "https://www.educassist.com.br/",
            instaUrl: "https://www.instagram.com/educassistbr/",
            status: "Destaque"
        },
        {
            slug: "agronova",
            logo: "",
            wallpaper: "",
            imageFeatured: "",
            title: "AgroNova",
            description: "Precision agriculture platform with real-time monitoring and data analysis to maximize productivity.",
            techs: ["AgTech", "AI", "WhatsApp Business API"],
            deployUrl: "",
            instaUrl: "",
            status: "Em Desenvolvimento"
        },
        {
            slug:"martha",
            logo: "",
            wallpaper: "",
            imageFeatured: "",
            title: "Martha Bem-Estar",
            description: "Platform for managing products and sales designed for personal entrepreneurs to organize and scale their business.",
            techs: ["E-commerce"],
            deployUrl: "",
            instaUrl: "",
            status: "Em Desenvolvimento"
        }
    ]
}

export default productsByLanguage;

