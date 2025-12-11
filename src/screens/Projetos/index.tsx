import { MoveRight } from "lucide-react"
import styled from "styled-components"
import { COLORS } from "../../constants/colors"
import Titulo from "../../components/basics/Titulo"


export default function Projetos() {


    return (

        <Content>

            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Projetos" color={COLORS.primary} />
            </TitleSec>


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