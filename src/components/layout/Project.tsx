import Card from "../basics/Card";
import Titulo from "../basics/Titulo";
import cell from "../../assets/cell.png";
import styled from "styled-components";
import Text from "../basics/Text";
import AppButton from "../basics/AppButton";
import { Code2, Palette, Rocket } from "lucide-react";
import CardTec from "../basics/CardTec";
import flutter from "../../assets/tecs/flutter_blue.png";
import { COLORS } from "../../constants/colors";

export default function Project() {
    return (
        <Card>
            <ContainerImagem>
                <CardTec
                    imagem={flutter}
                    titulo="Flutter"
                    position="absolute"
                    width=""
                    bgColor={COLORS.tecImage_bg}
                    fontSize="1em"
                    textColor={COLORS.marine_blue}
                />

                <Imagem src={cell} />
            </ContainerImagem>

            <Titulo title="Delta Commerce" fontSize="1.2em" />
            <Text text="Sistema de e-commerce em flutter para postagem e compra de produtos via chat whatsapp." />

            <BottomButtons>
                <AppButton icon={<Rocket size={20} />} text="Deploy" func={() => { }} />
                <AppButton icon={<Code2 size={20} />} text="Repositório" func={() => { }} variant="secondary" />
                <AppButton icon={<Palette size={20} />} text="Design" func={() => { }} />
            </BottomButtons>
        </Card>
    );
}

const ContainerImagem = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 140px;
    overflow: hidden;
    border-radius: 10px;
`;

const Imagem = styled.img`
    width: 100%;
    height: 140px;
    border-radius: 10px;
`;

const BottomButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-top: auto;
    flex-wrap: wrap;
    justify-content: center;
`;
