import styled from "styled-components";

type Props = {
    title: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string | number;
    textAlign?: string;
}

export default function Titulo({
    title,
    color = "white",
    fontSize = "1.4em",
    fontWeight = "bold",
    textAlign = "left"
}: Props) {

    return (
        <TituloEstilizado
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            textAlign={textAlign}
        >
            {title}
        </TituloEstilizado>
    );
}

const TituloEstilizado = styled.h1<{
    color: string;
    fontSize: string;
    fontWeight: string | number;
    textAlign: string;
}>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    font-family: "Poppins", sans-serif;
    text-align: ${(props) => props.textAlign};
`;
