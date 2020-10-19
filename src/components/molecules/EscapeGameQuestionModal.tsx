import React, { useState } from "react";
import styled from "styled-components";
import EscapeGameQuestion from "../../typings/EscapeGame/EscapeGameQuestion";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import TextInput from "../atoms/TextInput";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewing?: ViewingProp;
  isMobile: boolean;
  escapeGameProps: EscapeGameQuestion;
}

function EscapeGameQuestionModal({
  isShow,
  onClose,
  viewing = "left",
  isMobile,
  escapeGameProps,
}: Props) {
  const [textValue, changeTextValue] = useState("");

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
          <Form>
            <TextInput
              required={true}
              name={escapeGameProps.title}
              placeholder="答えを入力してネ！"
              value={textValue}
              changeValueFC={(nextValue) => changeTextValue(nextValue)}
            />
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
