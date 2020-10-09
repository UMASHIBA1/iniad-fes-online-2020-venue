import React from "react";
import styled, { css } from "styled-components";
import {
  deepBlueColor,
  deepWhiteColor,
  lightBlueColor,
  whiteColor,
} from "../../../constants/colors";
import {
  blackText,
  deepBlueBGColor,
  deepWhiteBGColor,
  lightBlueBGColor,
  whiteBGColor,
  whiteText,
} from "../../../cssProps/colors";
import { radiusSm } from "../../../cssProps/radius";
import { normalShadow } from "../../../cssProps/shadow";

interface Props {
  text: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  mode?: "white" | "blue";
}

function Button({ onClick, text, type = "button", mode = "white" }: Props) {
  return (
    <ButtonMain onClick={onClick} type={type} data-testid="button" mode={mode}>
      {text}
    </ButtonMain>
  );
}

const ButtonMain = styled.button<Pick<Props, "mode">>`
  ${normalShadow(2)}
  ${radiusSm}
  font-size: 14px;
  padding: 8px 16px;
  border: 2px solid;
  outline: none !important;
  appearance: none;
  transition: box-shadow 500ms linear;
  ${({ mode }) =>
    mode === "blue" &&
    css`
      ${lightBlueBGColor}
      ${whiteText}
      border-color: ${lightBlueColor};
    `}
  ${({ mode }) =>
    mode === "white" &&
    css`
      ${whiteBGColor}
      ${blackText}
      border-color: ${whiteColor};
    `}

    :hover {
    ${normalShadow(1)}
    ${({ mode }) =>
      mode === "blue" &&
      css`
        ${deepBlueBGColor}
        border-color: ${deepBlueColor};
      `}

    ${({ mode }) =>
      mode === "white" &&
      css`
        ${deepWhiteBGColor}
        border-color: ${deepWhiteColor};
      `}
  }
`;

export default Button;
