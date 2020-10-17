import React from "react";
import styled from "styled-components";
import { whiteBGColor } from "../../../cssProps/colors";
import { radiusSm } from "../../../cssProps/radius";
import useChatDatas from "../../../hooks/useChatDatas";
import Form from "./Form";
import Line from "./Line";

function Chat() {
  const chatDatas = useChatDatas();

  return (
    <Wrapper>
      <LineWrapper>
      {chatDatas.map((data) => {
        return (
          <Line
            key={
              data.text +
              data.time +
              "is_admin" +
              data.is_admin +
              "is_circle_staff" +
              data.is_circle_staff
            }
            {...data}
          />
        );
      })}
      </LineWrapper>
      <Form />
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
