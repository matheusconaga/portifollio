import styled from "styled-components"
import Titulo from "./Titulo"

type Prop = {
    titulo: string;
    imagem: string;
}

export default function CardTec({ titulo, imagem }: Prop) {

    return (
        <StyleContainer>

            <Imagem src={imagem} />
            <Titulo title={titulo} fontSize="1.15em"/>

        </StyleContainer>


    )

}

const StyleContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: solid 1px white;
    border-radius: 5px;
    padding: 4px;
    width: 70%;
    gap: 8px;
    align-items: center;
    justify-content: center;
    
`

const Imagem = styled.img`
  width: 35px;
  height: 35px;
`;
