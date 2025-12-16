import { COLORS } from "../../constants/colors";
import styled from "styled-components";
import logo_matheus from "../../assets/logo_matheus.webp";
import CircleLink from "../basics/CircleLink";

export default function Footer() {
  return (
    <Background>
      <LinksContainer>
        <CircleLink type="github" />
        <CircleLink type="linkedin" />
        <CircleLink type="email" />
      </LinksContainer>
      <Direitos>
        Portifólio pessoal desenvolvido em React.
      </Direitos>
      <LogoContainer>
        <Logo src={logo_matheus} alt="Logo Matheus" />
        <LogoTitle>Matheus Lula</LogoTitle>
      </LogoContainer>
      <Direitos>
        Copyright © 2025 Matheus Lula. Todos os direitos reservados.
      </Direitos>
    </Background>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: 480px) {
    align-items: center;
    gap: 0.4em;
  }
`;


const LinksContainer = styled.div`
  display: flex;
  gap: 1em;

  @media (max-width: 480px) {
    gap: 0.6em;
  }
`;


const LogoTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: bolder;
  font-family: "Poppins", sans-serif;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }
`;


const Background = styled.footer`
  background-color: ${COLORS.dark_blue};
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8em;
  margin-top: 5em;
  padding: 1.2em;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 3em;
  }

  @media (max-width: 480px) {
    padding: 1em;
    gap: 0.6em;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
  }
`;


const Direitos = styled.h4`
  font-size: 0.9rem;
  max-width: 90%;
  line-height: 1.4;
  color: ${COLORS.light};

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
