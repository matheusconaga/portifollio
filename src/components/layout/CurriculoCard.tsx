import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import Card from "../basics/Card";
import Titulo from "../basics/Titulo";
import reactImage from "../../assets/tecs/react.png"
import Text from "../basics/Text";

export default function CurriculoCard() {

    return (

        <Card width="50%" align="left" gap="4px">
            <Titulo title="Mar 2022 - Fev 2025" fontSize="14px" textAlign="end" color={COLORS.primary} />

            <Infos>
                <Imagem src={reactImage} />
                <InfoTitle>
                    <Titulo title="Curso Superior em Tecnologia (CST)" fontSize="1.1em" />
                    <Titulo title="Análise e Desenvolvimento de Sistemas" color={COLORS.light} fontSize="0.9em" />
                    <Titulo title="IFPI - Instituto Federal do Piauí • Parnaíba-PI (presencial)" color={COLORS.gray} fontSize="0.9em" />
                </InfoTitle>
            </Infos>
            <Text text="No curso aprendi fundamentos de programação, engenharia de software, programação web, programação móvel, prototipação, dentre outras coisas importantes para a formação de desenvolvedor." />

        </Card>

    )

}


const Imagem = styled.img`

    width: 60px;
    height: 60px;
    border-radius: 8px;
    background-color: pink;
`;

const Infos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;

`;

const InfoTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`;