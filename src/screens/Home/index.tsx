import styled from "styled-components"
import logo_matheus from "../../assets/logo_matheus.webp";
import eu from "../../assets/eu.webp";
import Titulo from "../../components/basics/Titulo";
import { COLORS } from "../../constants/colors";
import AppButton from "../../components/basics/AppButton";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {

    return (

        <Conteudo>

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
                    fontSize="1.4em"
                />
                <Buttons>
                    <AppButton func={() => { }} text="Ver Projetos" icon={<ArrowRight size={30} />} />
                    <AppButton func={() => { }} text="Download CV" icon={<Download size={30} />} variant="secondary" />
                </Buttons>
            </LeftItem>

            <RightItem>
                <Foto src={eu} alt="Logo Matheus" />
            </RightItem>

        </Conteudo>


    )

}

const Conteudo = styled.div`

    display: flex;
    flex-direction: row;
`;

const Buttons = styled.div`

    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-top: 1em;
`;

const ConteudoLogo = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
`;


const TextoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 130px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const Foto = styled.img`
position: absolute;
right: 5%;
top: 15%;
  width: 45em;
  height: auto;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 130px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const LeftItem = styled.div`

    display: flex;
    width: 65%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const RightItem = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    `;