import styled from "styled-components"
import Titulo from "../../components/basics/Titulo"
import { HandCoins, MoveRight } from "lucide-react"
import { COLORS } from "../../constants/colors"
import Card from "../../components/basics/Card"
import AppButton from "../../components/basics/AppButton"

const images = import.meta.glob("../../assets/serv/*.{png,jpg,jpeg,svg}", {
    eager: true
});

type ImageModule = {
    default: string;
};

const serv: Record<string, string> = {};

Object.entries(images).forEach(([path, mod]) => {
    const module = mod as ImageModule;
    const name = path.split("/").pop()!.replace(/\.(png|jpg|jpeg|svg)$/, "");
    serv[name] = module.default;
});

export default function Servicos() {

    return (

        <Content>

            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Serviços" color={COLORS.primary} />
            </TitleSec>

            <Gridcards>

                <Card width="180px" height="180px">
                    <Imagem src={serv.web} />
                    <Titulo title="Desenvolvimento de Website" textAlign="center" fontSize="1em" fontWeight="600" />
                </Card>

                <Card width="180px" height="180px">
                    <Imagem src={serv.landing} />
                    <Titulo title="Landing Pages" textAlign="center" fontSize="1em" fontWeight="600" />
                </Card>
                <Card width="180px" height="180px">
                    <Imagem src={serv.frontend} />
                    <Titulo title="Desenvolvimento Frontend (React)" textAlign="center" fontSize="1em" fontWeight="600" />
                </Card>
                <Card width="180px" height="180px">
                    <Imagem src={serv.mobile} />
                    <Titulo title="Desenvolvimento Mobile (Flutter)" textAlign="center" fontSize="1em" fontWeight="600" />
                </Card>
                <Card width="180px" height="180px">
                    <Imagem src={serv.design} />
                    <Titulo title="Design de Sistemas e Protótipos" textAlign="center" fontSize="1em" fontWeight="600" />
                </Card>
                <Card width="180px" height="180px">
                    <Imagem src={serv.api} />
                    <Titulo title="Integração com APIs e Backend" textAlign="center" fontSize="1em" fontWeight="600" />
                </Card>
                <Card width="180px" height="180px">
                    <Imagem src={serv.full} />
                    <Titulo title="Desenvolvimento Fullstack" textAlign="center" fontSize="1em" fontWeight="600" />
                </Card>
                <Card width="180px" height="180px">
                    <Imagem src={serv.auto} />
                    <Titulo title="Automação de Processos" textAlign="center" fontSize="1em" fontWeight="600" />
                </Card>
            </Gridcards>

            <InfoBottom>
                <AppButton icon={<HandCoins size={30} />} text="Fazer Orçamento" func={() => { }} />
            </InfoBottom>


        </Content>

    )

}

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

const Gridcards = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em; 
  padding: 30px;
  justify-items: center;

   @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Imagem = styled.img`
  width: 50px;
  height: 50px;
`;

const InfoBottom = styled.div`

display: flex;
flex-direction: column;
gap: 1em;
margin: 0 auto;

 animation: bounce 3s infinite ease-in-out;

    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(10px); opacity: 0.2; }
        100% { transform: translateY(0); }
    }

    &:hover{
        animation: none;
        animation-play-state: paused;

    }

`