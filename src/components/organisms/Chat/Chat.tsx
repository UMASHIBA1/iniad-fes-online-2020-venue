import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { whiteBGColor } from "../../../cssProps/colors";
import { radiusSm } from "../../../cssProps/radius";
import useChatDatas from "../../../hooks/useChatDatas";
import Form from "./Form";
import Line from "./Line";
import closeIcon from "../../../statics/svgs/close-icon.svg";
import H2 from "../../atoms/H2";
import { blackColor, gray } from "../../../constants/colors";

interface Props {
  roomId: string;
  isShow: boolean;
  onClose: () => void;
}

function Chat({roomId, isShow, onClose}: Props) {
  const {chatDatas, sendFC} = useChatDatas(roomId);
  const lastElement = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    lastElement.current?.scrollIntoView();
  }

  useEffect(scrollToBottom, [chatDatas]);

  return (
    <Wrapper isShow={isShow}>
      <TitleLine>
        <H2 color={blackColor}>
          Chat
        </H2>
        <div />
        <CloseIcon onClick={onClose} />
        </TitleLine>
      <LineWrapper>
      {chatDatas.map((data, index) => {
        return (
          <Line
            key={
              data.text +
              data.time + index
            }
            {...data}
          />
        );
      })}
      <div ref={lastElement} />
      </LineWrapper>
      <Form room_id={roomId} sendFC={sendFC} />
    </Wrapper>
  );
}

const CloseIcon = styled.img.attrs({
  src: closeIcon,
  alt: "チャット閉じるボタン"
})`
  height: 32px;
  width: 32px;
  margin-right: 24px;
  object-fit: contain;
  cursor: pointer;
`;

const TitleLine = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  align-items: center;
  margin-left: 12px;
  width: 100%;
`

const LineWrapper = styled.div`
  width: 100%;
  overflow: auto;
  border: solid 1px ${gray};
`

const Wrapper = styled.div<{isShow: boolean}>`
  position: absolute;
  right: 64px;
  bottom: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 1fr 32px;
  width: 360px;
  height: 240px;
  ${whiteBGColor}
  ${radiusSm}
  overflow: hidden;
  ${({isShow}) => !isShow&&css`
    visibility: hidden;
  `}
`;

export default Chat;
