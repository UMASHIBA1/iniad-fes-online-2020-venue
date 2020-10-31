import React from "react";
import styled from "styled-components";
import { blackText } from "../../../cssProps/colors";
import { radiusSm } from "../../../cssProps/radius";
import { normalShadow } from "../../../cssProps/shadow";
import useFusenDatas from "../../../hooks/useFusenDatas";
import ViewingProp from "../../../typings/ViewingProp";
import sendFusenDatas from "../../../utils/sendFusenDatas";
import Modal from "../../atoms/Modal/Modal";
import Title from "../../atoms/Title";
import Form from "./Form";

interface Props {
  isShow: boolean;
  onClose: () => void;
  isMobile: boolean;
  viewingScreen?: ViewingProp;
}

function FusenModal({ isMobile, isShow, onClose, viewingScreen }: Props) {
  const { fusenTexts, fusenRoomId, addFusenText } = useFusenDatas();
  return (
    <Modal
      isMobile={isMobile}
      isShow={isShow}
      onClose={onClose}
      viewing={viewingScreen}
    >
      <Wrapper>
        <Title title="あなたがSDGsに関して思ったことを書き込んでみよう！" />
        <FusenWrapper>
          {fusenTexts.map((data: string) => {
            return <OneCard>{data}</OneCard>;
          })}
        </FusenWrapper>
        <Form room_id={fusenRoomId} sendFC={(room_id, text) => {
          sendFusenDatas(room_id, text).then(() => {
            addFusenText(text);
          });

        }} />
      </Wrapper>
    </Modal>
  );
}

const OneCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  ${blackText}
  ${normalShadow(2)}
  padding: 16px;
  margin: 4px;
  ${radiusSm}
`;

const FusenWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  max-height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  width: 100%;
  max-height: 70vh;
  padding: 16px;
`;

export default FusenModal;
