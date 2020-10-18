import React, { useState } from "react";
import styled, { css } from "styled-components";
import { whiteColor } from "../../../constants/colors";
import { lightBlueBGColor, whiteText } from "../../../cssProps/colors";
import ImgModal from "../ImgModal";
import dummyImg from "../../../statics/dummy.png";
import PDFModal from "../PDFModal";
import { useTypedSelector } from "../../../redux/store";
import ViewingProp from "../../../typings/ViewingProp";

function Footer() {
  const [isShowPlan, changeIsShowPlan] = useState(false);
  const [isShowMap, changeIsShowMap] = useState(false);
  const viewing = useTypedSelector(({ viewingScreen }) => viewingScreen);
  return (
    <React.Fragment>
      <Wrapper viewingScreen={viewing}>
        <OneFunc>Chat</OneFunc>
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

  ${({ viewingScreen: viewing }) =>
    viewing === "left" &&
    css`
      left: 0;
    `}

  ${({ viewingScreen: viewing }) =>
    viewing === "center" &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

${({ viewingScreen: viewing }) =>
    viewing === "right" &&
    css`
      right: 0;
    `}
`;

export default Footer;
