import React, { useState } from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import EscapeGameQuestion from "../../typings/EscapeGame/EscapeGameQuestion";
import { AnswerSelection } from "../../typings/EscapeGame/EscapeGameUserInfo";
import ViewingProp from "../../typings/ViewingProp";
import Button from "../atoms/Button/Button";
import Checkboxs from "../atoms/Checkboxs";
import Modal from "../atoms/Modal/Modal";
import RadioSelect from "../atoms/RadioSelect";
import TextInput from "../atoms/TextInput";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewing?: ViewingProp;
  isMobile: boolean;
  escapeGameProps: EscapeGameQuestion;
  onSubmit?: (result: string | AnswerSelection) => void;
  onSubmitMulti?: (result: AnswerSelection[] | string[]) => void;
}

function EscapeGameQuestionModal({
  isShow,
  onClose,
  viewing = "left",
  isMobile,
  escapeGameProps,
  onSubmit,
  onSubmitMulti,
}: Props) {
  const [textValue, changeTextValue] = useState("");
  const [selectValue, changeSelectValue] = useState<AnswerSelection | null>(
    null
  );
  const [textValueList, changeTextValueList] = useState<string[]>([]);
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
              onSubmit && onSubmit(textValue);
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
                onSubmit && onSubmit(selectValue);
              }
              e.preventDefault();
            }}
          >
            <RadioSelect
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
                onSubmitMulti && onSubmitMulti(selectedValueList);
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
        {escapeGameProps.mode === "threeText" ? (
          <Form
            onSubmit={(e) => {
              if (textValueList.length >= 3) {
                onSubmitMulti && onSubmitMulti(textValueList);
              }
              e.preventDefault();
            }}
          >
            <ThreeTextWrapper>
              <TextInput
                required={true}
                placeholder="1つ目の答え"
                value={textValueList[0]}
                changeValueFC={(value) => {
                  changeTextValueList([
                    value,
                    textValueList[1],
                    textValueList[2],
                  ]);
                }}
              />
              <TextInput
                required={true}
                placeholder="2つ目の答え"
                value={textValueList[1]}
                changeValueFC={(value) => {
                  changeTextValueList([
                    textValueList[0],
                    value,
                    textValueList[2],
                  ]);
                }}
              />
              <TextInput
                required={true}
                placeholder="3つ目の答え"
                value={textValueList[2]}
                changeValueFC={(value) => {
                  changeTextValueList([
                    textValueList[0],
                    textValueList[1],
                    value,
                  ]);
                }}
              />
              <Button text="提出" mode="blue" type="submit" useShadow={false} />
            </ThreeTextWrapper>
          </Form>
        ) : null}
        {escapeGameProps.mode === "twoText" ? (
          <Form
            onSubmit={(e) => {
              if (textValueList.length >= 2) {
                onSubmitMulti && onSubmitMulti(textValueList);
              }
              e.preventDefault();
            }}
          >
            <TwoTextWrapper>
            <TextInput
              required={true}
              placeholder="1つ目の答え"
              value={textValueList[0]}
              changeValueFC={(value) => {
                changeTextValueList([value, textValueList[1]]);
              }}
            />
            <TextInput
              required={true}
              placeholder="2つ目の答え"
              value={textValueList[1]}
              changeValueFC={(value) => {
                changeTextValueList([textValueList[0], value]);
              }}
            />
            <Button text="提出" mode="blue" type="submit" useShadow={false} />
            </TwoTextWrapper>
          </Form>
        ) : null}
        {escapeGameProps.mode === "select" ? (
          <Form
            onSubmit={(e) => {
              if (selectValue !== null) {
                onSubmit && onSubmit(selectValue);
              }
              e.preventDefault();
            }}
          >
            <RadioSelect
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
  padding: 32px 0;
  max-height: 70vh;
  overflow: auto;

  ${breakPoints.downSm} {
    width: calc(100% - 32px);
  }
`;

const Img = styled.img.attrs<{ src: string; alt: string }>(({ src, alt }) => ({
  src: src,
  alt: alt,
}))<{ src: string; alt: string }>`
  width: 100%;
`;

const ThreeTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${breakPoints.downSm} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;


const TwoTextWrapper = styled.div`

  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  gap: 8px;

${breakPoints.downSm} {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
}

`

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export default EscapeGameQuestionModal;
