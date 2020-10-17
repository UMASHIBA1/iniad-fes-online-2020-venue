import React from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import { blackText, whiteBGColor } from "../../cssProps/colors";
import { radius50percent } from "../../cssProps/radius";
import { normalShadow } from "../../cssProps/shadow";

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
  margin-bottom: 12px;
  ${breakPoints.downTablet} {
    margin-bottom: 0;
  }
`

const RoomTitle = styled.div`
  width: 70%;
  width: 74%;
  font-size: 12px;
  ${breakPoints.downTablet} {
    display: none;
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
  ${normalShadow(3)}
  width: 160px;
  height: 160px;
  outline: none !important;

  ${breakPoints.downTablet} {
    width: 64px;
    height: 64px
  }
`

export default RoomMark;
