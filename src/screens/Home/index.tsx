import styled from "styled-components"
import logo_matheus from "../../assets/logo_matheus.webp";
import eu from "../../assets/eu.webp";
import Titulo from "../../components/basics/Titulo";
import { COLORS } from "../../constants/colors";
import AppButton from "../../components/basics/AppButton";
import { ArrowRight, Download, Mouse } from "lucide-react";

export default function Home() {
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

                    <Titulo
                        title="Transformo ideias em aplicações modernas que combinam usabilidade, desempenho e experiências marcantes."
                        fontWeight="normal"
                        textAlign="center"
                        fontSize="1.2em"
                    />

                    <Buttons>
                        <AppButton func={() => { }} text="Ver Projetos" icon={<ArrowRight size={30} />} />
                        <AppButton func={() => { }} text="Download CV" icon={<Download size={30} />} variant="secondary" />
                    </Buttons>
                </LeftItem>

                <RightItem>
                    <Foto src={eu} alt="Logo Matheus" />
                </RightItem>
            </Itens>

            <MouseDiv>
                <MouseIcon size={30}/>
            </MouseDiv>
        </Conteudo>
    )
}


const Conteudo = styled.div`
    margin: 0 auto;
    padding: 2em 1em;
`;

const Itens = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 2em;
    }
`;

const MouseDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8em;
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
`;

const Logo = styled.img`
  width: 140px;
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    width: 140px;
  }

  @media (max-width: 480px) {
    width: 110px;
  }
`;

const Foto = styled.img`
  width: 32em;
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    width: 22em;
  }

  @media (max-width: 480px) {
    width: 15em;
  }
`;

const LeftItem = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;

    @media (max-width: 900px) {
        width: 100%;
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
