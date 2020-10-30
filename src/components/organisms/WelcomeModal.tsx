import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { welcomeImg } from "../../constants/filePath";
import useDidMount from "../../hooks/useDidMount/useDidMount";
import ViewingProp from "../../typings/ViewingProp";
import Img from "../atoms/Img";
import Modal from "../atoms/Modal/Modal";

interface Props {
  viewingProps?: ViewingProp;
  isMobile: boolean;
}

const storageKey = "isFirstVisitOnThisBrowser";

const useIsFirstVisitOnThisBrowser = () => {
  const [isFirstVisitOnThisBrowser, changeIsFirstVisitOnThisBrowser] = useState(
    false
  );

  useDidMount(() => {
    const item = localStorage.getItem(storageKey);
    if (item === null) {
      changeIsFirstVisitOnThisBrowser(true);
      localStorage.setItem(storageKey, "true");
    }
  });

  return isFirstVisitOnThisBrowser;
};

function WelcomeModal({ viewingProps, isMobile }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const isFirstVisitOnThisBrowser = useIsFirstVisitOnThisBrowser();

  useEffect(() => {
    if (isFirstVisitOnThisBrowser) {
      setTimeout(() => {
      changeIsShowModal(true);
      }, 200);
    }
  }, [isFirstVisitOnThisBrowser]);

  return (
    <Modal
      isMobile={isMobile}
      isShow={isShowModal}
      onClose={() => {
        changeIsShowModal(false);
      }}
      viewing={viewingProps}
    >
      <Wrapper>
        <Img
          alt="ようこそ INIAD FESへ、このサイトはINIADの学園祭サイトです。脱出ゲーム等もあります。是非楽しんでいってください"
          src={welcomeImg}
        />
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
`;

export default WelcomeModal;
