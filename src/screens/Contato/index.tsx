import { Mail, MapPin, MoveRight, Send, Smartphone } from "lucide-react";
import { COLORS } from "../../constants/colors";
import Titulo from "../../components/basics/Titulo";
import styled from "styled-components";
import Card from "../../components/basics/Card";
import Circle from "../../components/basics/Circle";
import TextInput from "../../components/basics/TextInput";
import AppButton from "../../components/basics/AppButton";
import CircleLink from "../../components/basics/CircleLink";

export default function Contato() {

    return (

        <Content>
            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Contato" color={COLORS.primary} />
            </TitleSec>

            <Wrapper>
                <Content>
                    <Infos>
                        <IconTitle>
                            <Circle icon={<Mail size={25} color="white" />} />
                            <TextCollumn>
                                <Titulo title="E-mail" fontSize="14px" />
                                <Titulo title="matheusphillip170@gmail.com" fontSize="18px" fontWeight="500" />
                            </TextCollumn>
                        </IconTitle>
                        <IconTitle>
                            <Circle icon={<Smartphone size={25} color="white" />} />
                            <TextCollumn>
                                <Titulo title="Telefone" fontSize="14px" />
                                <Titulo title="+55 (86) 98145-1876" fontSize="18px" fontWeight="500" />
                            </TextCollumn>
                        </IconTitle>
                        <IconTitle>
                            <Circle icon={<MapPin size={25} color="white" />} />
                            <TextCollumn>
                                <Titulo title="Localização" fontSize="14px" />
                                <Titulo title="Parnaíba-PI" fontSize="18px" fontWeight="500" />
                            </TextCollumn>
                        </IconTitle>

                    </Infos>

                    <WrapLinks>
                        <Titulo title="Outros meios de contato" fontWeight="600" fontSize="1.25em" />
                        <Links>
                            <CircleLink type="github" />
                            <CircleLink type="linkedin" />
                        </Links>
                    </WrapLinks>
                </Content>

                <Card width="50%">
                    <Titulo title="Entre em Contato" fontSize="1.3em" fontWeight="700" />

                    <Form>
                        <Inputs>
                            <TextInput title="Nome" />
                            <TextInput title="E-mail" />
                        </Inputs>
                        <TextInput title="Assunto" />
                        <TextInput title="Mensagem" multiline />
                        <AppButton
                            text="Enviar mensagem"
                            func={() => { }}
                            icon={<Send size={25} />}
                        />
                    </Form>
                </Card>

            </Wrapper>

        </Content >

    )

}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`

const WrapLinks = styled.div`
    display: flex;
    margin-top: 2em;
    flex-direction: column;
gap: 16px;
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
`;

const Inputs = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: row;
    
    `

const TextCollumn = styled.div`
    display: flex;
    flex-direction: column;
`

const TitleSec = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`

const Infos = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding-left: 2.2em;

    &:before {
        content: "";
        position: absolute;
        left: 15px;
        top: 15px;
        width: 3px;
        height: 100%;
        background: ${COLORS.primary};
        border-radius: 10px;
    }

    @media (max-width: 900px) {
        align-items: center;
        padding-left: 0;

        &:before {
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const IconTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        left: -25px;
        width: 12px;
        height: 12px;
        background: ${COLORS.primary};
        border-radius: 50%;
    }

    @media (max-width: 900px) {
        &:before {
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3em;
    margin-top: 2em;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;


const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
`;
