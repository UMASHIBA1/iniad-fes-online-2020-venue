import React, { useState } from "react"
import styled from "styled-components";
import { lightBlueColor } from "../../../constants/colors";
import { ChatPostType } from "../../../typings/ChatType";

interface Props {
  room_id: string;
  sendFC: (data: ChatPostType) => void;
}

function Form({room_id,sendFC}: Props) {
  const [sendText, changeSendText] = useState<string>("");

  return(
    <Wrapper onSubmit={(e) => {
      sendFC({payload: {room_id, text: sendText}, type: "chat"})
      e.preventDefault();
      changeSendText("");
    }}>
      <Input
      value={sendText}
      onChange={(e) => {
        changeSendText(e.target.value);
      }} />
      <Button >送信</Button>
    </Wrapper>
  );
}

const Input = styled.input.attrs({
  type: "text",
  required: true,
  name: "chat"
})`
  height: 100%;
  outline: none;
  border: 1px solid ${lightBlueColor};
  padding-left: 4px;
`;

const Button = styled.button.attrs({
  type: "submit",
})`
  height: 100%;
  outline: none !important;
  border: 1px solid ${lightBlueColor};
`

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 1fr;
`;

export default Form;
