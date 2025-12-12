import styled from "styled-components"
import { COLORS } from "../../constants/colors"
import { MoveRight } from "lucide-react"
import Titulo from "../../components/basics/Titulo"
import AppButton from "../../components/basics/AppButton"
import CurriculoCard from "../../components/layout/CurriculoCard"


export default function Curriculo() {

    return (

        <Content>
            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Currículo" color={COLORS.primary} />
            </TitleSec>

            <TopButtons>
                <AppButton text="Formação" func={() => { }} />
                <AppButton text="Certificações" func={() => { }} variant="secondary" />
                <AppButton text="Experiência Profissional" func={() => { }} variant="secondary" />
                <AppButton text="Freelances" func={() => { }} variant="secondary" />
            </TopButtons>

            <Content>

                <CurriculoCard />

            </Content>


        </Content>

    )

}


const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const TitleSec = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`;

const TopButtons = styled.div`
display: flex;
flex-direction: row;
gap: 1em;
padding-bottom: 1em;
margin: 0 auto;
`;