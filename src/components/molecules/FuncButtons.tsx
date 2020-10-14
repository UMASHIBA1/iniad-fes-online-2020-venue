import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "../atoms/IconButton";
import mapIcon from "../../statics/svgs/map-icon.svg";
import chatIcon from "../../statics/svgs/chat-icon.svg";
import scheduleIcon from "../../statics/svgs/schedule-icon.svg";
import PDFModal from "./PDFModal";
import dummyImg from "../../statics/dummy.png";
import ImgModal from "./ImgModal";

function FuncButtons() {
  const [isShowMap, changeIsShowMap] = useState(false);
  const [isShowPlan, changeIsShowPlan] = useState(false);
  return (
    <>
      <Wrapper>
        <IconButton
          svgPath={mapIcon}
          iconDescription="map"
          onClick={() => {
            changeIsShowMap(true);
          }}
        />
        <IconButton
          svgPath={chatIcon}
          iconDescription="chat"
          onClick={() => {
            console.log("run chat");
          }}
        />
        <IconButton
          svgPath={scheduleIcon}
          iconDescription="plan"
          onClick={() => {
            changeIsShowPlan(true);
          }}
        />
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
      />
      <ImgModal
        isShow={isShowPlan}
        onClose={() => {
          changeIsShowPlan(false);
        }}
        src={dummyImg}
        // FIXME: もし画像でプランを表示させるなら視覚障がい者ようにaltでちゃんとしたプランの一覧を書かないといけない
        alt="plan"
      />
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  right: 8px;
  bottom: 8px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;
`;

export default FuncButtons;
