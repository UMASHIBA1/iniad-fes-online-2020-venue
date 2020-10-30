import React from "react";
import styled from "styled-components";
import breakPoints from "../../../constants/breakPoints";
import { blackText } from "../../../cssProps/colors";
import useFusenDatas from "../../../hooks/useFusenDatas";
import ViewingProp from "../../../typings/ViewingProp";
import Modal from "../../atoms/Modal/Modal";

interface Props {
    isShow: boolean;
  onClose: () => void;
  isMobile: boolean;
  viewingScreen?: ViewingProp;
}

function FusenModal({
  isMobile,
  isShow,
  onClose,
  viewingScreen
}: Props) {
  const fusenDatas = useFusenDatas();
  return(
    <Modal
      isMobile={isMobile}
      isShow={isShow}
      onClose={onClose}
      viewing={viewingScreen}
    >
    <Wrapper>
      {
        fusenDatas.map((data: string) => {
          return(
            <OneCard>
              {data}
            </OneCard>
          )
        })
      }
    </Wrapper>
    </Modal>
  );
}

const OneCard = styled.div`
  font-size: 14px;
  ${blackText}
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  min-height: 320px;
  max-height: 85vh;
  padding: 16px;
  justify-content: center;
  align-items: center;

  ${breakPoints.downSm} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export default FusenModal;
