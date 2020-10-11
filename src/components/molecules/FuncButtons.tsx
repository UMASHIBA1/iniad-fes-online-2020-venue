import React from "react";
import styled from "styled-components";
import IconButton from "../atoms/IconButton";
import mapIcon from "../../statics/svgs/map-icon.svg";
import chatIcon from "../../statics/svgs/chat-icon.svg";
import scheduleIcon from "../../statics/svgs/schedule-icon.svg";

function FuncButtons() {
  return(
    <Wrapper>
      <IconButton svgPath={mapIcon} iconDescription="map" />
      <IconButton svgPath={chatIcon} iconDescription="chat" />
      <IconButton svgPath={scheduleIcon} iconDescription="plan" />
    </Wrapper>
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
`


export default FuncButtons;
