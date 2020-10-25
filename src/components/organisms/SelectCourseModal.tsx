import React, { useState } from "react";
import styled from "styled-components";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import Title from "../atoms/Title";
import breakPoints from "../../constants/breakPoints";
import Select from "../atoms/Select";
import Button from "../atoms/Button/Button";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  title: string;
  isMobile: boolean;
  onSubmit: (selected: string) => void;
  optionList: {
    label: string;
    value: string;
  }[];
}

const controllId = {
  select: "selectCourseModalSelect",
};

function SelectCourseModal({
  isShow,
  onClose,
  viewingScreen,
  title,
  isMobile,
onSubmit,
  optionList
}: Props) {
  const [checkedValue, changeCheckedValue] = useState("");
  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      viewing={viewingScreen}
      isMobile={isMobile}
    >
      <Wrapper>
        <TitleWrapper>
          <Title title={title} />
        </TitleWrapper>
        <Select
          dataControllId={controllId.select}
          name="sample"
          optionList={optionList}
          onChange={(value) => {
            changeCheckedValue(value);
          }}
          value={checkedValue}
        />
        <Button text="決定" mode="blue" onClick={() => {onSubmit(checkedValue)}}></Button>
      </Wrapper>
    </Modal>
  );
}

const TitleWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: end;
  width: 90%;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% auto auto 1fr ;
  justify-items: center;
  width: 100%;
  min-height: 400px;
  gap: 16px;

  ${breakPoints.downSm} {
    grid-template-rows: 50% 1fr;
  }

  > div {
    &[data-controll-id=${controllId.select}] {
      width: 90%;

    }
  }
`;

export default SelectCourseModal;
