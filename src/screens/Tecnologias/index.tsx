import { MoveRight } from "lucide-react"
import Titulo from "../../components/basics/Titulo"
import { COLORS } from "../../constants/colors"
import styled from "styled-components"
import Card from "../../components/basics/Card"
import CardTec from "../../components/basics/CardTec"

const images = import.meta.glob("../../assets/tecs/*.{png,jpg,jpeg,svg}", {
    eager: true
});

type ImageModule = {
    default: string;
};

const tecs: Record<string, string> = {};

Object.entries(images).forEach(([path, mod]) => {
    const module = mod as ImageModule;
    const name = path.split("/").pop()!.replace(/\.(png|jpg|jpeg|svg)$/, "");
    tecs[name] = module.default;
});


export default function Tecnologias() {

    return (
        <Content>
            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Tecnologias" color={COLORS.primary} />
            </TitleSec>


            <Cards>
                <Card>
                    <Titulo title="Frontend" textAlign="center" color={COLORS.primary} />
                    <CardTec titulo="Flutter" imagem={tecs.flutter} />
                    <CardTec titulo="React" imagem={tecs.react} />
                    <CardTec titulo="HTML5" imagem={tecs.html} />
                    <CardTec titulo="CSS3" imagem={tecs.css} />
                </Card>
                <Card>
                    <Titulo title="Banco de Dados" textAlign="center" color={COLORS.primary} />
                    <CardTec titulo="Firebase" imagem={tecs.firebase} />
                    <CardTec titulo="Postgress" imagem={tecs.postgress} />
                    <CardTec titulo="MongoDB" imagem={tecs.mongodb} />
                    <CardTec titulo="Supabase" imagem={tecs.supabase} />
                </Card>
                <Card>
                    <Titulo title="Backend" textAlign="center" color={COLORS.primary} />
                    <CardTec titulo="Javascript" imagem={tecs.javascript} />
                    <CardTec titulo="Typescript" imagem={tecs.typescript} />
                    <CardTec titulo="Python" imagem={tecs.python} />
                    <CardTec titulo="Java" imagem={tecs.java} />
                </Card>
            </Cards>

            <InfoBottom>

                <Titulo title="Outros Conhecimentos" textAlign="center" color={COLORS.primary} fontSize="1.3em" />

                <CardsBottom>
                    <CardTec titulo="Figma" imagem={tecs.figma} />
                    <CardTec titulo="Git" imagem={tecs.git} />
                    <CardTec titulo="Diagramação" imagem={tecs.diagrama} />
                </CardsBottom>
            </InfoBottom>

        </Content>
    )

}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5em;

`

const TitleSec = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
justify-content: center;
`

const CardsBottom = styled.div`
display: flex;
flex-direction: row;
gap: 2em;
`

const InfoBottom = styled.div`

display: flex;
flex-direction: column;
gap: 1em;
width: 60%;
margin: 0 auto;

`
