import styled from "styled-components";
import github from "../../assets/github.webp";
import email from "../../assets/mail.webp";
import linkedin from "../../assets/linkedin.webp";
import { COLORS } from "../../constants/colors";

type Icon = "github" | "linkedin" | "email";

type Props = {
    type: Icon;
};

export default function CircleLink({ type }: Props) {
    const options = {
        github: {
            img: github,
            alt: "Imagem do github",
            link: "https://github.com/matheusconaga",
        },
        linkedin: {
            img: linkedin,
            alt: "Imagem do linkedin",
            link: "https://www.linkedin.com/in/matheusconaga",
        },
        email: {
            img: email,
            alt: "Imagem de email",
            link: "mailto:matheusphillip170@gmail.com",
        },
    }[type];


    return (
        <Circle onClick={() => window.open(options.link)}>
            <Imagem src={options.img} alt={options.alt} />
        </Circle>
    );
}

const Circle = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  display: flex;
  background-color: ${COLORS.marine_blue};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    filter: brightness(0.7);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const Imagem = styled.img`
  width: 30px;
  height: 30px;
`;
