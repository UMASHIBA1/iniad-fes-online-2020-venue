import React from "react";
import styled from "styled-components";
import { blackText } from "../../../cssProps/colors";
import { radiusSm } from "../../../cssProps/radius";
import { normalShadow } from "../../../cssProps/shadow";
import useFusenDatas from "../../../hooks/useFusenDatas";
import ViewingProp from "../../../typings/ViewingProp";
import sendFusenDatas from "../../../utils/sendFusenDatas";
import Modal from "../../atoms/Modal/Modal";
import Form from "./Form";

interface Props {
  isShow: boolean;
  onClose: () => void;
  isMobile: boolean;
  viewingScreen?: ViewingProp;
}

function FusenModal({ isMobile, isShow, onClose, viewingScreen }: Props) {
  const { fusenTexts, fusenRoomId } = useFusenDatas();
  return (
    <Modal
      isMobile={isMobile}
      isShow={isShow}
      onClose={onClose}
      viewing={viewingScreen}
    >
      <Wrapper>
        <FusenWrapper>
          {fusenTexts.map((data: string) => {
            return <OneCard>{data}</OneCard>;
          })}
        </FusenWrapper>
        <Form room_id={fusenRoomId} sendFC={sendFusenDatas} />
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
  ${radiusSm}
  height: auto;
`;

const FusenWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  padding: 16px;
  overflow: auto;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  width: 100%;
  min-height: 320px;
  max-height: 85vh;
  padding: 8px;
`;

export default FusenModal;
