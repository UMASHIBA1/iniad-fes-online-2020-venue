import React from "react"
import styled from "styled-components"

interface Props {
  color: string;
}

const H2 = styled.p<Props>`
  color: ${({color}) => color};
  font-size: 20px;
`

export default H2;
