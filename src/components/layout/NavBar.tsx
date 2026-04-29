import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import logo_matheus from "../../assets/logo_matheus.webp";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";


export default function NavBar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <Background>
      <Itens>
        <LogoContainer onClick={() => scrollTo("home")}>
          <Logo src={logo_matheus} alt="Logo Matheus" />
          <LogoTitle>Matheus Lula</LogoTitle>
        </LogoContainer>

        <Menu>
          <MenuItem onClick={() => scrollTo("home")}>Início</MenuItem>
          <MenuItem onClick={() => scrollTo("sobre")}>Sobre</MenuItem>
          <MenuItem onClick={() => scrollTo("tecnologias")}>Tecnologias</MenuItem>
          <MenuItem onClick={() => scrollTo("projetos")}>Projetos</MenuItem>
          <MenuItem onClick={() => scrollTo("servicos")}>Serviços</MenuItem>
          <MenuItem onClick={() => scrollTo("curriculo")}>Currículo</MenuItem>
          <MenuItem onClick={() => scrollTo("contato")}>Contato</MenuItem>
        </Menu>

        <MenuButton onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <MenuIcon size={28} />}
        </MenuButton>
      </Itens>

      <MenuMobile open={open}>
        <MenuItem onClick={() => scrollTo("home")}>Início</MenuItem>
        <MenuItem onClick={() => scrollTo("sobre")}>Sobre</MenuItem>
        <MenuItem onClick={() => scrollTo("tecnologias")}>Tecnologias</MenuItem>
        <MenuItem onClick={() => scrollTo("projetos")}>Projetos</MenuItem>
        <MenuItem onClick={() => scrollTo("servicos")}>Serviços</MenuItem>
        <MenuItem onClick={() => scrollTo("curriculo")}>Currículo</MenuItem>
        <MenuItem onClick={() => scrollTo("contato")}>Contato</MenuItem>
      </MenuMobile>
    </Background>
  );
}



const Background = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${COLORS.marine_blue};
  padding: 0.8em 0;
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
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 60px;

  @media (max-width: 480px) {
    width: 50px;
  }
`;

const LogoTitle = styled.h2`
  color: white;
  font-size: 1.3rem;
  font-weight: bolder;
  font-family: "Poppins", sans-serif;
  margin-bottom: 6px;
`;


const Menu = styled.nav`
  display: flex;
  gap: 1.5em;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1100; 

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;


const MenuMobile = styled.nav<{ open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    gap: 1.2em;
    padding: 1.5em 0;
    background-color: ${COLORS.marine_blue};
    z-index: 1000;
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
    background: ${COLORS.primary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

