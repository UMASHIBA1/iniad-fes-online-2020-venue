import React, { useState } from "react";
import styled, { css } from "styled-components";
import { whiteColor } from "../../../constants/colors";
import { lightBlueBGColor, whiteText } from "../../../cssProps/colors";
import ImgModal from "../ImgModal";
import dummyImg from "../../../statics/dummy.png";
import ViewingProp from "../../../typings/ViewingProp";
import PDFModal from "../PDFModal";


interface Props {
  viewing: ViewingProp;
}

function Footer({ viewing }: Props) {
  const [isShowPlan, changeIsShowPlan] = useState(false);
  const [isShowMap, changeIsShowMap] = useState(false);
  return (
    <Wrapper viewing={viewing}>
      <OneFunc>Chat</OneFunc>
      <OneFunc onClick={() => changeIsShowMap(true)}>Map</OneFunc>
      <OneFunc onClick={() => changeIsShowPlan(true)}>Plan</OneFunc>
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
      />
    </Wrapper>
  );
}

const OneFunc = styled.button`
  outline: none !important;
  border: 1px solid ${whiteColor};
  ${lightBlueBGColor};
  ${whiteText}
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
