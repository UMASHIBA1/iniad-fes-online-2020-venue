import React from "react";
import styled, { css } from "styled-components";
import { whiteColor } from "../../../constants/colors";
import { lightBlueBGColor } from "../../../cssProps/colors";

interface Props {
  viewing: "left" | "center" | "right";
}

function Footer({ viewing }: Props) {
  return (
    <Wrapper viewing={viewing}>
      <OneFunc />
      <OneFunc />
      <OneFunc />
    </Wrapper>
  );
}

const OneFunc = styled.div`
  outline: none !important;
  border: 1px solid ${whiteColor};
  ${lightBlueBGColor};
`;

const Wrapper = styled.div<Pick<Props, "viewing">>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  position: absolute;
  bottom: 0;
  width: calc(100% / 3);
  height: 52px;

  ${({ viewing }) =>
    viewing === "left" &&
    css`
      left: 0;
    `}

  ${({ viewing }) =>
    viewing === "center" &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

${({ viewing }) =>
    viewing === "right" &&
    css`
      right: 0;
    `}
`;

export default Footer;
