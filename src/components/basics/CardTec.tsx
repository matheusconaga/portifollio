import styled from "styled-components"
import Titulo from "./Titulo"

type Prop = {
    titulo: string;
    imagem: string;
    position?: string;
    bgColor?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    textColor?: string;
}

export default function CardTec({ titulo, imagem, position = "static", bgColor = "transparent", width = "70%", height = "auto", fontSize = "1.15em", textColor
}: Prop) {

    return (
        <StyleContainer $position={position} bgColor={bgColor} width={width} height={height}>

            <Imagem src={imagem} bgColor={bgColor}/>
            <Titulo title={titulo} fontSize={fontSize} fontWeight="600" color={textColor} />

        </StyleContainer>


    )

}

const StyleContainer = styled.div<{ $position: string, bgColor: string, width: string, height: string }>`
    display: flex;
    flex-direction: row;
    border: ${({ bgColor }) => bgColor === 'transparent' ? '1px solid white' : 'none'};
    border-radius: 5px;
    position: ${({ $position }) => $position ? $position : 'static'};
    left: 15px;
    top: 12px;
    padding: 4px;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ bgColor }) => bgColor};
    gap: 8px;
    align-items: center;
    justify-content: center;
    
`

const Imagem = styled.img<{ bgColor: string }>`
  width: ${({ bgColor }) => bgColor === 'transparent' ? '35px' : '23px'};
  height:  ${({ bgColor }) => bgColor === 'transparent' ? '35px' : '23px'};
`;
