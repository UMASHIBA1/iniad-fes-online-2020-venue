import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import centerPutChild from "../../../cssProps/centerPutChild";
import ViewingProp from "../../../typings/ViewingProp";
import rightArrow from "../../../statics/svgs/right-arrow.svg";
import leftArrow from "../../../statics/svgs/left-arrow.svg";
import IconButton from "../../atoms/IconButton";
import { DispatchType, useTypedSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { toCenter, toLeft, toRight } from "../../../redux/modules/viewingScreen";
import breakPoints from "../../../constants/breakPoints";

interface Props {
  children: ReactNode;
  bgImg: string;
}

const dataControllIds = {
  leftButton: "roomwrapper-left-button",
  rightButton: "roomwrapper-right-button",
};

const goOneLeft = (dispatch: DispatchType, nowViewingScreen: ViewingProp) => {
  if(nowViewingScreen === "center") {
    dispatch(toLeft());
  }else if(nowViewingScreen === "right") {
    dispatch(toCenter());
  }
}

const goOneRight = (dispatch: DispatchType, nowViewingScreen: ViewingProp) => {
  if(nowViewingScreen === "center") {
    dispatch(toRight());
  }else if(nowViewingScreen === "left") {
    dispatch(toCenter());
  }
}

function RoomWrapper({ children, bgImg }: Props) {
  const viewingScreen = useTypedSelector(({viewingScreen}) => viewingScreen);
  const dispatch: DispatchType = useDispatch();

  return (
    <Wrapper>
      <RoomWrapperMain bgImg={bgImg} viewing={viewingScreen}>
        {children}
        <IconButton
          svgPath={leftArrow}
          iconDescription="left"
          dataControllId={dataControllIds.leftButton}
          onClick={() => {
            goOneLeft(dispatch, viewingScreen);
          }}
        />
        <IconButton
          svgPath={rightArrow}
          iconDescription="right"
          dataControllId={dataControllIds.rightButton}
          onClick={() => {
            goOneRight(dispatch, viewingScreen);
          }}
        />
      </RoomWrapperMain>
    </Wrapper>
  );
}

const RoomWrapperMain = styled.div<{bgImg: Props["bgImg"], viewing: ViewingProp}>`
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${({ bgImg }) => bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 300vw;
  height: calc(1/3 * 300vw);

  ${breakPoints.downSm} {
  height: calc(1 / 2 * 300vw);
  }

  ${({ viewing }) =>
    viewing === "center" &&
    css`
      transform: translateX(-100vw);
    `}

  ${({ viewing }) =>
    viewing === "right" &&
    css`
      transform: translateX(-200vw);
    `}

  >button {
    &[data-controll-id=${dataControllIds.leftButton}] {
      position: absolute;
      top: 50%;
      left: 0;
      margin-left: 6px;
      ${({ viewing }) =>
        viewing === "left" &&
        css`
          visibility: hidden;
        `}
      ${({ viewing }) =>
        viewing === "center" &&
        css`
          transform: translate(100vw, -50%);
        `}
      ${({ viewing }) =>
        viewing === "right" &&
        css`
          transform: translate(200vw, -50%);
        `}
    }

    &[data-controll-id=${dataControllIds.rightButton}] {
      position: absolute;
      top: 50%;
      right: 0;
      margin-right: 6px;
      ${({ viewing }) =>
        viewing === "left" &&
        css`
          transform: translate(-200vw, -50%);
        `}
      ${({ viewing }) =>
        viewing === "center" &&
        css`
          transform: translate(-100vw, -50%);
        `}
      ${({ viewing }) =>
        viewing === "right" &&
        css`
          visibility: hidden;
        `}
    }
  }
`;

const Wrapper = styled.div`
  ${centerPutChild}
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default RoomWrapper;
