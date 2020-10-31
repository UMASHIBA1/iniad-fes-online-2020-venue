import React, { useState } from "react"
import styled from "styled-components";
import { lightBlueColor } from "../../../constants/colors";
import { radiusSm } from "../../../cssProps/radius";

interface Props {
  room_id: string;
  sendFC: (room_id: string, text: string) => void;
}

function Form({room_id,sendFC}: Props) {
  const [sendText, changeSendText] = useState<string>("");

  return(
    <Wrapper onSubmit={(e) => {
      sendFC(room_id, sendText)
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
  ${radiusSm}
`;

export default Form;
