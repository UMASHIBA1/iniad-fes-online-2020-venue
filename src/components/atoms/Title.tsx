import React from "react"
import styled from "styled-components";
import { blackText } from "../../cssProps/colors";

interface Props {
  title: string;
}

function Title({title}: Props) {
  return(
    <Main>
      {title}
    </Main>
  );
}

const Main = styled.div`
  font-size: 24px;
  ${blackText}
  font-weight: bold;
`

export default Title;
