import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import centerPutChild from "../../../cssProps/centerPutChild";
import ViewingProp from "../../../typings/ViewingProp";
import rightArrow from "../../../statics/svgs/right-arrow.svg";
import leftArrow from "../../../statics/svgs/left-arrow.svg";
import IconButton from "../../atoms/IconButton";

interface Props {
  children: ReactNode;
  bgImg: string;
  viewing:ViewingProp;
}

const dataControllIds = {
  leftButton: "roomwrapper-left-button",
  rightButton: "roomwrapper-right-button"
}

function RoomWrapper({children, bgImg, viewing}: Props) {
  return(
    <Wrapper>
      <RoomWrapperMain bgImg={bgImg} viewing={viewing}>
        <IconButton svgPath={leftArrow} iconDescription="left" dataControllId={dataControllIds.leftButton}  />
        {children}
        <IconButton svgPath={rightArrow} iconDescription="right" dataControllId={dataControllIds.rightButton}  />
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

  >button {
    &[data-controll-id=${dataControllIds.leftButton}] {
      position: absolute;
      top: 50%;
      left: 0;
      margin-left: 6px;
      ${({viewing}) => (
        viewing==="left"&&css`
          /* transform: translate(, -50%); */
          visibility: hidden;
        `
      )}
            ${({viewing}) => (
        viewing==="center"&&css`
          transform: translate(100vw, -50%);
        `
      )}
      ${({viewing}) => (
        viewing==="right"&&css`
          transform: translate(200vw, -50%);
        `
      )}
    }

    &[data-controll-id=${dataControllIds.rightButton}] {
      position: absolute;
      top: 50%;
      right: 0;
      margin-right: 6px;
      ${({viewing}) => (
        viewing==="left"&&css`
          transform: translate(-200vw, -50%);
        `
      )}
            ${({viewing}) => (
        viewing==="center"&&css`
          transform: translate(-100vw, -50%);
        `
      )}
      ${({viewing}) => (
        viewing==="right"&&css`
          visibility: hidden;
        `
      )}
    }
  }

`



const Wrapper = styled.div`
  ${centerPutChild}
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export default RoomWrapper
