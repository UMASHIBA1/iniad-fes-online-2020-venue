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
  videoPropList: VideoProps[];
  isMobile: boolean;
}

function VideoModal({
  isShow,
  onClose,
  viewingScreen,
  videoPropList,
  isMobile,
}: Props) {
  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      viewing={viewingScreen}
      isMobile={isMobile}
    >
      <Wrapper>
        {isShow
          ? videoPropList.map((oneVideoProp) => (
              <VideoWrapper>
                <VideoPlayer
                  key={oneVideoProp.url}
                  controls={true}
                  sources={[
                    {
                      src: oneVideoProp.url,
                      type:
                        oneVideoProp.mode === "streaming"
                          ? "application/x-mpegURL"
                          : "video/mp4",
                    },
                  ]}
                />
              </VideoWrapper>
            ))
          : null}
      </Wrapper>
    </Modal>
  );
}
const VideoWrapper = styled.div`
  padding: 32px;
  box-sizing: border-box;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  min-height: 300px;
  max-width: 98%;
`;

export default VideoModal;
