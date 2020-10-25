import React from "react";
import styled from "styled-components";
import { blackText } from "../../cssProps/colors";

interface Props {
  name: string;
  optionList: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

function Select({ optionList, name, value, onChange }: Props) {
  return (
    <Wrapper>
      {optionList.map((option) => {
        return (
          <OptionWrapper key={option.label + option.value}>
            <Option value={option.value} name={name} type="radio" onChange={(e) => {onChange(e.target.value)}} checked={option.value === value} />
            <Label>{option.label}</Label>
          </OptionWrapper>
        );
      })}
    </Wrapper>
  );
}

const OptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  align-items: center;
  gap: 8px;
  margin: 16px;
`;

const Option = styled.input`
  display: grid;
  justify-content: center;
`;

const Label = styled.label`
  ${blackText}
  display: grid;
  justify-items: center;
  padding-bottom: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Select;
