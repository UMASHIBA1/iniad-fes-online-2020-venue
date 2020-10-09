import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  bgImg: string;
}

function RoomWrapper({children, bgImg}: Props) {
  return(
    <Wrapper bgImg={bgImg}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<Pick<Props, "bgImg">>`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${({bgImg}) => bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default RoomWrapper;
