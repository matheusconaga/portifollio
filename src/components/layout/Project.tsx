import styled from "styled-components";
import Card from "../basics/Card";
import Titulo from "../basics/Titulo";
import Text from "../basics/Text";
import AppButton from "../basics/AppButton";
import CardTec from "../basics/CardTec";
import { Code2, Palette, Rocket } from "lucide-react";
import { COLORS } from "../../constants/colors";
import type { JSX } from "react";

type ProjectStatus = "desenvolvimento" | "concluido" | "refatorando";

interface ProjectLinks {
    deploy?: () => void;
    repo?: () => void;
    design?: () => void;
}

interface ProjectCardProps {
    imagem: string;
    titulo: string;
    descricao: string;

    tecnologia?: {
        imagem: string;
        titulo: string;
    };

    links?: ProjectLinks;

    status?: ProjectStatus;
}

export default function Project({
    imagem,
    titulo,
    descricao,
    tecnologia,
    links,
    status,
}: ProjectCardProps) {


    const STATUS_CONFIG: Record<
        ProjectStatus,
        { label: string; color: string, borderColor: string }
    > = {
        desenvolvimento: {
            label: "Em desenvolvimento",
            color: "#facc15cf",
            borderColor: "#9f8007"
        },
        concluido: {
            label: "Concluído",
            color: "#22c55edf",
            borderColor: "#05732e"
        },
        refatorando: {
            label: "Refatorando",
            color: "#3b83f6d4",
            borderColor: "#0b439d"
        }
    };

    const buttons = [
        links?.deploy && {
            icon: <Rocket size={20} />,
            text: "Deploy",
            action: links.deploy
        },
        links?.repo && {
            icon: <Code2 size={20} />,
            text: "Repositório",
            action: links.repo
        },
        links?.design && {
            icon: <Palette size={20} />,
            text: "Design",
            action: links.design
        }
    ].filter(Boolean) as {
        icon: JSX.Element;
        text: string;
        action: () => void;
    }[];


    return (
        <StyledCard variant="compact">
            <ContainerImagem>
                {status && (
                    <StatusTag color={STATUS_CONFIG[status].color} borderColor={STATUS_CONFIG[status].borderColor}>
                        {STATUS_CONFIG[status].label}
                    </StatusTag>
                )}
                {tecnologia && (
                    <CardTec
                        variant="badge"
                        imagem={tecnologia.imagem}
                        titulo={tecnologia.titulo}
                        position="absolute"
                        bgColor={COLORS.tecImage_bg}
                        fontSize="1em"
                        textColor={COLORS.marine_blue}
                    />
                )}

                <Imagem src={imagem} />
            </ContainerImagem>

            <Titulo title={titulo} fontSize="1.2em" textAlign="center" />
            <Text text={descricao} />

            <BottomButtons>
                {buttons.map((btn, index) => (
                    <AppButton
                        key={btn.text}
                        icon={btn.icon}
                        text={btn.text}
                        func={btn.action}
                        variant={index % 2 === 0 ? "primary" : "secondary"}
                    />
                ))}
            </BottomButtons>

        </StyledCard>
    );
}

const StyledCard = styled(Card)`
  min-height: 430px;
    
  display: flex;
  flex-direction: column;
`;

const ContainerImagem = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  overflow: hidden;
  border-radius: 10px;
`;

const Imagem = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
`;

const BottomButtons = styled.div`
  display: flex;
  gap: 0.8em;
  margin-top: auto;
  flex-wrap: wrap;
  justify-content: center;
`;


const StatusTag = styled.span<{ color: string, borderColor: string, }>`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1.5px solid ${({ borderColor }) => borderColor};

  background-color: ${({ color }) => color};
  color: #0f172a;

  font-size: 0.75em;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 10px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 2;
`;
