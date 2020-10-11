import React from "react";
import styled from "styled-components";
import { deepBlueBGColor, lightBlueBGColor, whiteText } from "../../cssProps/colors";
import { radiusSm } from "../../cssProps/radius";
import { normalShadow } from "../../cssProps/shadow";

// NOTE: このサイト(https://material.io/resources/icons/?style=baseline)のsvgアイコンを使うことを想定したコンポーネントです。

interface Props {
  svgPath: string;
  iconDescription: string;
  onClick?: () => void;
  dataControllId?: string;
}

function IconButton({svgPath, iconDescription, onClick, dataControllId}: Props) {
  return (
  <Wrapper onClick={onClick} dataControllId={dataControllId}>
    <Icon svgPath={svgPath} iconDescription={iconDescription} />
    <Description>{iconDescription}</Description>
  </Wrapper>
  );
}

const Wrapper = styled.button.attrs<Pick<Props, "dataControllId">>(({dataControllId}) => ({
  "data-controll-id": dataControllId
}))<Pick<Props, "dataControllId">>`
  ${radiusSm}
  ${lightBlueBGColor}
  ${normalShadow(2)}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: none;
  outline: none !important;

  :hover {
    ${deepBlueBGColor}
  }
`;

const Icon = styled.img.attrs<Props>(({svgPath,iconDescription}) => ({
  src: svgPath,
  alt: iconDescription + "icon"
}))<Props>`
  width: 24px;
`

const Description = styled.div`
  ${whiteText}
  font-size: 12px;
  line-height: 1;
`

export default IconButton;
