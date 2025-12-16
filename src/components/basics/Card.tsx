import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import type { ReactNode } from "react";

type Prop = {
  children: ReactNode;
  hoverContent?: ReactNode;
  width?: string;
  height?: string;
  align?: string;
  gap?: string;
};

export default function Card({
  children,
  hoverContent,
  width,
  height,
  align,
  gap = "12px",
}: Prop) {
  return (
    <Container
      width={width}
      height={height}
      align={align}
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
  $hasHover?: boolean;
}>`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${COLORS.marine_blue};
  width: ${({ width }) => width || "100%"};
max-width: 600px;
min-width: 280px;
  height: ${({ height }) => height || "auto"};
  padding: 12px 24px;

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

  @media (max-width: 768px) {
  width: ${({ width }) => width || "95%"};
  padding: 16px;
}

@media (max-width: 480px) {
  padding: 14px;
  border-width: 3px;
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
