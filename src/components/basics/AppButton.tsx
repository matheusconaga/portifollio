import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

type AppButtonProps = {
  text: string;
  func: () => void;
  icon?: ReactNode;
  variant?: Variant;
  disabled?: boolean;
};

export default function AppButton({
  text,
  func,
  icon,
  variant = "primary",
  disabled = false,
}: AppButtonProps) {
  return (
    <Botao onClick={func} $variant={variant} disabled={disabled}>
      {icon && icon}
      <span>{text}</span>
    </Botao>
  );
}

const Botao = styled.button<{ $variant: Variant }>`
  padding: 8px 20px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  ${({ $variant }) =>
    $variant === "primary" &&
    `
      background-color: ${COLORS.primary};
      color: ${COLORS.dark};
      border: none;

      svg {
        color: ${COLORS.dark};
        stroke: ${COLORS.dark};
      }
  `}

  ${({ $variant }) =>
    $variant === "secondary" &&
    `
      background-color: ${COLORS.dark};
      border: 2px solid ${COLORS.primary};
      color: ${COLORS.primary};

      svg {
        color: ${COLORS.primary};
        stroke: ${COLORS.primary};
      }
  `}

  &:hover:enabled {
    filter: brightness(0.85);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    background-color: ${COLORS.light};
    color: ${COLORS.dark};
    cursor: auto;
    opacity: 0.8;
  }

  svg {
    stroke-width: 2.3;
    width: 20px;
    height: 20px;
    transition: all 0.2s ease;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 7px 12px;
    gap: 6px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 8px;
    gap: 5px;

    svg {
      width: 17px;
      height: 17px;
    }
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 6px 8px;
    gap: 4px;

    svg {
      width: 15px;
      height: 15px;
    }

    span {
      display: none;
    }
  }
`;
