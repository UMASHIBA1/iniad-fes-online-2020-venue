import React from "react";
import styled from "styled-components";
import centerPutChild from "../../cssProps/centerPutChild";
import { whiteBGColor } from "../../cssProps/colors";
import ViewingProp from "../../typings/ViewingProp";
import IFrameWrap from "../atoms/IFrameWrap";
import Modal from "../atoms/Modal/Modal";
import Title from "../atoms/Title";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  youtubeIframeCode: string;
  title: string;
  isMobile: boolean;
}

function YouTubeModal({
  isShow,
  onClose,
  viewingScreen,
  youtubeIframeCode,
  title,
  isMobile
}: Props) {


  return (
    <Modal isShow={isShow} onClose={onClose} viewing={viewingScreen} isMobile={isMobile}>
      <Wrapper>
      <TextWrapper>
        <Title title={title} />
      </TextWrapper>
      <VideoWrapper>
      <IFrameWrap
      iframeCode={youtubeIframeCode}
      />
      </VideoWrapper>
      </Wrapper>
    </Modal>
  );
}

const VideoWrapper = styled.div`
  width: 90vw;
  max-width: 100%;
  height: calc(90vw * 0.5625);

  >* {
    width: 100%;
    height: 100%;
  }
`

const TextWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

const Wrapper = styled.div`
  ${centerPutChild}
  ${whiteBGColor}
  width: calc(100% - 8px);
  overflow: auto;
  padding: 0 0 64px;
`

export default YouTubeModal;
