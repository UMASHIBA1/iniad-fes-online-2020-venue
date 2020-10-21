import React from "react";
import styled, { keyframes } from "styled-components";
import { deepBlueColor } from "../../constants/colors";
import { deepBlueText, whiteBGColor } from "../../cssProps/colors";
import { radiusSm } from "../../cssProps/radius";

interface Props {
  onClick?: () => void;
  dataControllId?: string;
  title: string;
}

function ObjectMark(props: Props) {
  return (
    <Wrapper dataControllId={props.dataControllId}>
      <TitleWrapper>
        <Rectangle />
        <Title>{props.title}</Title>
      </TitleWrapper>
      <CircleWrapper onClick={props.onClick}>
        <WhiteCircle />
        <AnimeCircle />
        <AnimeCircle />
        <AnimeCircle />
      </CircleWrapper>
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

const TitleWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  height: 22px;
  ${deepBlueText}
  ${whiteBGColor}
  ${radiusSm}
  border: 1px solid ${deepBlueColor};
  padding: 0 14px;
`;

const Title = styled.div`
  z-index:2;
`;

const Rectangle = styled.div`
  z-index:1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 8px)) rotate(45deg);
  width: 10px;
  height: 10px;
  ${whiteBGColor}
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

const CircleWrapper = styled.button`
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

const Wrapper = styled.button.attrs<Pick<Props, "dataControllId">>(
  ({ dataControllId }) => ({
    "data-controll-id": dataControllId,
  })
)<Pick<Props, "dataControllId">>`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20px 92px;
  justify-content: center;
  outline: none !important;
`;

export default ObjectMark;
