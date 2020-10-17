import React from "react"
import styled from "styled-components";
import { lightBlueColor } from "../../../constants/colors";

function Form() {
  return(
    <Wrapper>
      <Input />
      <Button>送信</Button>
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
