import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import type { ReactNode } from "react";

type Prop = {
    children: ReactNode;
    width?: string;
    height?: string;
    align?: string;
    gap?: string;
};

export default function Card({ children, width, height, align = "center", gap = "12px" }: Prop) {
    return (
        <Container width={width} height={height} align={align} gap={gap}>
            {children}
        </Container>
    );
}

const Container = styled.div<{ width?: string; height?: string; align?: string; gap?: string }>`
display: flex;
flex-direction: column;
align-items: ${({ align }) => align};
justify-content: ${({ align }) => align};
gap:  ${({ gap }) => gap};
    background-color: ${COLORS.marine_blue};
    width: ${({ width }) => width || "30%"};
    height: ${({ height }) => height || "auto"};
    padding: 12px 24px;
    border-radius: 10px;
    border: solid 4px ${COLORS.primary};
    box-shadow: 8px 8px 4px ${COLORS.light_shadow};
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        width: ${({ width }) => (width ? width : "90%")};
        height: ${({ height }) => (height || "auto")};
        padding: 18px;
    }
`;
