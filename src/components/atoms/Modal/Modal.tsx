import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { whiteColor } from "../../../constants/colors";
import centerPutChild from "../../../cssProps/centerPutChild";
import centerPutByPosition from "../../../cssProps/centerPutByPosition";
import overlay from "../../../cssProps/overlay";
import topLeftZero from "../../../cssProps/topLeftZero";
import calcPreviousTime, {
  AnimationPropsType,
} from "../../../utils/calcPreviousTime";
import breakPoints from "../../../constants/breakPoints";
import useRestrictBodyScroll from "../../../hooks/useRestrictBodyScroll/useRestrictBodyScroll";
import { radiusMd } from "../../../cssProps/radius";
import { normalShadow } from "../../../cssProps/shadow";

interface Props {
  children: ReactNode;
  isShow: boolean;
  onClose: () => void;
}

function Modal({ children, isShow, onClose }: Props) {
  useRestrictBodyScroll(isShow);
  return (
    <Wrapper isShow={isShow}>
      <ModalBG onClick={onClose} isShow={isShow} data-testid="modal-bg" />
      <ModalMainWrapper>
        <ModalMain isShow={isShow}>{children}</ModalMain>
      </ModalMainWrapper>
    </Wrapper>
  );
}

// NOTE: 消失時の順番
const fadeOutContent: AnimationPropsType = {
  duration: 100,
  delay: 50,
};

const shrinkMain: AnimationPropsType = {
  duration: 250,
  delay: fadeOutContent.delay + 30,
};
const fadeOutBG: AnimationPropsType = {
  duration: 250,
  delay: shrinkMain.delay,
};

const disableAll: AnimationPropsType = {
  duration: 1,
  delay: calcPreviousTime(fadeOutBG),
};

// NOTE: 出現時の順番
const appearAll: AnimationPropsType = {
  duration: 1,
  delay: 0,
};

const expandMain: AnimationPropsType = {
  duration: 250,
  delay: calcPreviousTime(appearAll) + 49,
};

const fadeInBG: AnimationPropsType = {
  duration: 250,
  delay: expandMain.delay,
};

const fadeInContent: AnimationPropsType = {
  duration: 100,
  delay: calcPreviousTime(expandMain),
};

const Wrapper = styled.div<Pick<Props, "isShow">>`
  ${centerPutChild}
  ${overlay}
  overflow: hidden;
  ${({ isShow }) =>
    isShow &&
    css`
      transition: visibility ${appearAll.duration}ms ease-in
        ${appearAll.delay}ms;
      visibility: visible;
    `}
  ${({ isShow }) =>
    !isShow &&
    css`
      transition: visibility ${disableAll.duration}ms ease-in
        ${disableAll.delay}ms;
      visibility: hidden;
    `}
`;

const ModalBG = styled.div<Pick<Props, "isShow">>`
  ${centerPutChild}
  ${topLeftZero}
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  ${({ isShow }) =>
    isShow &&
    css`
      transition: opacity ${fadeInBG.duration}ms ease-in ${fadeInBG.delay}ms;
      opacity: 1;
    `}
  ${({ isShow }) =>
    !isShow &&
    css`
      transition: opacity ${fadeOutBG.duration}ms ease-in ${fadeOutBG.delay}ms;
      opacity: 0;
    `}
`;

const ModalMainWrapper = styled.div`
  ${centerPutByPosition}
  max-width: 1000px;
  width: calc(100% - 24px);
  height: calc(100% - 48px);

  ${breakPoints.downTablet} {
    height: calc(100% - 54px);
  }
`;

const ModalMain = styled.div<Pick<Props, "isShow">>`
  ${centerPutChild}
  ${radiusMd}
  ${normalShadow(8)}
  width: 100%;
  height: 100%;
  background-color: ${whiteColor};
  overflow: auto;
  ${({ isShow }) =>
    isShow &&
    css`
      transition: transform ${expandMain.duration}ms
        cubic-bezier(0.34, 1.56, 0.64, 1) ${expandMain.delay}ms;
      transform: scale(1, 1);
    `}
  ${({ isShow }) =>
    !isShow &&
    css`
      transition: transform ${shrinkMain.duration}ms
        cubic-bezier(0.36, 0, 0.66, -0.56) ${shrinkMain.delay}ms;
      transform: scale(0, 0);
    `}
    > * {
    ${({ isShow }) =>
      isShow &&
      css`
        transition: opacity ${fadeInContent.duration}ms ease-in
          ${fadeInContent.delay}ms;
        opacity: 1;
      `}
    ${({ isShow }) =>
      !isShow &&
      css`
        transition: opacity ${fadeOutContent.duration}ms ease-in
          ${fadeOutContent.delay}ms;
        opacity: 0;
      `}
  }
`;

export default Modal;
