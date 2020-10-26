import React from "react";
import styled from "styled-components";
import { blackText } from "../../cssProps/colors";

interface Props {
  dataControllId?: string;
  selectableOptions: {
    label: string;
    value: string;
  }[];
  selected: string[];
  // NOTE: このコンポーネントを呼び出した元で選択したチェックボックスのvalueを受け取るようにする
  onChange: (selectedList: string[]) => void;
}

function Checkboxs({ dataControllId, selectableOptions: options, selected, onChange }: Props) {
  return (
    <Wrapper>
      {options.map(({label, value}) => {
        return (
          <CheckboxWrapper data-controll-id={dataControllId} key={label + value}>
            <Checkbox value={value} onChange={(e) => {
              const searchIndex = selected.findIndex((nowValue) => nowValue === e.target.value);
              if(searchIndex < 0) {
                onChange([...selected, value]);
              } else {
                onChange(selected.filter((nowValue) => nowValue !== value));
              }
            }}
              checked={selected.includes(value)}
            />
            <Label>{label}</Label>
          </CheckboxWrapper>
        );
      })}
    </Wrapper>
  );
}

const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  align-items: center;
  gap: 8px;
  margin-right: 24px;
`;

const Label = styled.label`
  ${blackText}
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Checkboxs;
