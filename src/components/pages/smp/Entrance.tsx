import React from "react";
import RoomWrapper from "../../templates/smp/RoomWrapper";
import entranceImg from "../../../statics/totyo.png";
import styled from "styled-components";
import Footer from "../../molecules/smp/Footer";

function Entrance() {
  return(
    <RoomWrapper bgImg={entranceImg} viewing="left">
      <Wrapper>
        Entrance
        <Footer viewing="left" />
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
