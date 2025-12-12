import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import type { ReactNode } from "react";

type Prop = {

    icon: ReactNode;

}


export default function Circle({ icon }: Prop) {

    return (

        <CircleContainer>
            {icon}
        </CircleContainer>

    )

}


const CircleContainer = styled.div`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${COLORS.tecImage_bg};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

`;