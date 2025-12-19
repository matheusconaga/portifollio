import { LaptopMinimal, MoveRight, Palette, Smartphone } from "lucide-react";
import Titulo from "../../components/basics/Titulo";
import { COLORS } from "../../constants/colors";
import styled from "styled-components";
import Card from "../../components/basics/Card";
import Text from "../../components/basics/Text";

export default function Sobre() {

    return (

        <Content>
            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Sobre Mim" color={COLORS.primary} />
            </TitleSec>

            <Wrapper>
                <InfoContainer>
                    <Infos>
                        <IconTitle>
                            <LaptopMinimal size={30} color="white" />
                            <Titulo title="Desenvolvimento de Website" fontSize="18px" fontWeight="600" />
                        </IconTitle>
                        <IconTitle>
                            <Smartphone size={30} color="white" />
                            <Titulo title="Desenvolvimento de Aplicativos móveis" fontSize="18px" fontWeight="600" />
                        </IconTitle>
                        <IconTitle>
                            <Palette size={30} color="white" />
                            <Titulo title="Design de Sistemas" fontSize="18px" fontWeight="600" />
                        </IconTitle>
                    </Infos>
                </InfoContainer>

                <InfoCards>
                    <Card>
                        <Text text="Sou desenvolvedor frontend web e mobile, com foco na criação de interfaces modernas, performáticas e orientadas à experiência do usuário. Possuo experiência em Clean Architecture, APIs RESTful, Firebase, Git e metodologias ágeis. Atuei em projetos de finanças e jogos educacionais, desenvolvendo componentes reutilizáveis que otimizaram significativamente o processo de entrega." align="left"/>
                    </Card>

                    <CardsInfo>
                        <Card variant="micro">
                            <Titulo title="2 +" color={COLORS.primary} fontWeight="bolder" />
                            <Text align="left" text="Anos de Experiência" />
                        </Card>
                        <Card variant="micro">
                            <Titulo title="5 +" color={COLORS.primary} />
                            <Text align="left" text="Clientes Satisfeitos" />
                        </Card>
                        <Card variant="micro">
                            <Titulo title="40%" color={COLORS.primary} />
                            <Text align="left" text="Mais Eficiência" />
                        </Card>
                    </CardsInfo>
                </InfoCards>
            </Wrapper>

        </Content>

    )

}

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

`;

const Content = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1em;

`

const TitleSec = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`
const CardsInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;


const Infos = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-left: 2.2em;

  &:before {
    content: "";
    position: absolute;
    left: 15px;
    top: 15px;
    width: 3px;
    height: 100%;
    background: ${COLORS.primary};
    border-radius: 10px;
  }

  @media (max-width: 1000px) {
    padding-left: 2.2em;
    &:before {
      left: 15px;
      transform: none;
    }
  }

  @media (max-width: 480px) {
    gap: 1.5em;

    &:before {
      left: 15px;
      height: 100%;
    }
  }
`;


const IconTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: -25px;
    width: 12px;
    height: 12px;
    background: ${COLORS.primary};
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    gap: 10px;

    &:before {
      left: -25px;
      transform: none;
    }
  }
`;

const InfoCards = styled.div`
display: flex;
    flex-direction: column;
    gap: 1.4em;

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3em;
    margin-top: 2em;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;
