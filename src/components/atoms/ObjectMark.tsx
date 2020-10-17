import React from "react";
import styled, { keyframes } from "styled-components";
import { whiteBGColor } from "../../cssProps/colors";

interface Props {
  onClick?: () => void;
  dataControllId?: string;
}

function ObjectMark(props: Props) {
  return (
    <Wrapper onClick={props.onClick} dataControllId={props.dataControllId}>
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
`;

const WhiteCircle = styled.div`
  position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
  ${whiteBGColor}
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;

const AnimeCircle = styled(WhiteCircle)`
  animation: ${circleAnime} 2400ms ease-in infinite;
`;

const Wrapper = styled.button.attrs<Pick<Props, "dataControllId">>(
  ({ dataControllId }) => ({
    "data-controll-id": dataControllId,
  })
)<Pick<Props, "dataControllId">>`
  cursor: pointer;
  outline: none !important;

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
`;

export default ObjectMark;
