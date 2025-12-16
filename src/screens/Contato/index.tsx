import { Mail, MapPin, MoveRight, Send, Smartphone } from "lucide-react";
import { COLORS } from "../../constants/colors";
import Titulo from "../../components/basics/Titulo";
import styled from "styled-components";
import Card from "../../components/basics/Card";
import Circle from "../../components/basics/Circle";
import TextInput from "../../components/basics/TextInput";
import AppButton from "../../components/basics/AppButton";
import CircleLink from "../../components/basics/CircleLink";
import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function Contato() {

    const [form, setForm] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });

    const handleSendEmail = async () => {
        if (!form.nome || !form.email || !form.mensagem) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        try {
            await emailjs.send(
                "service_9wspx9t",
                "template_oqxjx4c",
                {
                    from_name: form.nome,
                    from_email: form.email,
                    subject: form.assunto,
                    message: form.mensagem,
                },
                "lBUOhsKLXAQ3l3O_v"
            );

            alert("Mensagem enviada com sucesso!");

            setForm({
                nome: "",
                email: "",
                assunto: "",
                mensagem: "",
            });
        } catch (error) {
            alert("Erro ao enviar mensagem. Tente novamente.");
            console.error(error);
        }
    };



    return (

        <Content>
            <TitleSec>
                <MoveRight size={30} color={COLORS.primary} />
                <Titulo title="Contato" color={COLORS.primary} />
            </TitleSec>

            <Wrapper>

                <Card width="100%">
                    
                    <Titulo title="Entre em Contato" fontSize="1.3em" fontWeight="700" />

                    <Form>
                        <Inputs>
                            <TextInput
                                title="Nome"
                                value={form.nome}
                                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                            />

                            <TextInput
                                title="E-mail"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />

                        </Inputs>
                        <TextInput
                            title="Assunto"
                            value={form.assunto}
                            onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                        />

                        <TextInput
                            title="Mensagem"
                            multiline
                            value={form.mensagem}
                            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                        />
                        <AppButton
                            text="Enviar mensagem"
                            func={handleSendEmail}
                            icon={<Send size={25} />}
                        />
                    </Form>
                </Card>

                <Content>
                    <Titulo title="Informações Extras" fontWeight="600" fontSize="1.25em" />
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
                        <Titulo title="Redes Sociais" fontWeight="600" fontSize="1.25em" />
                        <Links>
                            <CircleLink type="github" />
                            <CircleLink type="linkedin" />
                        </Links>
                    </WrapLinks>
                </Content>

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

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const Inputs = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;


const TextCollumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 0.95rem;
    }
  }
`;


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

  @media (max-width: 480px) {
    gap: 1.5em;

    &:before {
      height: 90%;
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

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 6px;

    &:before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;



const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6em;
  margin-top: 2em;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 3em;
    text-align: center;
  }

  @media (max-width: 480px) {
    gap: 2em;
  }
`;



const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
`;

