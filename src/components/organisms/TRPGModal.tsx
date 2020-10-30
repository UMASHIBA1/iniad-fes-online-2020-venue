import React from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import VideoProps from "../../typings/RoomPropType/VideoProps";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import VideoPlayer from "../atoms/VideoPlayer";

interface Props {
    isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
    isMobile: boolean;
  video: VideoProps;
}

function TRPGModal({isShow, onClose, viewingScreen, isMobile, video}: Props) {
  return(
    <Modal isShow={isShow} onClose={onClose} viewing={viewingScreen} isMobile={isMobile}>
    <Wrapper>
      <VideoWrapper>
        <VideoPlayer
        controls={true}
        sources={[
          {
            src: video.url,
            type: video.mode === "streaming"?"application/x-mpegURL": "video/mp4",
          },
        ]}
        />
      </VideoWrapper>
    </Wrapper>
    </Modal>

  );
}


const VideoWrapper = styled.div`
  padding: 32px 0 ;
  box-sizing: border-box;
  width: 100%;

  ${breakPoints.downSm} {
    padding: 16px 0;
  }
`;


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: calc(100% - 16px);
  max-height: 90vh;
  min-height: 300px;
  max-width: 98%;
  padding: 0 32px;
  overflow: hidden;

  ${breakPoints.downSm} {
    padding: 0 16px;
  }
`;


export default TRPGModal;
