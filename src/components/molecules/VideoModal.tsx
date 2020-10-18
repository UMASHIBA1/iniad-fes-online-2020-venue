import React from "react";
import styled from "styled-components";
import VideoProps from "../../typings/RoomPropType/VideoProps";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import VideoPlayer from "../atoms/VideoPlayer";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  videoProps: VideoProps;
  isMobile: boolean;
}

function VideoModal({isShow, onClose, viewingScreen, videoProps, isMobile}: Props) {
  return(
    <Modal isShow={isShow} onClose={onClose} viewing={viewingScreen} isMobile={isMobile}>
    <Wrapper>
      {isShow?(<VideoPlayer
          controls={true}
          sources={[
            {
              src: videoProps.url,
              type: videoProps.mode==="streaming"?"application/x-mpegURL": "video/mp4",
            },
          ]}
        />): null}

    </Wrapper>
    </Modal>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  min-height: 300px;
  max-width: 98%;
`

export default VideoModal;
