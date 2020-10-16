import React from "react";
import RoomWrapper from "../../templates/smp/RoomWrapper";
import entranceImg from "../../../statics/totyo.png";
import styled from "styled-components";

function Entrance() {
  return(
    <RoomWrapper bgImg={entranceImg}>
      <Wrapper>
        Entrance
      </Wrapper>
    </RoomWrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default Entrance
