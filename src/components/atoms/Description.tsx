import React from "react";
import styled from "styled-components";
import { blackText } from "../../cssProps/colors";

interface Props {
  description: string;
}

function Description({description}: Props) {
  return(
    <Main>
      {description}
    </Main>
  );
}

const Main = styled.p`
  font-size: 14px;
  ${blackText};
`

export default Description
