import React, { useState } from "react";
import styled, { css } from "styled-components";
import { whiteColor } from "../../../constants/colors";
import { lightBlueBGColor, whiteText } from "../../../cssProps/colors";
import PDFModal from "../PDFModal";
import { DispatchType, useTypedSelector } from "../../../redux/store";
import ViewingProp from "../../../typings/ViewingProp";
import { useDispatch } from "react-redux";
import { showChat } from "../../../redux/modules/isShowChat";
import { pamphletProps, mapUrl } from "../../../constants/filePath";
import ImgModal from "../ImgModal";

interface Props {
  isShowChat?: boolean;
}

function Footer({ isShowChat = true }: Props) {
  const [isShowBook, changeIsShowBook] = useState(false);
  const [isShowMap, changeIsShowMap] = useState(false);
  const viewing = useTypedSelector(({ viewingScreen }) => viewingScreen);
  const dispatch: DispatchType = useDispatch();
  const showChatFc = () => {
    dispatch(showChat());
  };

  return (
    <React.Fragment>
      <Wrapper viewingScreen={viewing}>
        <OneFunc onClick={isShowChat ? showChatFc : () => {}}>
          {isShowChat ? "Chat" : "No Chat"}
        </OneFunc>
        <OneFunc onClick={() => changeIsShowMap(true)}>Map</OneFunc>
        <OneFunc onClick={() => changeIsShowBook(true)}>Book</OneFunc>
      </Wrapper>
      <PDFModal
        isShow={isShowBook}
        isMobile={true}
        onClose={() => {
          changeIsShowBook(false);
        }}
        pdfProps={pamphletProps}
        viewing={viewing}
      />
      <ImgModal
      viewing={viewing}
        isShow={isShowMap}
        onClose={() => {
          changeIsShowMap(false);
        }}
        src={mapUrl}
        alt="map"
        isMobile={false}
      />
    </React.Fragment>
  );
}

const OneFunc = styled.button`
  outline: none !important;
  border: 1px solid ${whiteColor};
  ${lightBlueBGColor};
  ${whiteText}
`;

const Wrapper = styled.div<{ viewingScreen: ViewingProp }>`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 1fr;
  position: absolute;
  bottom: 0;
  width: calc(100% / 3);
  height: 36px;
  left: 100vw;
  transition: transform 200ms linear;
  z-index: 100;

  ${({ viewingScreen: viewing }) =>
    viewing === "left" &&
    css`
      transform: translateX(-100vw);
    `}

  ${({ viewingScreen: viewing }) =>
    viewing === "center" &&
    css`
      transform: translateX(0);
    `}

${({ viewingScreen: viewing }) =>
    viewing === "right" &&
    css`
      transform: translateX(100vw);
    `}
`;

export default Footer;
