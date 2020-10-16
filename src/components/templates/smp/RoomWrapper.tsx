import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import centerPutChild from "../../../cssProps/centerPutChild";

interface Props {
  children: ReactNode;
  bgImg: string;
  viewing: "left" | "center" | "right";
}

function RoomWrapper({children, bgImg, viewing}: Props) {
  return(
    <Wrapper>
      <RoomWrapperMain bgImg={bgImg} viewing={viewing}>
        {children}
      </RoomWrapperMain>
    </Wrapper>
  );
}

const RoomWrapperMain = styled.div<Pick<Props, "bgImg" | "viewing">>`
  width: 300vw;
  height: calc(1 / 2 * 300vw);
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${({bgImg}) => bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${({viewing}) => (
    viewing==="center" && css`
    transform: translateX(-100vw);
    `
  )}

${({viewing}) => (
    viewing==="right" && css`
    transform: translateX(-200vw);
    `
  )}

`

const Wrapper = styled.div`
  ${centerPutChild}
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export default RoomWrapper
