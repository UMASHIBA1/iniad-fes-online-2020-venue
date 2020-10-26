import React, { useState } from "react";
import styled from "styled-components";
import EscapeGameQuestion from "../../typings/EscapeGame/EscapeGameQuestion";
import { AnswerSelection } from "../../typings/EscapeGame/EscapeGameUserInfo";
import ViewingProp from "../../typings/ViewingProp";
import Button from "../atoms/Button/Button";
import Checkboxs from "../atoms/Checkboxs";
import Modal from "../atoms/Modal/Modal";
import Select from "../atoms/RadioSelect";
import TextInput from "../atoms/TextInput";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewing?: ViewingProp;
  isMobile: boolean;
  escapeGameProps: EscapeGameQuestion;
  onSubmit?: (result: string | AnswerSelection) => void;
  onSubmitMulti?: (result: AnswerSelection[]) => void;
}

function EscapeGameQuestionModal({
  isShow,
  onClose,
  viewing = "left",
  isMobile,
  escapeGameProps,
  onSubmit,
  onSubmitMulti
}: Props) {
  const [textValue, changeTextValue] = useState("");
  const [selectValue, changeSelectValue] = useState<AnswerSelection | null>(
    null
  );
  const [selectedValueList, changeSelectedValueList] = useState<
    AnswerSelection[]
  >([]);

  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      viewing={viewing}
      isMobile={isMobile}
    >
      <Wrapper>
        <Img src={escapeGameProps.questionImg} alt={escapeGameProps.title} />
        {escapeGameProps.mode === "text" ? (
          <Form
            onSubmit={(e) => {
              onSubmit&&onSubmit(textValue);
              e.preventDefault();
            }}
          >
            <TextInput
              required={true}
              name={escapeGameProps.title}
              placeholder="答えを入力してネ！"
              value={textValue}
              changeValueFC={(nextValue) => changeTextValue(nextValue)}
            />
            <Button text="提出" mode="blue" type="submit" useShadow={false} />
          </Form>
        ) : null}
        {escapeGameProps.mode === "selectThree" ? (
          <Form
            onSubmit={(e) => {
              if (selectValue !== null) {
                onSubmit&&onSubmit(selectValue);
              }
              e.preventDefault();
            }}
          >
            <Select
              name={escapeGameProps.title}
              value={selectValue ? selectValue : ""}
              onChange={(value) => {
                value !== "" && changeSelectValue(value as AnswerSelection);
              }}
              optionList={[
                {
                  label: "1",
                  value: "1",
                },
                {
                  label: "2",
                  value: "2",
                },
                {
                  label: "3",
                  value: "3",
                },
              ]}
            />
            <Button text="提出" mode="blue" type="submit" useShadow={false} />
          </Form>
        ) : null}
        {escapeGameProps.mode === "multiSelect" ? (
          <Form
            onSubmit={(e) => {
              if (selectedValueList.length > 0) {
                console.log("runsubmit");
                onSubmitMulti&&onSubmitMulti(selectedValueList);
              }
              e.preventDefault();
            }}
          >
            <Checkboxs
              onChange={(selectedList) => {
                changeSelectedValueList(selectedList as AnswerSelection[]);
              }}
              selected={selectedValueList as string[]}
              selectableOptions={[
                {
                  label: "1",
                  value: "1",
                },
                {
                  label: "2",
                  value: "2",
                },
                {
                  label: "3",
                  value: "3",
                },
                {
                  label: "4",
                  value: "4",
                },
              ]}
            />
            <Button text="提出" mode="blue" type="submit" useShadow={false} />
          </Form>
        ) : null}
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 128px);
  margin: 64px 0;
`;

const Img = styled.img.attrs<{ src: string; alt: string }>(({ src, alt }) => ({
  src: src,
  alt: alt,
}))<{ src: string; alt: string }>`
  width: 100%;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export default EscapeGameQuestionModal;
