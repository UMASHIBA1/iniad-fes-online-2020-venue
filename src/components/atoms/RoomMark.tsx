import React from "react";
import styled from "styled-components";
import { blackText, whiteBGColor } from "../../cssProps/colors";
import { radius50percent } from "../../cssProps/radius";
import { normalShadow } from "../../cssProps/shadow";

interface Props {
  imgPath: string;
  roomTitle: string;
  onClick?: () => void;
}

function RoomMark(props: Props) {
  return(
    <Wrapper onClick={props.onClick}>
      <IconImg imgPath={props.imgPath} roomTitle={props.roomTitle} />
      <RoomTitle>
        {props.roomTitle}
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
`

const RoomTitle = styled.div`
  width: 70%;
  width: 74%;
  font-size: 12px;
`

const Wrapper = styled.button`
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
`

export default RoomMark;
