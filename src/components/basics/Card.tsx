import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import type { ReactNode } from "react";

type CardVariant = "default" | "compact" | "mini" | "micro";

type Prop = {
  children: ReactNode;
  hoverContent?: ReactNode;
  width?: string;
  height?: string;
  align?: string;
  gap?: string;
  variant?: CardVariant;

};



export default function Card({
  children,
  hoverContent,
  width,
  height,
  align,
  gap = "12px",
  variant = "default",
}: Prop) {
  return (
    <Container
      width={width}
      height={height}
      align={align}
      variant={variant}
      $hasHover={!!hoverContent}
    >

      <Content className="card-content" gap={gap} align={align}>
        {children}
      </Content>

      {hoverContent && (
        <Hover className="card-hover">
          {hoverContent}
        </Hover>
      )}
    </Container>
  );
}


const Container = styled.div<{
  width?: string;
  height?: string;
  align?: string;
  variant?: "default" | "compact" | "mini" | "micro";
  $hasHover?: boolean;
}>`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  

  background-color: ${COLORS.marine_blue};

   ${({ variant }) => {
    switch (variant) {
      case "mini":
        return `
          width: 180px;
          height: 180px;
          padding: 12px;
          justify-content: center;
        `;
      case "micro":
        return `
          width: 130px;
          height: 130px;
          padding: 12px;
          justify-content: center;

        `;
      case "compact":
        return `
          width: 370px;
          min-height: 400px;
          padding: 20px 16px;
        `;
      default:
        return `
          width: 100%;
          max-width: 600px;
          padding: 12px 24px;
        `;
    }
  }}

  @media (max-width: 800px) {
  ${({ variant }) => {
    switch (variant) {
      case "compact":
        return `
          width: 100%;
          min-height: auto;
          padding: 12px;
        `;
      case "micro":
        return `
           width: 100%;
          height: auto;
          padding: 16px;
        `;
      default:
        return `
          width: 100%;
          max-width: 100%;
          padding: 12px 16px;
        `;
    }
  }}
}

@media (max-width: 480px) {
  width: 100%;
  max-width: 100%;
  min-width: unset;
  margin: 0 auto;
}


  border-radius: 10px;
  border: 4px solid ${COLORS.primary};
  box-shadow: 8px 8px 4px ${COLORS.light_shadow};

  transition: transform 0.3s ease;

  ${({ $hasHover }) =>
    $hasHover &&
    `
    &:hover {
      transform: translateY(-4px);
    }

    &:hover .card-hover {
      opacity: 1;
      pointer-events: all;
    }

    &:hover .card-content {
      opacity: 0.65;
    }
  `}

  @media (max-width: 480px) {
    width: 100%;
    min-width: unset;
    max-width: 100%;
  }
`;


const Content = styled.div<{ gap?: string; align?: string; }>`
  display: flex;
  flex-direction: column;
    align-items: ${({ align }) =>
    !align || align === "center" ? "center" : "normal"};
  gap: ${({ gap }) => gap || "12px"};

  transition: opacity 0.3s ease;
`;


const Hover = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 16px;
  text-align: center;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;
