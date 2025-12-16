import styled from "styled-components"
import logo_matheus from "../../assets/logo_matheus.webp";
import euDesktop from "../../assets/eu.webp";
import euMobile from "../../assets/eu_mobile.png";
import Titulo from "../../components/basics/Titulo";
import { COLORS } from "../../constants/colors";
import AppButton from "../../components/basics/AppButton";
import { ArrowRight, Download, Mouse } from "lucide-react"
import cvPdf from "../../assets/curriculo/CV_Matheus_Lula.pdf";
import Text from "../../components/basics/Text";
;

export default function Home() {

    const handleDownloadCV = () => {
        window.open(cvPdf, "_blank");
    };

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <Conteudo>
            <Itens>
                <LeftItem>
                    <ConteudoLogo>
                        <Logo src={logo_matheus} alt="Logo Matheus" />
                        <TextoContainer>
                            <Titulo title="Olá, eu sou o" />
                            <Titulo title="Matheus Lula" color={COLORS.primary} fontSize="2.3em" />
                            <Titulo title="Desenvolvedor Frontend Web & Mobile" />
                        </TextoContainer>
                    </ConteudoLogo>

                    <Text
                        text="Transformo ideias em aplicações modernas que combinam usabilidade, desempenho e experiências marcantes."
                        align="left"
                    />
                    <Buttons>
                        <AppButton func={() => scrollTo("projetos")} text="Ver Projetos" icon={<ArrowRight size={30} />} />
                        <AppButton func={handleDownloadCV} text="Download CV" icon={<Download size={30} />} variant="secondary" />
                    </Buttons>
                </LeftItem>

                <RightItem>
                    <Picture>
                        <source srcSet={euMobile} media="(max-width: 899px)" />
                        <source srcSet={euDesktop} media="(min-width: 900px)" />
                        <Foto src={euDesktop} alt="Foto Matheus Lula" />
                    </Picture>
                </RightItem>
            </Itens>

            <MouseDiv>
                <MouseIcon size={30} />
            </MouseDiv>
        </Conteudo>
    )
}


const Conteudo = styled.div`
  margin: 0 auto;
  padding: 1em;

  @media (max-width: 480px) {
    padding: 1.5em 1em 2em;
  }
`;

const Picture = styled.picture`
  display: flex;
  justify-content: center;
  width: 100%;
`;


const Itens = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 2.5em;
  }

  @media (max-width: 480px) {
    gap: 2em;
  }
`;


const MouseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8em;

  @media (max-width: 480px) {
    display: none;
  }
`;


const MouseIcon = styled(Mouse)`
    color: ${COLORS.primary};
    animation: bounce 2s infinite ease-in-out;

    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(10px); opacity: 0.7; }
        100% { transform: translateY(0); }
    }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin-top: 1em;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    gap: 0.8em;

    button {
      width: 100%;
    }
  }
`;


const ConteudoLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;

    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
    }
`;

const TextoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;

  @media (max-width: 480px) {
    gap: 0.4em;
  }
`;


const Logo = styled.img`
  width: 140px;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    width: 100px;
  }
`;


const Foto = styled.img`
  width: 34em;
  max-width: 520px;
  padding-right: 2.5em;
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    max-width: 320px;
    padding-right: 0;
  }

  @media (max-width: 480px) {
    max-width: 180px;
  }
`;



const LeftItem = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    gap: 1em;
  }
`;


const RightItem = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;

    @media (max-width: 900px) {
        width: 100%;
    }
`;
