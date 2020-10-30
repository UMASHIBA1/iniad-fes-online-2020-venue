import React from "react";
import styled from "styled-components";
import { lightBlueColor } from "../../constants/colors";
import { radiusSm } from "../../cssProps/radius";

interface Props {
  name?: string;
  required?: boolean;
  placeholder?:string;
  changeValueFC: (value: string) => void;
  value: string;
}


const TextInput = ({name, required, placeholder, changeValueFC, value}: Props) => {
  return(
    <Main name={name} required={required} placeholder={placeholder} value={value} onChange={(e) => {
      changeValueFC(e.target.value);
    }} />
  );
}

const Main = styled.input.attrs<Pick<Props,"name" | "required" | "placeholder">>(({name = "", required = false, placeholder = ""}) => ({
  type: "text",
  name: name,
  required: required,
  placeholder: placeholder
}))<Pick<Props,"name" | "required" | "placeholder">>`
  ${radiusSm}
  outline: none !important;
  border: solid 1px ${lightBlueColor};
  padding: 2px 0 4px 6px;
`;

export default TextInput;
