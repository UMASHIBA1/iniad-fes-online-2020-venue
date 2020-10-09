import React from "react";
import styled from "styled-components";
import { deepBlueColor, lightBlueColor } from "../../../constants/colors";
import {
  deepBlueBGColor,
  lightBlueBGColor,
  whiteText,
} from "../../../cssProps/colors";
import { radiusSm } from "../../../cssProps/radius";
import { normalShadow } from "../../../cssProps/shadow";

interface Props {
  text: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

function Button({ onClick, text, type = "button" }: Props) {
  return (
    <ButtonMain onClick={onClick} type={type} data-testid="button">
      {text}
    </ButtonMain>
  );
}

const ButtonMain = styled.button`
  ${normalShadow(2)}
  ${lightBlueBGColor}
  ${radiusSm}
  ${whiteText}
  font-size: 14px;
  padding: 8px 16px;
  border: 2px solid ${lightBlueColor};
  outline: none !important;
  appearance: none;
  transition: box-shadow 500ms linear;

  :hover {
    ${deepBlueBGColor}
    ${normalShadow(1)}
    border: 2px solid ${deepBlueColor};
  }
`;

export default Button;
