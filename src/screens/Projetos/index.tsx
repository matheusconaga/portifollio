import { MoveRight } from "lucide-react"
import { useState } from "react";
import styled from "styled-components"
import { COLORS } from "../../constants/colors"
import Titulo from "../../components/basics/Titulo"
import AppButton from "../../components/basics/AppButton"
import Project from "../../components/layout/Project"
import flutter from "../../assets/tecs/flutter_blue.png";
import react from "../../assets/tecs/react_blue.png";

const images = import.meta.glob("../../assets/projects/*.{png,jpg,jpeg,svg}", {
    eager: true
});

type ImageModule = {
    default: string;
};

const projects: Record<string, string> = {};

Object.entries(images).forEach(([path, mod]) => {
    const module = mod as ImageModule;
    const name = path.split("/").pop()!.replace(/\.(png|jpg|jpeg|svg)$/, "");
    projects[name] = module.default;
});

type FiltroProjeto = "todos" | "mobile" | "web";

export default function Projetos() {

    const [filtroAtivo, setFiltroAtivo] = useState<FiltroProjeto>("todos");

    const projetos = [
        {
            tipo: "web" as const,
            imagem: projects.gestao,
            status: "concluido" as const,
            titulo: "Sistema de Gerenciamento de Patrimônio",
            descricao:
                "Sistema web de gerenciamento de patrimônio de uma empresa, disponível uma versão de demonstração.",
            tecnologia: {
                imagem: react,
                titulo: "React"
            },
            links: {
                deploy: () =>
                    window.open("https://gestao-patrimonial-pr3s.onrender.com/"),
                design: () =>
                    window.open(
                        "https://www.figma.com/design/qIqaB3RyFacn88lzAwvlDd/Gest%C3%A3o-de-Patrimonio"
                    )
            }
        },
        {
            tipo: "web" as const,
            imagem: projects.cine,
            status: "desenvolvimento" as const,
            titulo: "CineClub",
            descricao:
                "Sistema para visualizar filmes e séries, com funcionalidades de avaliação e lista de favoritos.",
            tecnologia: {
                imagem: react,
                titulo: "React"
            },
            links: {
                repo: () => window.open("https://github.com/matheusconaga/cine_club")
            }
        },
        {
            tipo: "mobile" as const,
            imagem: projects.deltacommerce,
            status: "refatorando" as const,
            titulo: "Delta Commerce",
            descricao:
                "Sistema de e-commerce em Flutter para postagem e compra de produtos via WhatsApp.",
            tecnologia: {
                imagem: flutter,
                titulo: "Flutter"
            },
            links: {
                repo: () =>
                    window.open("https://github.com/matheusconaga/delta_commerce"),
            }
        }
    ];

    const projetosFiltrados =
        filtroAtivo === "todos"
            ? projetos
            : projetos.filter((projeto) => projeto.tipo === filtroAtivo);


    return (

        <Content>
            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Projetos" color={COLORS.primary} />
            </TitleSec>

            <TopButtons>
                <AppButton
                    text="Todos"
                    func={() => setFiltroAtivo("todos")}
                    variant={filtroAtivo === "todos" ? "primary" : "secondary"}
                />

                <AppButton
                    text="Web"
                    func={() => setFiltroAtivo("web")}
                    variant={filtroAtivo === "web" ? "primary" : "secondary"}
                />

                <AppButton
                    text="Mobile"
                    func={() => setFiltroAtivo("mobile")}
                    variant={filtroAtivo === "mobile" ? "primary" : "secondary"}
                />

            </TopButtons>

            <Cards>
                {projetosFiltrados.map((projeto, index) => (
                    <Project key={index} {...projeto} />
                ))}
            </Cards>

        </Content>

    )

}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

`

const TitleSec = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`

const TopButtons = styled.div`

display: flex;
flex-direction: row;
padding-top: 1em;
gap: 1em;
padding-bottom: 1em;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;

`
const Cards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
    flex-wrap: wrap;
justify-content: center;
`
