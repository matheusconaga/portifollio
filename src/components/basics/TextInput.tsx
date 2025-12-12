import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import Titulo from "./Titulo";

type Prop = {
    title: string;
    multiline?: boolean;
};

export default function TextInput({ title, multiline = false }: Prop) {
    return (
        <InputContainer>
            <Titulo title={title} fontWeight="600" fontSize="1em" />

            {multiline ? (
                <TextArea placeholder="Digite aqui..." />
            ) : (
                <Input type="text" placeholder="Digite aqui..." />
            )}
        </InputContainer>
    );
}

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0.5em 0;
`;

const InputBase = `
    width: 100%;
    padding: 12px 16px;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: rgba(255, 255, 255, 0.08);
    color: ${COLORS.light};
    font-size: 1em;
    outline: none;
    transition: 0.25s ease;
    resize: none;

    &:focus {
        border-color: ${COLORS.primary};
        background-color: rgba(255, 255, 255, 0.12);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;

const Input = styled.input`
    ${InputBase}
`;

const TextArea = styled.textarea`
    ${InputBase}
    height: 100px;
`;
