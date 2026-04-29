import styled from "styled-components"
import Titulo from "./Titulo"

type Prop = {
  titulo: string;
  imagem: string;
  position?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  textColor?: string;
  variant?: "default" | "badge";

}

export default function CardTec({
  titulo,
  imagem,
  position = "static",
  bgColor = "transparent",
  width = "70%",
  height = "auto",
  fontSize = "1.15em",
  textColor,
  variant = "default",
}: Prop) {

  return (
    <StyleContainer
      $position={position}
      bgColor={bgColor}
      width={width}
      height={height}
      $variant={variant}
    >
      <Imagem src={imagem} bgColor={bgColor} />
      <Titulo title={titulo} fontSize={fontSize} fontWeight="600" color={textColor} />
    </StyleContainer>
  );

}

const StyleContainer = styled.div<{
  $position: string;
  bgColor: string;
  width: string;
  height: string;
  $variant: "default" | "badge";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  position: ${({ $position }) => $position};
  left: 12px;
  top: 12px;

  padding: ${({ $variant }) => ($variant === "badge" ? "4px 8px" : "6px")};

  width: ${({ $variant, width }) =>
    $variant === "badge" ? "auto" : width};

  max-width: ${({ $variant }) =>
    $variant === "badge" ? "90%" : "unset"};

  background-color: ${({ bgColor }) => bgColor};
  border-radius: 6px;
  border: ${({ bgColor }) =>
    bgColor === "transparent" ? "1px solid white" : "none"};

  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: ${({ $variant }) => ($variant === "badge" ? "0.85em" : "1em")};
  }
`;


const Imagem = styled.img<{ bgColor: string }>`
  width: ${({ bgColor }) =>
    bgColor === "transparent" ? "35px" : "23px"};
  height: ${({ bgColor }) =>
    bgColor === "transparent" ? "35px" : "23px"};

  @media (max-width: 600px) {
    width: ${({ bgColor }) =>
    bgColor === "transparent" ? "26px" : "20px"};
    height: ${({ bgColor }) =>
    bgColor === "transparent" ? "26px" : "20px"};
  }
`;

