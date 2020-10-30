import React from "react";
import styled from "styled-components";
import centerPutChild from "../../cssProps/centerPutChild";
import { whiteBGColor } from "../../cssProps/colors";
import ViewingProp from "../../typings/ViewingProp";
import IFrameWrap from "../atoms/IFrameWrap";
import Modal from "../atoms/Modal/Modal";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  iframeCode: string;
  isMobile: boolean;
}

function IFramePageModal({
  isShow,
  onClose,
  viewingScreen,
  iframeCode,
  isMobile
}: Props) {


  return (
    <Modal isShow={isShow} onClose={onClose} viewing={viewingScreen} isMobile={isMobile}>
      <Wrapper>
        <ContentWrapper>
          <IFrameWrap
          iframeCode={iframeCode}
          />
        </ContentWrapper>
      </Wrapper>
    </Modal>
  );
}

const ContentWrapper = styled.div`
  ${centerPutChild}
  width: 100%;
  height: 85vh;
  >* {
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  ${centerPutChild}
  ${whiteBGColor}
  width: calc(100% - 8px);
  overflow: auto;
`

export default IFramePageModal;
