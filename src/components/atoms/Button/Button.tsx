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
  useShadow?: boolean;
}

function Button({
  onClick,
  text,
  type = "button",
  mode = "white",
  useShadow = true,
}: Props) {
  return (
    <ButtonMain
      onClick={onClick}
      type={type}
      data-testid="button"
      mode={mode}
      useShadow={useShadow}
    >
      {text}
    </ButtonMain>
  );
}

const ButtonMain = styled.button<Required<Pick<Props, "mode" | "useShadow">>>`
  ${radiusSm}
  font-size: 14px;
  padding: 4px 16px;
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

    ${({ useShadow }) =>
      useShadow &&
      css`
        ${normalShadow(2)}
      `}

    :hover {
    ${({ useShadow }) =>
      useShadow &&
      css`
        ${normalShadow(1)}
      `}
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
