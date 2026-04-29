import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import Card from "../basics/Card";
import Titulo from "../basics/Titulo";
import Text from "../basics/Text";

interface CurriculoCardProps {
    periodo?: string;
    imagem?: string;
    titulo?: string;
    subtitulo1?: string;
    subtitulo2?: string;
    text: string;
    transparent?: boolean;
}

export default function CurriculoCard({
    periodo,
    imagem,
    titulo,
    subtitulo1,
    subtitulo2,
    text,
    transparent = false,
}: CurriculoCardProps) {
    return (
        <Card variant="default" align="normal" gap="4px">
            {periodo && (
                <Titulo
                    title={periodo}
                    fontSize="14px"
                    textAlign="end"
                    color={COLORS.primary}
                />
            )}

            <Infos>
                {imagem && <Imagem src={imagem} $transparent={transparent} />}

                {(titulo || subtitulo1 || subtitulo2) && (
                    <InfoTitle>
                        {titulo && (
                            <Titulo
                                title={titulo}
                                fontSize="1em"
                            />
                        )}

                        {subtitulo1 && (
                            <Titulo
                                title={subtitulo1}
                                color={COLORS.light}
                                fontSize="0.9em"
                                fontWeight="600"
                            />
                        )}

                        {subtitulo2 && (
                            <Titulo
                                title={subtitulo2}
                                color={COLORS.gray}
                                fontSize="0.9em"
                            />
                        )}
                    </InfoTitle>
                )}
            </Infos>

            <Text text={text} align="left"/>
        </Card>
    );
}

const Imagem = styled.img<{ $transparent?: boolean }>`
    width: 70px;
    height: 70px;
    background-color: ${({ $transparent }) => $transparent ? 'transparent' : COLORS.light};
    padding: 4px;
    border-radius: 8px;
`;

const Infos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
`;

const InfoTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`;
