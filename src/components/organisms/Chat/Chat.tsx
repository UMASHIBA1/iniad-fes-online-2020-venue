import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { whiteBGColor } from "../../../cssProps/colors";
import { radiusSm } from "../../../cssProps/radius";
import useChatDatas from "../../../hooks/useChatDatas";
import Form from "./Form";
import Line from "./Line";

interface Props {
  roomId: string;
}

function Chat({roomId}: Props) {
  const {chatDatas, sendFC} = useChatDatas(roomId);
  const lastElement = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    lastElement.current?.scrollIntoView();
  }

  useEffect(scrollToBottom, [chatDatas]);

  return (
    <Wrapper>
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
const LineWrapper = styled.div`
  width: 100%;
  overflow: auto;
`

const Wrapper = styled.div`
  position: absolute;
  right: 64px;
  bottom: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 32px;
  width: 360px;
  height: 160px;
  ${whiteBGColor}
  ${radiusSm}
  overflow: hidden;
`;

export default Chat;
