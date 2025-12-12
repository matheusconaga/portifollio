import { MoveRight } from "lucide-react"
import styled from "styled-components"
import { COLORS } from "../../constants/colors"
import Titulo from "../../components/basics/Titulo"
import AppButton from "../../components/basics/AppButton"
import Project from "../../components/layout/Project"


export default function Projetos() {


    return (

        <Content>

            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Projetos" color={COLORS.primary} />
            </TitleSec>

            <TopButtons>
                <AppButton text="Todos" func={() => { }} />
                <AppButton text="Mobile" func={() => { }} variant="secondary" />
                <AppButton text="Web" func={() => { }} variant="secondary" />
            </TopButtons>

            <Cards>
                <Project />
                <Project />
                <Project />

            </Cards>

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

const TopButtons = styled.div`

display: flex;
flex-direction: row;
gap: 1em;
padding-bottom: 1em;
margin: 0 auto;

`
const Cards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
    flex-wrap: wrap;
justify-content: center;
`
