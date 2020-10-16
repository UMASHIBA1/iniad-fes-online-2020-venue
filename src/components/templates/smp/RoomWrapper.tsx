import React, { ReactNode } from "react";
import styled from "styled-components";
import centerPutChild from "../../../cssProps/centerPutChild";

interface Props {
  children: ReactNode;
  bgImg: string;
}

function RoomWrapper({children, bgImg}: Props) {
  return(
    <Wrapper>
      <RoomWrapperMain bgImg={bgImg}>
        {children}
      </RoomWrapperMain>
    </Wrapper>
  );
}

const RoomWrapperMain = styled.div<Pick<Props, "bgImg">>`
  width: 100vw;
  height: calc(1 / 2 * 100vw);
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${({bgImg}) => bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const Wrapper = styled.div`
  ${centerPutChild}
  background-color: #000000;
  width: 100vw;
  height: 100vh;
`

export default RoomWrapper
