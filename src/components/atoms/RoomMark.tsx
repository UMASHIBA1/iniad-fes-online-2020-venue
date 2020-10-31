import React from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import { blackText, whiteBGColor } from "../../cssProps/colors";
import { radius50percent } from "../../cssProps/radius";

interface Props {
  imgPath: string;
  roomTitle: string;
  onClick?: () => void;
  dataControllId?: string;
}

function RoomMark({imgPath, roomTitle,onClick,dataControllId = ""}: Props) {
  return(
    <Wrapper onClick={onClick} dataControllId={dataControllId} >
      <IconImg imgPath={imgPath} roomTitle={roomTitle} />
      <RoomTitle>
        {roomTitle}
      </RoomTitle>
    </Wrapper>
  );
}

const IconImg = styled.img.attrs<Pick<Props, "imgPath" | "roomTitle">>(({imgPath, roomTitle}) => ({
  src: imgPath,
  alt: roomTitle,
}))<Pick<Props, "imgPath" | "roomTitle">>`
  object-fit: fill;
  width: 40%;
  margin-bottom: 5%;
  ${breakPoints.downTablet} {
    margin-bottom: 0;
  }
`

const RoomTitle = styled.div`
  width: 70%;
  width: 74%;

  font-size: 0.5vw;

  ${breakPoints.downSm} {
  font-size: 1vw;
  }

`

const Wrapper = styled.button.attrs<{dataControllId: string}>(({dataControllId}) =>({
  "data-controll-id": dataControllId
}))<{dataControllId: string}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${whiteBGColor}
  ${radius50percent}
  ${blackText}
  box-shadow: 8px 8px 16px rgba(43, 46, 68, 0.3);
  width: 6vw;
  height: 6vw;
  outline: none !important;
  transition: transform 200ms ease-in;

  :hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1700px) {
    width: 9vw;
    height: 9vw;
  }

  ${breakPoints.downTablet} {
    width: 10vw;
    height: 10vw;
  }

  ${breakPoints.downSm} {
    width: 16vw;
    height: 16vw;
  }
`

export default RoomMark;
