import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "../atoms/IconButton";
import mapIcon from "../../statics/svgs/map-icon.svg";
import chatIcon from "../../statics/svgs/chat-icon.svg";
import scheduleIcon from "../../statics/svgs/schedule-icon.svg";
import PDFModal from "./PDFModal";

function FuncButtons() {
  const [isShowMap, changeIsShowMap] = useState(false);
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
            console.log("run plan");
          }}
        />

      </Wrapper>
      <PDFModal
          isShow={isShowMap}
          onClose={() => {
            changeIsShowMap(false);
          }}
          pdfPath="/sample.pdf"
        />
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  right: 8px;
  bottom: 8px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 8px;
`;

export default FuncButtons;
