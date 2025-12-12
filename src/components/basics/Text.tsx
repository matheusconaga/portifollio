import styled from "styled-components"

type Prop = {
    text: string;
    align?: string;
}

export default function Text({ text, align = "justify" }: Prop) {
    return <TextStyle $align={align}>{text}</TextStyle>;
}

const TextStyle = styled.p<{ $align: string }>`
    color: white;
    font-size: 16px;
    text-align: ${({ $align }) => $align};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`;
