import React, { ReactNode } from "react";
import styled from "styled-components";
import centerPutChild from "../../cssProps/centerPutChild";
import { whiteBGColor } from "../../cssProps/colors";
import { radiusSm } from "../../cssProps/radius";
import { normalShadow } from "../../cssProps/shadow";

// NOTE: このサイト(https://material.io/resources/icons/?style=baseline)のsvgアイコンを使うことを想定したコンポーネントです。

interface Props {
  children: ReactNode;
}

function IconButton(props: Props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.button`
  ${centerPutChild}
  ${radiusSm}
  ${whiteBGColor}
  ${normalShadow(2)}
  width: 48px;
  height: 48px;
  border: none;
  outline: none !important;
`;

export default IconButton;
