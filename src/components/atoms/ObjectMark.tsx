import React from "react";
import styled, { keyframes } from "styled-components";
import { whiteBGColor } from "../../cssProps/colors";

interface Props {
  onClick?: () => void;
}

function ObjectMark(props: Props) {
  return(
    <Wrapper onClick={props.onClick}>
      <WhiteCircle />
      <AnimeCircle />
      <AnimeCircle />
      <AnimeCircle />
    </Wrapper>
  );
}

const circleAnime = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
`

const WhiteCircle = styled.div`
    position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
  ${whiteBGColor}
  border-radius: 50%;
  height: 32px;
  width: 32px;
`

const AnimeCircle = styled(WhiteCircle)`
  animation: ${circleAnime} 2400ms ease-in infinite;
`


const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;

  ${AnimeCircle} {
    :nth-child(1) {
      animation-delay: 0ms;
    }

    :nth-child(2) {
      animation-delay: 800ms;
    }

    :nth-child(3) {
      animation-delay: 1600ms;
    }

  }
`



export default ObjectMark;
