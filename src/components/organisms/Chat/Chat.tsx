import React from "react";
import styled from "styled-components";
import { whiteBGColor } from "../../../cssProps/colors";
import { radiusSm } from "../../../cssProps/radius";
import useChatDatas from "../../../hooks/useChatDatas";
import Line from "./Line";

function Chat() {
  const chatDatas = useChatDatas();

  return(
    <Wrapper>
      {
        chatDatas.map((data) => {
          return(
            <Line key={data.text + data.time + "is_admin" +  data.is_admin + "is_circle_staff" +  data.is_circle_staff} {...data} />
          );
        })
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 64px;
  bottom: 8px;
  width: 360px;
  height: 160px;
  ${whiteBGColor}
  ${radiusSm}
  overflow: auto;
`

export default Chat;
