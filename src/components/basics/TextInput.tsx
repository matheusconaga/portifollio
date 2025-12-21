import type { ChangeEvent } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import Titulo from "./Titulo";

type TextInputProps = {
    title: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    multiline?: boolean;
    placeholder?: string;
};


export default function TextInput({
    title,
    value,
    onChange,
    multiline = false,
    placeholder = "Digite aqui...",
}: TextInputProps) {
    return (
        <InputContainer>
            <Titulo title={title} fontWeight="600" fontSize="1em" />

            {multiline ? (
                <TextArea
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : (
                <Input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )}
        </InputContainer>
    );
}


const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-bottom: 1em;

     @media (max-width: 900px) {
        flex-direction: column;
        padding-bottom: 12px;
    }
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

     @media (max-width: 900px) {
       font-size: 14px;
    }
`;

const Input = styled.input`
    ${InputBase}
`;

const TextArea = styled.textarea`
    ${InputBase}
    height: 100px;
`;
