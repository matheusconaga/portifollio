import { useState } from "react";
import styled from "styled-components"
import { COLORS } from "../../constants/colors"
import { MoveRight } from "lucide-react"
import Titulo from "../../components/basics/Titulo"
import AppButton from "../../components/basics/AppButton"
import CurriculoCard from "../../components/layout/CurriculoCard"


const images = import.meta.glob("../../assets/curriculo/*.{png,jpg,jpeg,svg}", {
    eager: true
});

type ImageModule = {
    default: string;
};

const curriculo: Record<string, string> = {};

Object.entries(images).forEach(([path, mod]) => {
    const module = mod as ImageModule;
    const name = path.split("/").pop()!.replace(/\.(png|jpg|jpeg|svg)$/, "");
    curriculo[name] = module.default;
});


type AbaCurriculo = "experiencia" | "certificacoes" | "formacao";


export default function Curriculo() {
    const [abaAtiva, setAbaAtiva] = useState<AbaCurriculo>("experiencia");

    const formacaoItems = [
        {
            periodo: "Mar 2022 - Fev 2025",
            imagem: curriculo.ifpi,
            titulo: "Curso Superior em Tecnologia (CST)",
            subtitulo1: "Análise e Desenvolvimento de Sistemas",
            subtitulo2: "IFPI - Instituto Federal do Piauí • Parnaíba-PI",
            text: "No curso aprendi fundamentos de programação, engenharia de software, programação web, programação móvel, prototipação, dentre outras coisas importantes para a formação de desenvolvedor."
        },
        {
            periodo: "Mar 2018 - Abr 2021",
            imagem: curriculo.ifma,
            titulo: "Curso Técnico",
            subtitulo1: "Administração",
            subtitulo2: "IFMA - Instituto Federal do Maranhão • Araioses-MA",
            text: "No curso técnico aprendi sobre gestão, finanças, marketing, recursos humanos, logística, empreendedorismo, dentre outras coisas importantes para a formação profissional.",
        }
    ];

    const certificacoesItems = [
        {
            periodo: "Concluído em Jul 2025",
            imagem: curriculo.fiap,
            titulo: "Curso",
            subtitulo1: "User Experience • 60h",
            subtitulo2: "FIAP",
            text: "No curso aprendi sobre os princípios de UX, pesquisa com usuários, design centrado no usuário, prototipação, testes de usabilidade, dentre outras coisas importantes para a formação de um bom designer de experiência do usuário.",
            transparent: true
        },
        {
            periodo: "Concluído em Fev 2025",
            imagem: curriculo.udemy,
            titulo: "Curso",
            subtitulo1: "JavaScript e Typescript • 146h",
            subtitulo2: "Udemy",
            text: "Eu aprendi coisas sobre Javascript e typescript, React, construção de APIs rest, Next...",
            transparent: true
        },
        {
            periodo: "Concluído em Dez 2024",
            imagem: curriculo.udemy,
            titulo: "Curso",
            subtitulo1: "React Native • 45h",
            subtitulo2: "Udemy",
            text: "Aprendi fundamentos do React native expo e CLI, para desenvolvimento móvel",
            transparent: true
        },
        {
            periodo: "Concluído em Nov 2024",
            imagem: curriculo.udemy,
            titulo: "Curso",
            subtitulo1: "Flutter • 67.5h",
            subtitulo2: "Udemy",
            text: "Fundamentos de Flutter, postagem de aplicativo na Playstore, Responsividade, etc",
            transparent: true
        }

    ]

    const experienciaItems = [

        {
            periodo: "Ago 2024 - atual",
            imagem: curriculo.rgm,
            titulo: " Desenvolvedor Mobile (React Native)",
            subtitulo1: "Meio período",
            subtitulo2: "RGM Tecnologia • Parnaíba-PI",
            text: "Atuo no desenvolvimento de aplicativos móveis utilizando React Native com Expo, focando na criação de soluções escaláveis e eficientes. Participo ativamente de todo o ciclo de desenvolvimento, desde a análise de requisitos até a entrega final.",
            transparent: true
        },
        {
            periodo: "Out 2025 - Dez 2025",
            imagem: curriculo.centro,
            titulo: "Desenvolvedor React",
            subtitulo1: "Freelancer",
            subtitulo2: "Centro Espírita Caridade e Fé • Parnaíba-PI",
            text: "Atuei no desenvolvimento de uma plataforma para gerenciamento de patrimônios, com dashboards, cards informativos, adição de patrimônios, edição, gerador de etiquetas automática, leitura de QrCode, download de patrimônios em planilha Excel e adição automática de patrimônios através de planilha excel.",
        },

    ]

    const dadosAtuais =
        abaAtiva === "experiencia"
            ? experienciaItems
            : abaAtiva === "formacao"
                ? formacaoItems
                : certificacoesItems;

    return (

        <Content>
            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Currículo" color={COLORS.primary} />
            </TitleSec>

            <TopButtons>
                <AppButton
                    text="Experiência Profissional"
                    func={() => setAbaAtiva("experiencia")}
                    variant={abaAtiva === "experiencia" ? "primary" : "secondary"}
                />

                <AppButton
                    text="Formação"
                    func={() => setAbaAtiva("formacao")}
                    variant={abaAtiva === "formacao" ? "primary" : "secondary"}
                />

                <AppButton
                    text="Certificações"
                    func={() => setAbaAtiva("certificacoes")}
                    variant={abaAtiva === "certificacoes" ? "primary" : "secondary"}
                />

            </TopButtons>

            <AnimatedTimeline key={abaAtiva}>
                <Timeline>
                    {dadosAtuais.map((item, index) => (
                        <TimelineItem
                            key={index}
                            side={index % 2 === 0 ? "right" : "left"}
                        >
                            <TimelineDot />
                            <CurriculoCard {...item} />
                        </TimelineItem>
                    ))}
                </Timeline>
            </AnimatedTimeline>



        </Content>

    )

}


const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const TitleSec = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`;

const TopButtons = styled.div`
display: flex;
flex-direction: row;
gap: 1em;
padding-bottom: 1em;
margin: 0 auto;
`;


const Timeline = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3em;
    padding: 2em 0;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 100%;
        background: ${COLORS.primary};
        border-radius: 10px;
    }

    @media (max-width: 900px) {
        &:before {
            left: 20px;
            transform: none;
        }
    }
`;

const TimelineItem = styled.div<{ side: "left" | "right" }>`
    position: relative;
    display: flex;
    justify-content: ${({ side }) =>
        side === "left" ? "flex-end" : "flex-start"};
    width: 100%;

    @media (max-width: 900px) {
        justify-content: flex-start;
        padding-left: 40px;
    }
`;


const TimelineDot = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    background: ${COLORS.primary};
    border-radius: 50%;
    z-index: 2;

    @media (max-width: 900px) {
        left: 20px;
        transform: none;
    }
`;

const AnimatedTimeline = styled.div`
    animation: fadeSlide 1.3s ease;

    @keyframes fadeSlide {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
