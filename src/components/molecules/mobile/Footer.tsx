import React, { useState } from "react";
import styled, { css } from "styled-components";
import { whiteColor } from "../../../constants/colors";
import { lightBlueBGColor, whiteText } from "../../../cssProps/colors";
import ImgModal from "../ImgModal";
import dummyImg from "../../../statics/dummy.png";
import PDFModal from "../PDFModal";
import { DispatchType, useTypedSelector } from "../../../redux/store";
import ViewingProp from "../../../typings/ViewingProp";
import { useDispatch } from "react-redux";
import { showChat } from "../../../redux/modules/isShowChat";

function Footer() {
  const [isShowPlan, changeIsShowPlan] = useState(false);
  const [isShowMap, changeIsShowMap] = useState(false);
  const viewing = useTypedSelector(({ viewingScreen }) => viewingScreen);
  const dispatch: DispatchType = useDispatch();
  const showChatFc = () => {
    dispatch(showChat());
  }

  return (
    <React.Fragment>
      <Wrapper viewingScreen={viewing}>
        <OneFunc onClick={showChatFc}>Chat</OneFunc>
        <OneFunc onClick={() => changeIsShowMap(true)}>Map</OneFunc>
        <OneFunc onClick={() => changeIsShowPlan(true)}>Plan</OneFunc>
      </Wrapper>
      <PDFModal
        isShow={isShowMap}
        onClose={() => {
          changeIsShowMap(false);
        }}
        pdfProps={{
          url: "/sample.pdf",
          pageNum: 2,
        }}
        viewing={viewing}
        isMobile={true}
      />
      <ImgModal
        isShow={isShowPlan}
        onClose={() => {
          changeIsShowPlan(false);
        }}
        src={dummyImg}
        // FIXME: もし画像でプランを表示させるなら視覚障がい者ようにaltでちゃんとしたプランの一覧を書かないといけない
        alt="plan"
        viewing={viewing}
        isMobile={true}
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  position: absolute;
  bottom: 0;
  width: calc(100% / 3);
  height: 52px;
  left: 100vw;
  transition: transform 200ms linear;

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
