import React, { useState } from "react";
import styled, { css } from "styled-components";
import { whiteBGColor } from "../../cssProps/colors";
import ViewingProp from "../../typings/ViewingProp";
import Description from "../atoms/Description";
import Modal from "../atoms/Modal/Modal";
import ObjectMark from "../atoms/ObjectMark";
import Title from "../atoms/Title";

interface Props {
  viewingScreen?: ViewingProp;
  isMobile: boolean;
  title: string;
  description: string;
}

const dataControllId = {
  button: "circleDescriptionModal-button",
};

function CircleDescriptionModal({
  viewingScreen,
  isMobile,
  title,
  description,
}: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);

  return (
    <Wrapper isMobile={isMobile}>
      <ObjectMark
        title="サークルについて"
        dataControllId={dataControllId.button}
        onClick={() => {
          changeIsShowModal(true);
        }}
      />
      <Modal
        isShow={isShowModal}
        isMobile={isMobile}
        onClose={() => {
          changeIsShowModal(false);
        }}
        viewing={viewingScreen}
      >
        <ContentWrapper>
          <Title title={title} />
          <Description description={description} />
        </ContentWrapper>
      </Modal>
    </Wrapper>
  );
}

const ContentWrapper = styled.div`
  ${whiteBGColor}
  width: calc(100% - 8px);
  max-height: 70vh;
  overflow: auto;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 16px;
`;

const Wrapper = styled.div<{ isMobile: boolean }>`
  > button {
    ${({ isMobile }) =>
      !isMobile &&
      css`
        &[data-controll-id=${dataControllId.button}] {
          position: absolute;
          bottom: 7%;
          left: 3%;
        }
      `}

    ${({ isMobile }) =>
      isMobile &&
      css`
        &[data-controll-id=${dataControllId.button}] {
          position: absolute;
          top: 7%;
          left: 50%;
        }
      `}
  }
`;

export default CircleDescriptionModal;
