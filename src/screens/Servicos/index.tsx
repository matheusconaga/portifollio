import styled from "styled-components"
import Titulo from "../../components/basics/Titulo"
import { HandCoins, MoveRight } from "lucide-react"
import { COLORS } from "../../constants/colors"
import Card from "../../components/basics/Card"
import AppButton from "../../components/basics/AppButton"

const images = import.meta.glob("../../assets/serv/*.{png,jpg,jpeg,svg}", {
    eager: true
});

type ImageModule = {
    default: string;
};

const serv: Record<string, string> = {};

Object.entries(images).forEach(([path, mod]) => {
    const module = mod as ImageModule;
    const name = path.split("/").pop()!.replace(/\.(png|jpg|jpeg|svg)$/, "");
    serv[name] = module.default;
});

export default function Servicos() {

    const handleOrcamentoWhatsapp = () => {
        const phone = "5586981451876";
        const message =
            `Olá Matheus!
Gostaria de fazer um orçamento para o desenvolvimento de um sistema.`;


        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };


    const servicosItems = [
        {
            key: "website",
            imagem: serv.web,
            titulo: "Desenvolvimento de Website",
            hoverTitle: "Website",
            descricao:
                "Sites institucionais, responsivos e otimizados para SEO."
        },
        {
            key: "landing",
            imagem: serv.landing,
            titulo: "Landing Pages",
            hoverTitle: "Landing Pages",
            descricao:
                "Páginas estratégicas para conversão, ideais para campanhas, produtos e captação de leads."
        },
        {
            key: "frontend",
            imagem: serv.frontend,
            titulo: "Desenvolvimento Frontend (React)",
            hoverTitle: "Frontend",
            descricao:
                "Interfaces modernas, performáticas e escaláveis utilizando React, com foco em UX e boas práticas."
        },
        {
            key: "mobile",
            imagem: serv.mobile,
            titulo: "Desenvolvimento Mobile (Flutter)",
            hoverTitle: "Mobile",
            descricao:
                "Aplicativos móveis multiplataforma com Flutter, entregando desempenho, design e usabilidade."
        },
        {
            key: "design",
            imagem: serv.design,
            titulo: "Design de Sistemas e Protótipos",
            hoverTitle: "Design de Sistemas",
            descricao:
                "Criação de interfaces, fluxos e protótipos focados em usabilidade, clareza e experiência do usuário."
        },
        {
            key: "api",
            imagem: serv.api,
            titulo: "Integração com APIs e Backend",
            hoverTitle: "APIs & Backend",
            descricao:
                "Integração de sistemas com APIs seguras e escaláveis, garantindo comunicação eficiente entre aplicações."
        },
        {
            key: "full",
            imagem: serv.full,
            titulo: "Desenvolvimento Fullstack",
            hoverTitle: "Fullstack",
            descricao:
                "Desenvolvimento completo do sistema, do frontend ao backend, com soluções integradas e funcionais."
        },
        {
            key: "auto",
            imagem: serv.auto,
            titulo: "Automação de Processos",
            hoverTitle: "Automação",
            descricao:
                "Automação de tarefas e processos para reduzir custos, aumentar produtividade e eliminar retrabalho."
        }
    ];




    return (

        <Content>

            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Serviços" color={COLORS.primary} />
            </TitleSec>


            <Gridcards>
                {servicosItems.map((item) => (
                    <Card
                        key={item.key}
                        variant="mini"
                        hoverContent={
                            <>
                                <Titulo
                                    title={item.hoverTitle}
                                    color={COLORS.light}
                                    fontSize="1em"
                                    textAlign="center"
                                />
                                <p style={{ color: "#fff", fontSize: "0.9em" }}>
                                    {item.descricao}
                                </p>
                            </>
                        }
                    >
                        <Imagem src={item.imagem} />
                        <Titulo
                            title={item.titulo}
                            textAlign="center"
                            fontSize="1em"
                            fontWeight="600"
                        />
                    </Card>
                ))}
            </Gridcards>

            <InfoBottom>
                <AppButton icon={<HandCoins size={30} />} text="Fazer Orçamento" func={handleOrcamentoWhatsapp} />
            </InfoBottom>


        </Content>

    )

}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;

`

const TitleSec = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`

const Gridcards = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em; 
  padding: 30px;
  justify-items: center;

   @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Imagem = styled.img`
  width: 50px;
  height: 50px;
`;

const InfoBottom = styled.div`

display: flex;
flex-direction: column;
gap: 1em;
margin: 0 auto;
padding-top: 2em;

 animation: bounce 3s infinite ease-in-out;

    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(10px); opacity: 0.2; }
        100% { transform: translateY(0); }
    }

    &:hover{
        animation: none;
        animation-play-state: paused;

    }

`