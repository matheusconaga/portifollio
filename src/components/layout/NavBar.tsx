import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import logo_matheus from "../../assets/logo_matheus.webp";

export default function NavBar() {
    return (
        <Background>
            <Itens>
                <LogoContainer>
                    <Logo src={logo_matheus} alt="Logo Matheus" />
                    <LogoTitle>Matheus Lula</LogoTitle>
                </LogoContainer>
            </Itens>
        </Background>
    );
}

const Background = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${COLORS.marine_blue};
  color: black;
  padding: 0.8em 0;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: none;

`;

const LogoContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: end;


`;


const Itens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8em;
  }
`;

const LogoTitle = styled.h2`
    color: white;
    font-size: 1.3rem;
    font-weight: bolder;
     font-family: "Poppins", sans-serif;
     margin-bottom: 8px;

`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;