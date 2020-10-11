import React, { ReactNode } from "react";
import styled from "styled-components";
import { shadowProps } from "../../../constants/colors";
import centerPutChild from "../../../cssProps/centerPutChild";
import { radiusLg } from "../../../cssProps/radius";
import { normalShadow } from "../../../cssProps/shadow";

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

const Wrapper = styled.div`
  ${centerPutChild}
  background-color: ${shadowProps};
  width: 100vw;
  height: 100vh;
`

const RoomWrapperMain = styled.div<Pick<Props, "bgImg">>`
  ${radiusLg}
  ${normalShadow(12)}
  width: calc(100vw - 24px);
  height: calc(1/2 * (100vw - 24px));
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${({bgImg}) => bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default RoomWrapper;
