import styled from "styled-components";


export default function Navbar() {

  return (
    <nav className="flex flex-row items-center">
      <div className="flex flex-row items-center gap-8 mr-6">
        <MenuItem onClick={() => scrollTo()}>Início</MenuItem>
        <MenuItem onClick={() => scrollTo()}>Projetos</MenuItem>
        <MenuItem onClick={() => scrollTo()}>Tecnologias</MenuItem>
        <MenuItem onClick={() => scrollTo()}>Currículo</MenuItem>
      </div>
      <div>
        <Botao onClick={() => scrollTo()}>Contato</Botao>

      </div>
    </nav>
  )

}

const Botao = styled.button`
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

  &:hover:enabled {
    filter: brightness(0.85);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
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
  font-size: 12px;
  padding: 8px 25px;
  gap: 6px;

  max-width: 100%;
  white-space: normal;
  text-align: center;

  span {
    display: inline;
    line-height: 1.2;
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
}

`;

const MenuItem = styled.span`
  color: white;
  cursor: pointer;
  font-weight: 700;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;